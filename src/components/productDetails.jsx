import React, { Component } from "react";
import {useNavigate} from "react-router-dom"; 

const ProductDetails = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Product Details - </h1>
      <button onClick={() => navigate('/products', {replace:true})}>Save</button>
    </div>
  );
};


export default ProductDetails;
