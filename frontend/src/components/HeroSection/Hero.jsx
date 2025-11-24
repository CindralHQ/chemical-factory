import React from "react";
import { Link } from "react-router-dom";

const heroStats = [
  { label: "Active molecules", value: "120+" },
  { label: "Global shipments", value: "50+" },
  { label: "Average lead time", value: "10 days" },
];

const Hero = () => {
  return (
    <section className="bg-base-200">
      <div className="max-w-6xl mx-auto px-6 py-16 grid gap-12 lg:grid-cols-2">
        <div className="space-y-8">
          <p className="text-sm uppercase tracking-[0.4em] text-primary">
            specialty chemical manufacturer
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-base-content">
            Clean chemistry for modern healthcare, home care and coatings brands
          </h1>
          <p className="text-lg text-base-content/70">
            We convert customer briefs into compliant, scalable formulations.
            Tap into our antimicrobial actives, cosmetic intermediates and
            polymer solutions built with global certifications.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/products" className="btn btn-primary btn-wide">
              Explore products
            </Link>
            <Link
              to="/about"
              className="btn btn-outline border-base-300 text-base-content"
            >
              Our story
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-base-300 bg-base-100 p-4 text-center shadow-sm"
              >
                <p className="text-2xl font-semibold text-base-content">
                  {stat.value}
                </p>
                <p className="text-xs uppercase tracking-wide text-base-content/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl" />
          <div className="relative rounded-3xl border border-base-300 bg-base-100 p-6 shadow-xl space-y-6">
            <div className="rounded-2xl border border-base-200 bg-base-100 p-6">
              <p className="text-sm font-semibold text-primary">Pulse labs</p>
              <p className="text-2xl font-bold mt-2 text-base-content">
                ISO-backed production
              </p>
              <p className="mt-2 text-base-content/60 text-sm">
                Every molecule is validated with GC, HPLC and microbial testing
                before dispatch.
              </p>
            </div>
            <div className="rounded-2xl border border-base-200 bg-base-100 p-6">
              <p className="text-sm font-semibold text-primary">Documents ready</p>
              <p className="mt-2 text-base-content/80">
                MSDS, TDS and regulatory support delivered digitally with every
                order.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-base-content/70">
                <li className="flex items-center gap-2">
                  <span className="badge badge-success badge-xs"></span>
                  Antimicrobial actives
                </li>
                <li className="flex items-center gap-2">
                  <span className="badge badge-success badge-xs"></span>
                  Cosmetic intermediates
                </li>
                <li className="flex items-center gap-2">
                  <span className="badge badge-success badge-xs"></span>
                  Coating additives
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
