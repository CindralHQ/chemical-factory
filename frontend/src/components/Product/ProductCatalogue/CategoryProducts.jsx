import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard.jsx";
import useProducts from "../../../hooks/useProducts.js";

const CategoryProducts = () => {
  const { category } = useParams();
  const { products, isLoading, error } = useProducts();
  const [query, setQuery] = useState("");

  const normalizedCategory = category
    ? category.replace(/-/g, " ").toLowerCase()
    : null;

  const filteredProducts = useMemo(() => {
    if (!products) return [];

    let list = [...products];

    // Filter by category from URL
    if (normalizedCategory) {
      list = list.filter(
        (p) =>
          p.category?.toLowerCase().replace(/[^a-z0-9]+/g, " ") ===
          normalizedCategory
      );
    }

    // Search filter
    if (query.trim()) {
      const term = query.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(term) ||
          p.casNo.toLowerCase().includes(term) ||
          p.category.toLowerCase().includes(term)
      );
    }

    return list;
  }, [products, query, normalizedCategory]);

  if (isLoading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center py-10 text-red-500">Error loading products.</p>;

  return (
    <section className="py-16 bg-base-200 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        {normalizedCategory && (
          <h2 className="text-3xl font-bold mb-8 capitalize">
            {normalizedCategory}
          </h2>
        )}

        <input
          type="text"
          placeholder="Search products..."
          className="input input-bordered w-full max-w-md bg-base-100"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="col-span-full text-center text-base-content/60">
              No products found.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default CategoryProducts;
