import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { title, casNo, category, description, image, id } = product;

  return (
    <Link
      to={`/product/${id}`}
      className="group block rounded-3xl border border-base-200 bg-base-100 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <article className="flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <p className="text-[11px] uppercase tracking-[0.35em] text-base-content/60">
            {category || "Uncategorized"}
          </p>
          <span className="rounded-full bg-base-200 px-3 py-1 text-xs font-semibold text-base-content">
            {casNo || "N/A"}
          </span>
        </div>

        <h3 className="mt-4 text-2xl font-semibold text-base-content">
          {title}
        </h3>

        <p className="mt-2 text-sm text-base-content/70 leading-relaxed">
          {description || "Detailed description coming soon."}
        </p>

        {image ? (
          <figure className="mt-6 rounded-2xl bg-base-100 p-4 border border-base-200">
            <img
              src={image}
              alt={title}
              className="h-48 w-full object-contain"
            />
          </figure>
        ) : (
          <div className="mt-6 h-48 rounded-2xl border border-dashed border-base-300 bg-base-200 flex items-center justify-center text-base-content/50 text-sm">
            Visual coming soon
          </div>
        )}

        <div className="mt-auto pt-6">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
            View specification
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.6"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>
      </article>
    </Link>
  );
};

export default ProductCard;
