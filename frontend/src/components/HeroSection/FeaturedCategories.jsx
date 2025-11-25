import React from "react";
import MaterialIcon from "../MaterialIcon.jsx";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Antimicrobial Actives",
    icon: "coronavirus",
    description:
      "High-purity antibacterial and antifungal molecules for disinfectants, hygiene and healthcare products.",
    points: [">99% assay", "Stability tested", "Global registrations"],
  },
  {
    title: "Polymer & Coating Intermediates",
    icon: "ink_pen",
    description:
      "Advanced building blocks for adhesives, sealants and protective coatings with tight specs.",
    points: ["Adhesion boost", "Weather resistant", "Low VOC"],
  },
  {
    title: "API & Pharma Inputs",
    icon: "vaccines",
    description:
      "Regulatory-compliant APIs and intermediates tailored for formulation scientists.",
    points: ["DMF ready", "cGMP support", "Batch traceability"],
  },
  {
    title: "Cosmetic Ingredients",
    icon: "spa",
    description:
      "Dermatology-safe actives and intermediates for personal care innovators.",
    points: ["Clinically trusted", "High stability", "Supply assurance"],
  },
];

const slugify = (str) => str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const FeaturedCategories = () => {
  return (
    <section className="w-full bg-base-100 py-16">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-3">
          <p className="uppercase tracking-[0.4em] text-xs text-primary/70">
            focus areas
          </p>
          <h2 className="text-3xl font-bold text-base-content">
            Where our chemistry shines
          </h2>
          <p className="text-base-content/70 max-w-2xl mx-auto">
            A curated mix of applications that keep our labs buzzing. Explore
            the categories to find the right fit for your next formulation.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((item) => (
            <article
              key={item.title}
              className="flex h-full flex-col rounded-3xl border border-base-200 bg-base-100 p-7 shadow-sm hover:-translate-y-1 transition"
            >
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-500 text-white font-bold flex items-center justify-center text-lg">
                <MaterialIcon name={item.icon} className="text-2xl" />
              </div>

              <h3 className="mt-4 text-xl font-semibold text-base-content">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-base-content/70 leading-relaxed">
                {item.description}
              </p>

              <ul className="mt-4 space-y-2 text-sm text-base-content/80">
                {item.points.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <span className="h-5 w-5 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center text-xs">
                      ✓
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

             <Link
                to={`/products/${slugify(item.title)}`}
                className="mt-auto pt-5 text-sm font-semibold text-primary hover:text-primary-focus"
              >
                Discover solutions →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
