import React, { useMemo, useState } from "react";
import ProductCard from "./ProductCard.jsx";
import useProducts from "../../../hooks/useProducts.js";

const ProductCatalogue = () => {
  const { products, isLoading, isRefreshing, error, reload } = useProducts();
  const [query, setQuery] = useState("");

  const filteredProducts = useMemo(() => {
    if (!query.trim()) return products;
    const term = query.toLowerCase();

    return products.filter(
      (product) =>
        product.title?.toLowerCase().includes(term) ||
        product.casNo?.toLowerCase().includes(term) ||
        product.category?.toLowerCase().includes(term)
    );
  }, [products, query]);

  return (
    <section className="px-6">
      <div className="max-w-6xl mx-auto space-y-10">
        <header className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="uppercase tracking-[0.35em] text-xs text-primary/70">
              catalogue
            </p>
            <h2 className="text-4xl font-bold text-base-content">
              Product intelligence hub
            </h2>
            <p className="mt-2 text-base-content/70">
              Search by molecule, CAS number or category.{" "}
              {isRefreshing && (
                <span className="ml-2 inline-flex items-center text-xs text-primary">
                  Updating listings...
                </span>
              )}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <input
              className="input input-bordered w-full border-base-200 bg-base-100 text-base-content placeholder:text-base-content/60"
              placeholder="Search CAS No. or molecule"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <button
              className="btn btn-outline border-base-300 text-base-content"
              onClick={() => reload()}
            >
              Refresh
            </button>
          </div>
        </header>

        {error && (
          <div className="alert alert-error bg-error/10 border-error/40 text-error-content">
            <div>
              <h3 className="font-semibold">Couldn&apos;t load products</h3>
              <p className="text-sm text-base-content/70">{error}</p>
            </div>
            <button className="btn btn-sm ml-auto" onClick={() => reload()}>
              Try again
            </button>
          </div>
        )}

        {isLoading && !products.length ? (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="h-80 rounded-3xl border border-base-200 bg-base-200 animate-pulse"
              />
            ))}
          </div>
        ) : filteredProducts.length ? (
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-base-300 bg-base-200 p-12 text-center text-base-content/70">
            <p className="text-lg font-semibold text-base-content">
              No matches for "{query.trim()}".
            </p>
            <p className="mt-2 text-sm">
              Try searching for the molecule name, CAS number or explore the
              entire list again.
            </p>
            <button
              className="btn btn-sm mt-4"
              onClick={() => setQuery("")}
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductCatalogue;
