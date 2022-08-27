import React from "react";
import classes from "../templates/blogPreviewTemplate/blogPreview.module.scss";
import styles from "./blog.module.scss";
import BlogCard from "../templates/blogPreviewTemplate/BlogCard";
import Menu from "../components/menu/Menu";
import Sub from "../trifles/Sub";
import MyInput from "../components/MyInput";
import Pagination from "../templates/Pagination";

const Blog = () => {
  const menu1 = {
    title: "Archives",
    points: [
      "March 2020",
      "February 2020",
      "January 2020",
      "November 2019",
      "December 2019",
    ],
  };

  const menu2 = {
    title: "Category",
    points: [
      "Food",
      "Chef specialities",
      "Vegetable",
      "Meat",
      "Recommendations",
    ],
  };

  return (
    <div className={styles.blog}>
      <div className={styles.largeBlock}>
        <BlogCard cssClass={classes.large} />
        <BlogCard cssClass={classes.large} />
      </div>
      <div className={styles.menuTemplate}>
        <div className={styles.sidebar}>
          <Menu menu={menu1} />
          <Menu menu={menu2} />
          <h3>Join our list</h3>
          <Sub>
            Signup to be the first ho hear about exclusive deals, special
            offers, recepies from our masters and others.
          </Sub>
          <MyInput placeholder="Your email address" />
        </div>
        <div className={styles.content}>
          <BlogCard cssClass={classes.medium} />
          <BlogCard cssClass={classes.medium} />
          <BlogCard cssClass={classes.medium} />
          <BlogCard cssClass={classes.medium} />
          <BlogCard cssClass={classes.medium} />
          <BlogCard cssClass={classes.medium} />
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default Blog;
