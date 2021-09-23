import AboutPage from "../components/pages/AboutPage";
import LandingPage from "../components/pages/LandingPage";
import ThankPage from "../components/pages/ThanksPage";
import HomePage from "../components/pages/HomePage";
import LoginPage from "../components/pages/UserPages/LoginPage";
import RegisterPage from "../components/pages/UserPages/RegisterPage";
import BakingPage from "../components/pages/ProductPages/BakingPage";
import CookiesPage from "../components/pages/ProductPages/CookiesPages";
import CakesPages from "../components/pages/ProductPages/CakesPages";
import PiesPages from "../components/pages/ProductPages/PiesPages";
import CartPage from "../components/pages/CartPage";
import DashBoard from "../components/pages/DashBoard";
import DetailsProductPage from "../components/pages/ProductPages/DetailsProductPage";

export const privateRouters = [
  { path: "/user/dashboard", component: DashBoard, exact: false },
];

export const publicRouters = [
  { path: "/", component: LandingPage, exact: true },
  { path: "/about", component: AboutPage, exact: true },
  { path: "/thankspage", component: ThankPage, exact: true },
  { path: "/home", component: HomePage, exact: true },
  { path: "/cart", component: CartPage, exact: true },
  { path: "/user/login", component: LoginPage, exact: true },
  { path: "/user/register", component: RegisterPage, exact: true },
  { path: "/product/baking", component: BakingPage, exact: true },
  { path: "/product/cakes", component: CakesPages, exact: true },
  { path: "/product/pies", component: PiesPages, exact: true },
  { path: "/product/cookies", component: CookiesPage, exact: true },
  { path: "/product/details/:id", component: DetailsProductPage, exact: true },
  { path: "/user/logout", component: " <Redirect to='/' />", exact: true },
];
