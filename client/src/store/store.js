import { makeAutoObservable } from "mobx";
import AuthService from "../service/AuthService";
import ProductService from "../service/ProductService";
import { toJS } from "mobx";

import axios from "axios";
import { API_URL } from "../http";

export default class Store {
  user = {};
  isAuth = false;
  isLoading = false;
  products=[];

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

  setProducts(produstsAll) {
    this.products = produstsAll;
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
      // eslint-disable-next-line
      const response = await ProductService.getAllProducts();
      await this.setProducts(response.data);
    } catch (e) {
      console.log("getAllProducts server error: ", e.response?.data?.message);
    }
  }
}
