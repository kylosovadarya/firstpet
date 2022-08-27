import React from "react";
import AddToCartBlock from "../../components/AddToCartBlock";
import Table from "../../components/Table";
import GreenOval from "../../trifles/GreenOval";
import Stars from "../../trifles/stars/Stars";
import classes from "./descriptionBody.module.scss";
import { tab1, tab2 } from "./tableData";
import AngleBtn from "../../trifles/AngleBtn";
import Slider from "../../components/slider/Slider";

const DescriptionBody = () => {
  return (
    <div className={classes.body}>
      <div className={classes.pictures}>
        <div className={classes.picture}>
          <GreenOval>-36%</GreenOval>
          <GreenOval>Free shipping</GreenOval>
        </div>
        <div className={classes.picture}></div>
        <div className={classes.picture}></div>
      </div>
      <div className={classes.description}>
        <div>
          <h1>Carrots from Tomissy Farm</h1>
          <Stars n={4} />
          <span className={classes.reviews}>(1 customer review)</span>
        </div>
        <p style={{ fontSize: 17 }}>
          Carrots from Tomissy Farm are one of the best on the market. Tomisso
          and his family are giving a full love to his Bio products. Tomisso’s
          carrots are growing on the fields naturally.
        </p>
        <div className={classes.tables}>
          <Table table={tab1} />
          <Table table={tab2} />
        </div>
        <AddToCartBlock />
        <div className={classes.btns}>
          <AngleBtn>Add to my wish list</AngleBtn>
          <AngleBtn>Compare</AngleBtn>
        </div>
        <Slider />
      </div>
    </div>
  );
};

export default DescriptionBody;
