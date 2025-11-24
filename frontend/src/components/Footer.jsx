import React from "react";
import { Link } from "react-router-dom";
import ThemeSelector from "./ThemeSelector.jsx";
import siteConfig from "../config/siteConfig.js";

const Footer = () => {
  return (
    <footer className="bg-base-200 border-t border-base-300 text-base-content">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-4">
        <div className="space-y-3">
          <div className="flex items-center gap-3 font-bold text-lg">
            <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold">
              {siteConfig.company.initials}
            </div>
            {siteConfig.company.name}
          </div>
          <p className="text-sm text-base-content/70">
            {siteConfig.company.tagline}
          </p>
          <ThemeSelector />
          <div className="flex gap-3 text-sm">
            {Object.entries(siteConfig.social).map(([key, url]) => (
              <a
                key={key}
                href={url}
                className="h-10 w-10 rounded-full border border-base-300 flex items-center justify-center hover:border-primary/50"
                aria-label={`Visit our ${key} page`}
                target="_blank"
                rel="noreferrer"
              >
                {key.slice(0, 2).toUpperCase()}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="font-semibold uppercase tracking-[0.3em] text-xs text-primary/80">
            Navigate
          </p>
          <ul className="mt-3 space-y-2 text-sm text-base-content/70">
            <li>
              <Link to="/products">Product library</Link>
            </li>
            <li>
              <Link to="/about">About {siteConfig.company.name}</Link>
            </li>
            <li>
              <Link to="/contact">Request a callback</Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-semibold uppercase tracking-[0.3em] text-xs text-primary/80">
            Contact
          </p>
          <ul className="mt-3 space-y-2 text-sm text-base-content/70">
            <li>
              <a href={`mailto:${siteConfig.contact.email}`}>
                {siteConfig.contact.email}
              </a>
            </li>
            <li>
              <a href={`tel:${siteConfig.contact.phoneHref}`}>
                {siteConfig.contact.phone}
              </a>
            </li>
            <li>{siteConfig.contact.address}</li>
          </ul>
        </div>

        <div>
          <p className="font-semibold uppercase tracking-[0.3em] text-xs text-primary/80">
            Stay in the loop
          </p>
          <p className="mt-3 text-sm text-base-content/70">
            Monthly regulatory updates, new molecules and lab notes.
          </p>
          <div className="mt-4 flex gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="input input-bordered w-full border-base-300"
            />
            <button className="btn btn-primary">Join</button>
          </div>
        </div>
      </div>
      <div className="border-t border-base-300 text-center text-sm text-base-content/60 py-4">
        © {new Date().getFullYear()} {siteConfig.company.name}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
