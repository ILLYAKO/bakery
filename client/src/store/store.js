import { makeAutoObservable } from "mobx";
import axios from "axios";
import AuthService from "../service/AuthService";
import ProductService from "../service/ProductService";
import { API_URL } from "../http";
// import { dummyProductsDb } from "./dummyDb";

export default class Store {
  user = {};
  isAuth = false;
  isLoading = false;
  products = [];
  detailProduct = {};
  cart = [];
  modalOpen = false;
  modalProduct = {};
  cartSubTotal = 0;
  cartTax = 0;
  cartTotal = 0;

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
    console.log("setCart", cart);
    this.cart = cart;
  }
  setProductsInCart(productsIn) {
    this.productsInCart = productsIn;
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
      await this.setProducts(response.data);
    } catch (e) {
      console.log("getAllProducts server error: ", e.response?.data?.message);
    }
  }
  // ---------------
  async getItem(id) {
    try {
      const response = await ProductService.findOne(id);
      await this.setDetailProduct(response.data);
    } catch (e) {
      console.log("getOneProduct server error: ", e.response?.data?.message);
    }
  }

  async handleDetail(id) {
    await this.getItem(id);
  }

  async addToCart(id) {
    console.log(`hello from add To Cart. Id is ${id}`);
    // // let tempProducts = [...this.state.products];
    await this.getItem(id);
    let tempCart = [...this.cart];
    console.log("-->Store-addToCart-tempCart-0:", tempCart);
    console.log("-->Store-addToCart-this.detailProduct:", this.detailProduct);
    await tempCart.push(this.detailProduct);
    console.log("-->Store-addToCart-tempCart-1:", tempCart);
    await this.setCart(tempCart);
    console.log("-->Store-addToCart-cart.L:", this.cart.length);

    //
    //
    // const index = tempProducts.indexOf(this.getItem(id));
    // const product = tempProducts[index];
    // product.inCart = true;
    // product.count = 1;
    // const price = product.price;
    // product.total = price;
    // this.setState(
    //   () => {
    //     return {
    //       products: tempProducts,
    //       cart: [...this.state.cart, product],
    //     };
    //   },
    //   () => {
    //     this.addTotals();
    //   }
    // );
  }

  async openModal(id) {
    console.log(`hello from openModal. Id is ${id}`);
    this.setModalOpen(true);
  }

  async closeModal() {
    console.log(`hello from closeModal.`);
    this.setModalOpen(false);
  }

  increment(id) {
    console.log("Increment", id);
  }
  decrement(id) {
    console.log("Decrement", id);
  }
  removeItem(id) {
    console.log("Remove Item", id);
  }

  clearCart() {
    console.log("Clear Cart");
  }
}
