import React from "react";
import ReactDOM from "react-dom/client";
// import Footer from "@cm/footer";
import Header from "@cm/header";
import Info from '@cm/info';
import Coop from '@cm/co-op';
import Neler from '@cm/Neler';
import Product from "@cm/product"
import About from "@cm/about";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <main>
        <Info />
        <Coop />
        <Neler />
        <Product />
        <About />
    </main>
    {/* <Footer /> */}
  </React.StrictMode>
);
