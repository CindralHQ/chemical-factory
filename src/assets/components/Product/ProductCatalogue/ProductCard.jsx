import React from "react";
import products from "./product";

const ProductCard = () => {
  return (
    <div className="w-full px-6 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="
    bg-base-300 
    shadow-xl 
    rounded-2xl 
    p-4 
    transition-all duration-300 ease-out
    hover:shadow-2xl 
    hover:-translate-y-2 
    hover:scale-105
    cursor-pointer
    flex flex-col h-full
  "
          >
            {/* White image background */}
            <figure className="p-4 bg-[#E7EFFF] rounded-xl">
              <img
                src={product.image}
                alt={product.title}
                className="rounded-xl h-56 w-full object-contain"
              />
            </figure>

            {/* Content Block */}
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-xl font-semibold">{product.title}</h2>

              <p className="mt-2 text-sm text-gray-300">
                <span className="font-medium">CNS No:</span> {product.cnsNo}
              </p>

              {/* Button always at the bottom */}
              <div className="mt-auto pt-4">
                <button className="btn btn-primary btn-sm w-full">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
