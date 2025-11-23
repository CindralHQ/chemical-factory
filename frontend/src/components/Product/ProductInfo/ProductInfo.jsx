import React from "react";
import { useParams } from "react-router-dom";

const ProductInfo = () => {
  const { id } = useParams();
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <h1 className="text-center mt-20">Product Not Found</h1>;

  return (
    <div data-theme="dark" className="min-h-screen py-14 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* TOP SECTION — TITLE + CATEGORY */}
        <div className="backdrop-blur-xl bg-white/40 p-10 rounded-2xl shadow-xl border border-white/30">
          <div className="flex flex-col lg:flex-row items-center gap-12">

            {/* Left Text */}
            <div className="flex-1 space-y-4">
              <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight">
                {product.title}
              </h1>

              <p className="text-gray-700 text-lg">{product.description}</p>

              <p className="text-gray-700 text-lg font-semibold">
                Category: <span className="font-normal">{product.category}</span>
              </p>
            </div>

            {/* Right — CAS NO */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="bg-white p-5 rounded-2xl shadow-lg border border-gray-200">
                <div className="text-center space-y-2">
                  <h3 className="font-bold text-gray-800 text-xl">CAS No.</h3>
                  <p className="text-gray-700 text-lg">{product.casNo}</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ----- ABOUT PRODUCT ----- */}
        <GlassSection title="📘 Product Description">
          <p className="text-gray-800 leading-relaxed text-lg">
            {product.description}
          </p>
        </GlassSection>

        {/* ----- PRODUCT INFORMATION ----- */}
        <GlassSection title="📊 Product Information">
          <InfoList
            items={[
              ["CAS Number", product.casNo],
              ["Category", product.category],
              ["Related Products", product.relatedProducts],
            ]}
          />
        </GlassSection>

        {/* ----- DOCUMENTS ----- */}
        <GlassSection title="📄 Technical Documents">
          <InfoList
            items={[
              ["TDS (Technical Data Sheet)", product.tdsLink],
              ["MSDS (Safety Data Sheet)", product.msdsLink],
            ]}
          />
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
        <strong>{label}: </strong>

        {String(value).startsWith("http") ? (
          <a
            href={value}
            target="_blank"
            rel="noreferrer"
            className="text-blue-700 underline"
          >
            View Document
          </a>
        ) : (
          value
        )}
      </li>
    ))}
  </ul>
);

export default ProductInfo;
