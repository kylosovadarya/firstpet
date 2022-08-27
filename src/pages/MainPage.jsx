import React from "react";
import classes from "./mainPage.module.scss";
import ProductsWithMenu from "../templates/ProductsWithMenu";
import Banners from "../components/banners/Banners";
import Cards from "../components/cards/Cards";
import Menu from "../components/menu/Menu";
import { menu1, menu2, menu3 } from "../components/menu/MenuContent";
import Headline from "../components/Headline";
import Carousel from "../components/carousel/Carousel";
import BlogPreview from "../templates/blogPreviewTemplate/BlogPreview";
import AngleBtn from "../trifles/AngleBtn";

const MainPage = () => {
  return (
    <div className={classes.mainPage}>
      <div className={classes.container}>
        <Menu title={menu1.title} points={menu1.points}>
          <AngleBtn className={classes.btn}>More categories</AngleBtn>
        </Menu>
        <Banners />
      </div>
      <div className={classes.container}>
        <Menu title={menu2.title} points={menu2.points}>
          <AngleBtn className={classes.btn}>More products</AngleBtn>
        </Menu>
        <Cards count={3} />
      </div>
      <div className={classes.container}>
        <Menu title={menu3.title} points={menu3.points}>
          <AngleBtn className={classes.btn}>More products</AngleBtn>
        </Menu>
        <Cards count={3} />
      </div>
      <Headline headline={"Our customers says"} button={"Button"} />
      <Carousel />
      <Headline headline={"Section Headline"} button={"Button"} />
      <Cards count={4} />
      <Headline headline={"Read our blog posts"} button={"Go to blog"} />
      <BlogPreview />
    </div>
  );
};

export default MainPage;
