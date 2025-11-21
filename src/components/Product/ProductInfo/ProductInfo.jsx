import React from "react";
import { useParams } from "react-router-dom";
import products from "../ProductCatalogue/product.js";

const ProductInfo = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <h1 className="text-center mt-20">Product Not Found</h1>;

  return (
    <div data-theme="dark" className="min-h-screen py-14 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* TOP SECTION — IMAGE + TITLE */}
        <div className="backdrop-blur-xl bg-white/40 p-10 rounded-2xl shadow-xl border border-white/30">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Text */}
            <div className="flex-1 space-y-4">
              <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight">
                {product.title}
              </h1>

              <p className="text-gray-700 text-lg">{product.shortDescription}</p>
            </div>

            {/* Right Image */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="bg-white p-5 rounded-2xl shadow-lg border border-gray-200">
                <img
                  src={product.image}
                  alt={product.title}
                  className="rounded-lg w-52 lg:w-64 object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ----- ABOUT PRODUCT ----- */}
        <GlassSection title="What is this product?">
          <p className="text-gray-800 leading-relaxed text-lg">
            {product.about}
          </p>
        </GlassSection>

        {/* ----- PRODUCT INFORMATION ----- */}
        <GlassSection title="🔬 Product Information">
          <InfoList items={product.productInfo} />
        </GlassSection>

        {/* ----- SPECIFICATIONS ----- */}
        <GlassSection title="📑 Specification">
          <InfoList items={product.specifications} />
        </GlassSection>

        {/* ----- PHYSICAL PROPERTIES ----- */}
        <GlassSection title="💧 Physical Properties">
          <InfoList items={product.physicalProps} />
        </GlassSection>
      </div>
    </div>
  );
};

/* ======================================================= */
/* =============== REUSABLE COMPONENTS ==================== */
/* ======================================================= */

const GlassSection = ({ title, children }) => (
  <div className="backdrop-blur-xl bg-white/40 p-8 rounded-xl shadow-lg border border-white/30 space-y-3">
    <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
    {children}
  </div>
);

const InfoList = ({ items }) => (
  <ul className="space-y-2 text-gray-800 text-lg">
    {items.map(([label, value], index) => (
      <li key={index}>
        <strong>{label}: </strong> {value}
      </li>
    ))}
  </ul>
);

export default ProductInfo;
