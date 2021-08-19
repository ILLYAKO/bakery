import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect /* Link */,
} from "react-router-dom";

import "./App.css";
import Footer from "./components/particles/Footer";
import Navbar from "./components/particles/Navbar";
import MainPage from "./components/pages/MainPage";
import LoginPage from    "./components/pages/UserPages/LoginPage";
import RegisterPage from './components/pages/UserPages/RegisterPage/'

const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column h-100">
        <header>
          <Navbar></Navbar>
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <MainPage></MainPage>
            </Route>
            <Route path="/user/login">
              <LoginPage></LoginPage>
            </Route>
            <Route path="/user/register">
              <RegisterPage></RegisterPage>
            </Route>
            <Route path="/user/logout">
              <Redirect to="/" />
            </Route>
            <Route render={() => <h1>404: page not found</h1>}></Route>
          </Switch>
        </main>

        <footer className="footer mt-auto py-5">
          <Footer></Footer>
        </footer>
      </div>
    </Router>
  );
};
export default App;
