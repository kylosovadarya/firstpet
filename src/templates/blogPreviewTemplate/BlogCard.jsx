import React from 'react';
import classes from './blogPreview.module.scss';

const BlogCard = (props) => {
  return (
    <div className={props.cssClass}>
      <div className={classes.picture}></div>
      <div>
        <span className={classes.category}>Dinner tips</span>
        <h2>Our chef tips for a great and tasty dinner ready in 20 minutes</h2>
        <div className={classes.authorBlock}>
          <span className={classes.portrait}></span>
          <span className={classes.author}>Author</span>
          <span className={classes.date}>12.13.14</span>
        </div>
      </div>
    </div>
  )
}

export default BlogCard