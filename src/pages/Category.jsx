import React from 'react';
import CategoryBody from '../templates/categoryBody/CategoryBody';
import CategoryHeader from '../templates/categoryHeader/CategoryHeader';
import Pagination from '../templates/Pagination';

const Category = () => {
  return (
    <div>
      <CategoryHeader />
      <CategoryBody />
      <Pagination />
    </div>
  )
}

export default Category