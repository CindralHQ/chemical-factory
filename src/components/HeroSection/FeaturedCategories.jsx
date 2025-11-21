import React from "react";
const categories = [
  {
    title: "Anti Bacterial / Anti Fungal",
    description:
      "We offer high-quality antibacterial and antifungal chemical solutions designed to support industrial and pharmaceutical applications.",
    points: [
      "High Purity Chemicals",
      "Industrial-Grade Compounds",
      "Wide Application Range",
    ],
  },
  {
    title: "Polymer / Adhesive / Coating Intermediate",
    description:
      "Our polymer and coating intermediates meet global standards, delivering strength, durability and adhesion performance.",
    points: ["Advanced Polymers", "Adhesive Enhancers", "Coating Materials"],
  },
  {
    title: "API / Algo",
    description:
      "We provide reliable API solutions with consistent performance for pharmaceutical formulation requirements.",
    points: ["Certified APIs", "Stable Formulations", "Trusted Quality"],
  },
  {
    title: "Cosmetic Intermediate",
    description:
      "Premium cosmetic intermediates used for skincare, haircare and personal beauty products with safe compositions.",
    points: ["Dermatology Safe", "High Stability", "Premium Quality"],
  },
];
const FeaturedCategories = () => {
  return (
    <div className="w-full py-16 bg-[#0f1216]">
      {" "}
      <div className="max-w-6xl mx-auto px-6">
        {" "}
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          {" "}
          Featured Categories{" "}
        </h2>{" "}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {" "}
          {categories.map((item, index) => (
            <div
              key={index}
              className=" h-full flex flex-col bg-[#1a1d23] shadow-lg rounded-3xl p-8 border border-gray-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:cursor-pointer "
            >
              {" "}
              {/* Icon Placeholder */}{" "}
              <div className="w-12 h-12 rounded-xl bg-purple-200 flex items-center justify-center">
                {" "}
                <div className="w-6 h-6 bg-purple-500 rounded-lg"></div>{" "}
              </div>{" "}
              <h3 className="text-xl font-bold text-white mt-4">
                {item.title}
              </h3>{" "}
              <p className="text-gray-300 text-sm leading-relaxed mt-2">
                {" "}
                {item.description}{" "}
              </p>{" "}
              {/* GROW AREA */}{" "}
              <div className="flex-grow mt-4">
                {" "}
                <ul className="space-y-2">
                  {" "}
                  {item.points.map((p, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-gray-200 font-medium text-sm"
                    >
                      {" "}
                      <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">
                        {" "}
                        ✓{" "}
                      </span>{" "}
                      {p}{" "}
                    </li>
                  ))}{" "}
                </ul>{" "}
              </div>{" "}
              {/* BUTTON */}{" "}
              <button className=" mt-6 w-full py-3 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700 transition ">
                {" "}
                Explore More{" "}
              </button>{" "}
            </div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default FeaturedCategories;