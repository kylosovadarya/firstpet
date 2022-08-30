import React from "react";
import classes from "./mainPage.module.scss";
import Banners from "../components/banners/Banners";
import Cards from "../components/cards/Cards";
import Menu from "../components/menu/Menu";
import { menu1, menu2, menu3 } from "../components/menu/MenuContent";
import Headline from "../components/Headline";
import Carousel from "../components/carousel/Carousel";
import BlogPreview from "../templates/blogPreviewTemplate/BlogPreview";
import AngleBtn from "../trifles/AngleBtn";
import Row from "../templates/Row";

const MainPage = () => {
  return (
    <div className={classes.mainPage}>
      <Row>
        <Menu title={menu1.title} points={menu1.points}>
          <AngleBtn className={classes.menuBtn}>More categories</AngleBtn>
        </Menu>
        <Banners />
      </Row>
      <Row>
        <Menu title={menu2.title} points={menu2.points}>
          <AngleBtn className={classes.menuBtn}>More products</AngleBtn>
        </Menu>
        <Cards count={3} />
      </Row>
      <Row>
        <Menu title={menu3.title} points={menu3.points}>
          <AngleBtn className={classes.menuBtn}>More products</AngleBtn>
        </Menu>
        <Cards count={3} />
      </Row>
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
