import { makeAutoObservable } from "mobx";
import axios from "axios";
import AuthService from "../service/AuthService";
import ProductService from "../service/ProductService";
import OrderService from "../service/OrderService";
import { API_URL } from "../http";
import { dummyProductsDb } from "./dummyDb";

export default class Store {
  user = {};
  isAuth = false;
  isLoading = false;
  products = [];
  detailProduct = {};
  cart = [];
  modalOpen = false;
  modalProduct = {};
  cartSubTotal = 0.0;
  tax = 0.13;
  cartTax = 0.0;
  cartTotal = 0.0;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool) {
    this.isAuth = bool;
  }

  setUser(user) {
    this.user = user;
  }

  setLoading(bool) {
    this.isLoading = bool;
  }

  setProducts(productsAll) {
    this.products = productsAll;
  }

  setDetailProduct(productOne) {
    this.detailProduct = productOne;
  }

  setModalOpen(bool) {
    this.modalOpen = bool;
  }

  setModalProduct(productI) {
    this.modalProduct = productI;
  }

  setCart(cart) {
    this.cart = cart;
  }

  setCartSubTotal(cartSubTotal) {
    this.cartSubTotal = cartSubTotal;
  }

  setCartTax(cartTax) {
    this.cartTax = cartTax;
  }

  setCartTotal(cartTotal) {
    this.cartTotal = cartTotal;
  }

  async registration(email, password) {
    try {
      const response = await AuthService.registration(email, password);
      localStorage.setItem("token", response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e) {
      console.log("Registration server error: ", e.response?.data?.message);
    }
  }

  async login(email, password) {
    try {
      const response = await AuthService.login(email, password);
      localStorage.setItem("token", response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e) {
      console.log("Login server error: ", e.response?.data?.message);
    }
  }

  async logout() {
    try {
      await AuthService.logout();
      localStorage.removeItem("token");
      this.setAuth(false);
      this.setUser({});
    } catch (e) {
      console.log("Logout server error: ", e.response?.data?.message);
    }
  }

  async checkAuth() {
    this.setLoading(true);
    try {
      const response = await axios.get(`${API_URL}/user/refresh`, {
        withCredentials: true,
      });
      localStorage.setItem("token", response.data.accessToken);
      await this.setAuth(true);
      await this.setUser(response.data.user);
    } catch (e) {
      console.log("checkAuth server error: ", e.response?.data?.messge);
    } finally {
      this.setLoading(false);
    }
  }

  async uploadProduct(data) {
    try {
      // eslint-disable-next-line
      const response = await ProductService.uploadProduct(data);
    } catch (e) {
      console.log("UploadProduct server error: ", e.response?.data?.message);
    }
  }

  async getAllProducts() {
    try {
      const response = await ProductService.getAllProducts();
      if (response) {
        await this.setProducts(response.data);
      } else {
        await this.setProducts(dummyProductsDb);
      }
    } catch (e) {
      console.log("getAllProducts server error: ", e.response?.data?.message);
    }
  }
  async getItem(id) {
    try {
      const response = await ProductService.findOne(id);
      if (response) {
        await this.setDetailProduct(response.data);
      } else {
        let tempProduct = {};
        await dummyProductsDb.map((item) =>
          // eslint-disable-next-line
          item.dataValues.id == id ? (tempProduct = item) : {}
        );
        await this.setDetailProduct(tempProduct);
      }
    } catch (e) {
      let tempProduct = {};
      await dummyProductsDb.map((item) =>
        // eslint-disable-next-line
        item.dataValues.id == id ? (tempProduct = item) : {}
      );
      await this.setDetailProduct(tempProduct);
      console.log("getOneProduct server error: ", e.response?.data?.message);
    }
  }

  async handleDetail(id) {
    await this.getItem(id);
  }
  // -----------
  async addToCart(id) {
    if (Array.isArray(this.cart) && !this.cart.length) {
      await this.getItem(id);
      let tempCart = [...this.cart];
      let tempProduct = {
        ...this.detailProduct,
        quantityInCart: 1,
        productTotal: parseFloat(this.detailProduct?.dataValues?.productPrice),
      };
      await this.setCartSubTotal(
        parseFloat(this.detailProduct.dataValues.productPrice)
      );
      //
      await tempCart.push(tempProduct);

      await this.setCartTax(this.cartSubTotal * 0.13);
      await this.setCartTotal(this.cartSubTotal * 1.13);
      await this.setCart(tempCart);
    } else if (Array.isArray(this.cart) && this.cart.length) {
      await this.getItem(id);
      let tempCart = [...this.cart];
      let isNOTinCart = true;

      await tempCart.map((item) => {
        const tempId = item.dataValues.id;
        // eslint-disable-next-line
        if (tempId == id) {
          isNOTinCart = false;
          item.quantityInCart = item.quantityInCart + 1;
          item.productTotal =
            parseFloat(item.productTotal) +
            parseFloat(this.detailProduct.dataValues.productPrice);
          this.setCartSubTotal(
            parseFloat(this.cartSubTotal) +
              parseFloat(this.detailProduct.dataValues.productPrice)
          );
        }
        return item;
      });

      if (isNOTinCart) {
        let tempProduct = {
          ...this.detailProduct,
          quantityInCart: 1,
          productTotal: parseFloat(this.detailProduct.dataValues.productPrice),
        };
        await this.setCartSubTotal(
          parseFloat(this.cartSubTotal) +
            parseFloat(this.detailProduct.dataValues.productPrice)
        );

        await tempCart.push(tempProduct);
      }
      await this.setCartTax(this.cartSubTotal * 0.13);
      await this.setCartTotal(this.cartSubTotal * 1.13);

      await this.setCart(tempCart);
    }
  }
  // ------------------------------
  async openModal(id) {
    this.setModalOpen(true);
  }

  async closeModal() {
    this.setModalOpen(false);
  }

  increment = (id) => {
    let tempCart = [...this.cart];
    const selectedProduct = tempCart.find((item) => item.dataValues.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.quantityInCart = product.quantityInCart + 1;
    product.productTotal =
      parseFloat(product.productTotal) +
      parseFloat(product.dataValues.productPrice);
    this.setCartSubTotal(
      parseFloat(this.cartSubTotal) +
        parseFloat(product.dataValues.productPrice)
    );
    this.setCartTax(this.cartSubTotal * 0.13);
    this.setCartTotal(this.cartSubTotal * 1.13);
    this.setCart(tempCart);
  };
  decrement = (id) => {
    let tempCart = [...this.cart];
    const selectedProduct = tempCart.find((item) => item.dataValues.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    if (product.quantityInCart > 0) {
      product.quantityInCart = product.quantityInCart - 1;
      product.productTotal =
        parseFloat(product.productTotal) -
        parseFloat(product.dataValues.productPrice);
      this.setCartSubTotal(
        parseFloat(this.cartSubTotal) -
          parseFloat(product.dataValues.productPrice)
      );
      this.setCartTax(this.cartSubTotal * 0.13);
      this.setCartTotal(this.cartSubTotal * 1.13);
      this.setCart(tempCart);
    } else {
      this.removeItem(id);
    }
  };

  removeItem = (id) => {
    let tempCart = [...this.cart];
    tempCart = tempCart.filter((item) => {
      // eslint-disable-next-line
      if (item.dataValues.id == id) {
        this.setCartSubTotal(
          parseFloat(this.cartSubTotal) - parseFloat(item.productTotal)
        );
        this.setCartTax(this.cartSubTotal * 0.13);
        this.setCartTotal(this.cartSubTotal * 1.13);
        return false;
      }
      return true;
    });
    this.setCart(tempCart);
  };

  clearCart = () => {
    this.cart = [];
  };

  async uploadOrder(order) {
    try {
      // eslint-disable-next-line
      const response = await OrderService.uploadOrder(order, this.cart);
      console.log("Order status: ", order.status);
      console.log("Successfull order: ", order);
    } catch (e) {
      console.log("uploadOrder server error: ", e.response?.data?.message);
    }
  }

  // customer
}
