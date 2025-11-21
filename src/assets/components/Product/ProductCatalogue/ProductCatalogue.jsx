import React from "react";
import ProductCard from "./ProductCard";

const ProductCatalogue = () => {
  return (
    <div data-theme="dark" className="min-h-screen px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 text-base-content text-center">
        Product List
      </h1>

      <ProductCard />
    </div>
  );
};

export default ProductCatalogue;
