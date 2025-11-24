import React, { useEffect, useState } from "react";
import siteConfig from "../config/siteConfig.js";

const AboutUs = () => {
  const [content, setContent] = useState(localStorage.getItem("aboutContent") || "");
  const [etag, setEtag] = useState(localStorage.getItem("aboutEtag") || "");
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFullData = async () => {
    const res = await fetch("http://localhost:5000/api/about");
    const data = await res.json();

    setContent(data.content);
    setEtag(data.etag);

    localStorage.setItem("aboutContent", data.content);
    localStorage.setItem("aboutEtag", data.etag);

    processSections(data.content);
    setLoading(false);
  };

  const processSections = (html) => {
    const headings = [
      "ABOUT US",
      "Our Vision",
      "Our Mission",
      "Who We Are",
      "What We Manufacture",
      "Why Choose Us",
      "Sustainability & Safety",
      "Our Commitment",
    ];

    const blocks = html.split(/<p>|<\/p>/g).filter(Boolean);

    const result = [];
    let current = { title: "", body: "" };

    blocks.forEach((line) => {
  const clean = line.replace(/[\u000B]/g, "").trim();
  if (!clean) return;

  if (headings.some((h) => clean.startsWith(h))) {
    if (current.title) result.push(current);
    current = { title: clean, body: "" };
  } else {
    current.body += `<p>${clean}</p>`;
  }
});

    if (current.title) result.push(current);
    setSections(result);
  };

  useEffect(() => {
    const checkUpdate = async () => {
      if (!content) return fetchFullData();

      const res = await fetch("http://localhost:5000/api/about", { method: "HEAD" });
      const latestEtag = res.headers.get("ETag");

      if (latestEtag !== etag) {
        return fetchFullData();
      }

      processSections(content);
      setLoading(false);
    };

    checkUpdate();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="bg-base-100 text-base-content">

      {/* HERO BANNER */}
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
          alt="About Us Banner"
        />

        <h1 className="relative text-5xl md:text-6xl font-extrabold text-white tracking-wide drop-shadow-xl">
          About {siteConfig.company.name}
        </h1>
      </section>

      {/* MAIN SECTIONS */}
      <div className="max-w-5xl mx-auto px-6 py-20 space-y-24">
        {sections.map((sec, idx) => (
          <section key={idx} className="scroll-mt-20 space-y-6">
            <h2 className="text-4xl font-extrabold text-primary tracking-wide">
              {sec.title}
            </h2>

            <div
              className="prose prose-lg max-w-none leading-relaxed dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: sec.body }}
            ></div>

            {/* Divider between sections */}
            {idx !== sections.length - 1 && (
              <div className="border-b border-base-300 pt-10"></div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
