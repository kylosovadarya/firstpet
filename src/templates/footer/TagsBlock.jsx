import React from 'react';
import classes from './tagsBlock.module.scss';

const ProductTags = ({tags}) => {
  return (
    <div className={classes.productTags}>
        <h3>Product tags</h3>
        <div>
        {tags.map(tag => 
          <span key={tag}>{tag}</span>
          )}
        </div>
    </div>
  )
}

export default ProductTags