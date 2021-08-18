import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";
import Fotter from "./components/particles/Fotter";
import Navbar from "./components/particles/Navbar";
import MainPage from "./components/Pages/MainPage";

const App = () => {
  return (
    <div class="d-flex flex-column h-100">
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <MainPage></MainPage>
      </main>
      <footer class="footer mt-auto py-5">
        <Fotter></Fotter>
      </footer>
    </div>
  );
};
export default App;
