import React from 'react';
import BlogCard from './BlogCard';
import classes from './blogPreview.module.scss';

const BlogCards = () => {
  return (
    <div className={classes.blogCards}>
      <BlogCard cssClass={classes.large}/>
      <div className={classes.mediumBlock}>
        <BlogCard cssClass={classes.medium}/>
      </div>
      <div className={classes.smallBlock}>
        <BlogCard cssClass={classes.small}/>
        <BlogCard cssClass={classes.small}/>
        <BlogCard cssClass={classes.small}/>
      </div>
  </div>
  )
}

export default BlogCards