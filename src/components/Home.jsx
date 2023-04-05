import { useContext } from "react";
import { productsContext } from "../context/productsContext";
import "../styles/home.css";
import Products from "./Products";
import Footer from "./Footer";
import Banner from "./Banner";

function Home() {
  const { state, dispatch } = useContext(productsContext);
  return (
    <div className="home">
      <Banner />
      <Products state={state} dispatch={dispatch} />
      <Footer />
    </div>
  );
}

export default Home;
