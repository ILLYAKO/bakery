import React, {
  useState,
  useContext,
  useCallback,
  useEffect,
  useMemo,
} from "react";

import { useHttp } from "../hooks/http.hook";
import { Product } from "../components/Product";

const ProductContext = React.createContext();

export const useProduct = () => {
  return useContext(ProductContext);
};

export const ProductProvider = ({ children }) => {
  const { request } = useHttp();
  const [storeProducts, setStoreProducts] = useState([]);
  const [product, setProduct] = useState();
  const [productsInCart, setProductsInCart] = useState([]);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [cartTax, setCartTax] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const func = async () => {
      try {
        const result = await request("/api/product/products", "POST", {
          products: "allProduct",
        });
        setStoreProducts(result);
      } catch (e) {}
    };
    func();
  }, [request]);

  const getItem = (id) => {
    const product = storeProducts.find((item) => item.id === id);
    return product;
  };

  const addProductInCart = (id) => {
    let tempProducts = [...storeProducts];
    const index = tempProducts.indexOf(getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    console.log("productsInCart0", productsInCart);
    setProductsInCart([...productsInCart, product]);
    setStoreProducts(tempProducts);
    console.log("productsInCart1", productsInCart);
    addTotals([...productsInCart, product]);
  };

  const increment = (id) => {
    let tempCart = [...productsInCart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;
    setProductsInCart([...tempCart]);
    addTotals(productsInCart);
  };

  const decrement = (id) => {
    let tempCart = [...productsInCart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count - 1;
    if (product.count === 0) {
      removeItem(id);
    } else {
      product.total = product.count * product.price;
      setProductsInCart([...tempCart]);
      addTotals(productsInCart);
    }
  };

  const removeItem = (id) => {
    let tempProducts = [...storeProducts];
    let tempCart = [...productsInCart];
    tempCart = tempCart.filter((item) => item.id !== id);
    const index = tempProducts.indexOf(getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;
    setStoreProducts(tempProducts);
    setProductsInCart([...tempCart]);
    addTotals(productsInCart);
  };

  const addTotals = (tempProductsInCart) => {
    let subTotal = 0;
    console.log("-*->-addTotals-productsInCart", tempProductsInCart);
    tempProductsInCart.map((item) => {
      console.log("item.total: ", item.total);
      subTotal += item.total;
    });
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    setCartSubTotal(subTotal);
    setCartTax(tax);
    setCartTotal(total);
  };  

  const clearCart = () => {
    setProductsInCart([]);
    setStoreProducts([]);
    addTotals([]);
    console.log("clearCart");
  };

  return (
    <ProductContext.Provider
      value={{
        storeProducts,
        product,
        productsInCart,
        setProductsInCart,
        addProductInCart,
        increment,
        decrement,
        cartSubTotal,
        cartTax,
        cartTotal,
        clearCart,
        removeItem
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
