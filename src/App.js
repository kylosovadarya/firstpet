import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./styles/styles.scss";
import Header from "./templates/header/Header";
import Navbar from "./templates/header/Navbar";
import Footer from "./templates/footer/Footer";
import MainPage from "./pages/MainPage";
import Category from "./pages/Category";
import Description from "./pages/Description";
import Checkout from "./pages/Checkout";
import Blog from "./pages/Blog";
import Detail from "./pages/Detail";
import data from "./typoSQL";

function App() {

  return (
    <BrowserRouter>
      <Header data={data} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/category" element={<Category />} />
        <Route path="/description" element={<Description />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
