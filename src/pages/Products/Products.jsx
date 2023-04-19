import React from 'react'
import  './Products.scss'
import { useParams } from 'react-router-dom';
const Products = () => {

    const id = useParams();
    console.log(id);
  return (
    <div>Products</div>
  )
}

export default Products