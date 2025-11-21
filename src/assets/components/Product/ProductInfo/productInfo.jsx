// import React from "react";

// const ProductInfo = () => {
//   return (
//     <div className="max-w-5xl mx-auto p-6 space-y-10">
//       {/* Title + Image side by side */}
//       <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 p-6 w-full">
//         {/* Title */}
//         <div className="flex-1 space-y-4">
//           <h1 className="text-3xl font-bold leading-snug">
//             Para Chloro Meta Xylene (Chloroxylenol) (PCMX)
//           </h1>

//           <p className="text-gray-600 text-base">
//             High-purity antimicrobial agent used in disinfectants, antiseptics,
//             wound cleaners, and hygiene products.
//           </p>
//         </div>

//         {/* Image */}
//         <div className="flex-1 flex justify-center lg:justify-end w-full">
//           <div className="bg-white p-4 rounded-xl shadow-lg">
//             <img
//               src="/images/products/category1/product2.webp"
//               alt="PCMX"
//               className="rounded-lg w-40 object-contain"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Main Description */}
//       <div className="p-6 rounded-xl shadow">
//         <p className="text-white leading-relaxed">
//           <strong>Para Chloro Meta Xylenol (PCMX)</strong> is a high-purity
//           antimicrobial agent widely used in disinfectants, antiseptic
//           formulations, wound cleaners, and household hygiene products. It
//           exhibits <strong>broad-spectrum antibacterial activity</strong> and is
//           valued for its stability and effectiveness in various personal care
//           and pharmaceutical applications.
//         </p>
//       </div>

//       {/* Product Information Section */}
//       <Section title="🔬 Product Information">
//         <ul className="list-disc pl-5 space-y-1">
//           <li>
//             <strong>CAS Number:</strong> 88-04-0
//           </li>
//           <li>
//             <strong>Molecular Formula:</strong> C8H9ClO
//           </li>
//           <li>
//             <strong>Molecular Weight:</strong> 156.61
//           </li>
//           <li>
//             <strong>Synonyms:</strong> 4-Chloro-3,5-Dimethylphenol,
//             4-chloro-3,5-xylenol
//           </li>
//         </ul>
//       </Section>

//       {/* Specification */}
//       <Section title="📑 Specification">
//         <ul className="list-disc pl-5 space-y-1">
//           <li>
//             <strong>Appearance:</strong> White or creamy white crystals
//           </li>
//           <li>
//             <strong>Purity by GC (%):</strong> Not less than 99.0%
//           </li>
//           <li>
//             <strong>Related impurities:</strong> Any individual impurity &lt; 1%
//           </li>
//           <li>
//             <strong>Residue on ignition:</strong> Not more than 0.1%
//           </li>
//           <li>
//             <strong>Iron content:</strong> 100 ppm max
//           </li>
//           <li>
//             <strong>Water Content:</strong> Not more than 0.5%
//           </li>
//         </ul>
//       </Section>

//       {/* Physical Properties */}
//       <Section title="💧 Physical Properties">
//         <ul className="list-disc pl-5 space-y-1">
//           <li>
//             <strong>Odor:</strong> Characteristic
//           </li>
//           <li>
//             <strong>Solubility:</strong> Insoluble in water; soluble in
//             methanol, acetone, chloroform, alkali solutions
//           </li>
//           <li>
//             <strong>Melting Point:</strong> 114°C to 116°C
//           </li>
//         </ul>
//       </Section>

//       {/* Shelf Life */}
//       <Section title="🗓️ Shelf Life">
//         <ul className="list-disc pl-5 space-y-1">
//           <li>5 years from date of manufacturing</li>
//         </ul>
//       </Section>

//       {/* Packaging */}
//       <Section title="📦 Packaging">
//         <ul className="list-disc pl-5 space-y-1">
//           <li>Available in 25/50 kg UN-approved HM/HDPE drums</li>
//           <li>Also supplied in 25/50 kg fiber drums</li>
//           <li>Customized packaging available on request</li>
//         </ul>
//       </Section>

//       {/* Application */}
//       <Section title="🏥 Application">
//         <ul className="list-disc pl-5 space-y-1">
//           <li>Antiseptic and disinfectant</li>
//           <li>Used in household disinfectants and wound cleaners</li>
//         </ul>
//       </Section>

//       {/* Safety & Storage */}
//       <Section title="⚠️ Safety & Storage">
//         <ul className="list-disc pl-5 space-y-1">
//           <li>Store in a tightly closed container.</li>
//           <li>
//             Keep in a cool, dry, well-ventilated area away from incompatible
//             substances.
//           </li>
//         </ul>
//       </Section>

//       {/* Samples & Grade */}
//       <Section title="🧪 Samples & Grade">
//         <h4 className="font-semibold">Samples:</h4>
//         <ul className="list-disc pl-5 mb-4">
//           <li>Sample can be provided on request</li>
//         </ul>

//         <h4 className="font-semibold">Pharma Grade:</h4>
//         <ul className="list-disc pl-5">
//           <li>Pharma grade available: IP, BP, USP</li>
//           <li>TDS provided on request</li>
//         </ul>
//       </Section>
//     </div>
//   );
// };

// // Reusable Section Component
// const Section = ({ title, children }) => (
//   <div className="p-6 rounded-xl shadow space-y-3">
//     <h2 className="text-xl font-bold">{title}</h2>
//     {children}
//   </div>
// );

// export default ProductInfo;

import React from "react";

const ProductInfo = () => {
  return (
    <div  className=" min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 py-14 px-6">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* TOP: Image + Title Section */}
        <div className="backdrop-blur-xl bg-white/40 p-10 rounded-2xl shadow-xl border border-white/30">
          <div className="flex flex-col lg:flex-row items-center gap-12">

            {/* Left Text */}
            <div className="flex-1 space-y-4">
              <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight">
                Para Chloro Meta Xylene (Chloroxylenol) <span className="text-indigo-600">(PCMX)</span>
              </h1>

              <p className="text-gray-700 text-lg">
                High-purity antimicrobial agent widely used in disinfectants, wound cleaners, hygiene products, and personal care formulations.
              </p>
            </div>

            {/* Right - Image */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="bg-white p-5 rounded-2xl shadow-lg border border-gray-200">
                <img
                  src="/images/products/category1/product2.webp"
                  alt="PCMX"
                  className="rounded-lg w-52 lg:w-64 object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ABOUT PRODUCT */}
        <GlassSection title="What is PCMX?">
          <p className="text-gray-800 leading-relaxed text-lg">
            <strong>Para Chloro Meta Xylenol (PCMX)</strong> is a highly effective antimicrobial compound 
            with <strong>broad-spectrum antibacterial activity</strong>. It is stable, reliable, and used in 
            a wide range of personal care, pharmaceutical, and household hygiene applications.
          </p>
        </GlassSection>

        {/* PRODUCT INFORMATION */}
        <GlassSection title="🔬 Product Information">
          <InfoList
            items={[
              ["CAS Number", "88-04-0"],
              ["Molecular Formula", "C8H9ClO"],
              ["Molecular Weight", "156.61"],
              ["Synonyms", "4-Chloro-3,5-Dimethylphenol, 4-chloro-3,5-xylenol"]
            ]}
          />
        </GlassSection>

        {/* SPECIFICATION */}
        <GlassSection title="📑 Specification">
          <InfoList
            items={[
              ["Appearance", "White or creamy white crystals"],
              ["Purity by GC (%)", "Not less than 99.0%"],
              ["Related impurities", "Any individual impurity < 1%"],
              ["Residue on ignition", "Not more than 0.1%"],
              ["Iron content", "100 ppm max"],
              ["Water Content", "Not more than 0.5%"]
            ]}
          />
        </GlassSection>

        {/* PHYSICAL PROPERTIES */}
        <GlassSection title="💧 Physical Properties">
          <InfoList
            items={[
              ["Odor", "Characteristic"],
              ["Solubility", "Insoluble in water; soluble in methanol, acetone, chloroform, alkali solutions"],
              ["Melting Point", "114°C to 116°C"]
            ]}
          />
        </GlassSection>

        {/* SHELF LIFE */}
        <GlassSection title="🗓️ Shelf Life">
          <ul className="list-disc pl-5 text-gray-800 text-lg">
            <li>5 years from date of manufacturing</li>
          </ul>
        </GlassSection>

        {/* PACKAGING */}
        <GlassSection title="📦 Packaging">
          <InfoList
            items={[
              ["Packaging Options", "25/50 kg UN-approved HM/HDPE drums"],
              ["Alternative Packaging", "25/50 kg fiber drums"],
              ["Custom Packaging", "Available on request"]
            ]}
          />
        </GlassSection>

        {/* APPLICATION */}
        <GlassSection title="🏥 Applications">
          <ul className="list-disc pl-5 text-gray-800 text-lg space-y-1">
            <li>Antiseptic and disinfectant formulations</li>
            <li>Household disinfectants</li>
            <li>Wound cleaning preparations</li>
          </ul>
        </GlassSection>

        {/* SAFETY */}
        <GlassSection title="⚠️ Safety & Storage">
          <ul className="list-disc pl-5 text-gray-800 text-lg space-y-1">
            <li>Store in a tightly closed container</li>
            <li>Keep in a cool, dry, ventilated area</li>
            <li>Avoid incompatible substances</li>
          </ul>
        </GlassSection>

        {/* SAMPLES */}
        <GlassSection title="🧪 Samples & Grade">
          <h4 className="font-semibold text-gray-900 text-lg">Samples Available</h4>
          <p className="text-gray-700 mb-4">Samples can be provided on request.</p>

          <h4 className="font-semibold text-gray-900 text-lg">Pharma Grade</h4>
          <ul className="list-disc pl-5 text-gray-800 text-lg">
            <li>IP, BP, USP grades available</li>
            <li>TDS provided on request</li>
          </ul>
        </GlassSection>

      </div>
    </div>
  );
};

/* ---------- Reusable Glass Card Section ---------- */
const GlassSection = ({ title, children }) => (
  <div className="backdrop-blur-xl bg-white/40 p-8 rounded-xl shadow-lg border border-white/30 space-y-3">
    <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
    {children}
  </div>
);

/* ---------- Clean List Renderer ---------- */
const InfoList = ({ items }) => (
  <ul className="space-y-2 text-gray-800 text-lg">
    {items.map(([label, value], index) => (
      <li key={index}>
        <strong>{label}: </strong>{value}
      </li>
    ))}
  </ul>
);

export default ProductInfo;
