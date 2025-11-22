const products = [
  {
    id: 1,
    image: "/images/products/category1/product1.webp",
    title: "Para Chloro Meta Xylene (Chloroxylenol) (PCMX)",
    casNo: "88-04-0",

    // Extra details for ProductInfo
    shortDescription:
      "High-purity antimicrobial agent widely used in disinfectants and personal care formulations.",

    about:
      "Para Chloro Meta Xylenol (PCMX) is a highly effective antimicrobial compound with broad-spectrum antibacterial activity.",

    productInfo: [
      ["CAS Number", "88-04-0"],
      ["Molecular Formula", "C8H9ClO"],
      ["Molecular Weight", "156.61"],
      ["Synonyms", "4-Chloro-3,5-Dimethylphenol, 4-chloro-3,5-xylenol"],
    ],

    specifications: [
      ["Appearance", "White or creamy white crystals"],
      ["Purity by GC (%)", "Not less than 99.0%"],
      ["Related impurities", "Any individual impurity < 1%"],
      ["Residue on ignition", "Not more than 0.1%"],
      ["Iron content", "100 ppm max"],
      ["Water Content", "Not more than 0.5%"],
    ],

    physicalProps: [
      ["Odor", "Characteristic"],
      [
        "Solubility",
        "Insoluble in water; soluble in methanol, acetone, chloroform, alkali",
      ],
      ["Melting Point", "114°C to 116°C"],
    ],
  },

  {
    id: 2,
    image: "/images/products/category1/product2.webp",
    title: "2,4-Dichloro Meta Xylene (DCMX)",
    casNo: "133-53-9",

    shortDescription:
      "Broad-spectrum antibacterial ingredient used in soaps, disinfectants and personal hygiene products.",

    about:
      "2,4-Dichloro Meta Xylene (DCMX) is a powerful antimicrobial agent commonly used in disinfectant formulations.",

    productInfo: [
      ["CAS Number", "133-53-9"],
      ["Molecular Formula", "C8H8Cl2"],
      ["Molecular Weight", "175.06"],
      ["Synonyms", "2,4-Dichloro-1,3-dimethylbenzene"],
    ],

    specifications: [
      ["Appearance", "White crystalline powder"],
      ["Purity", "> 98%"],
      ["Melting Point", "64–66°C"],
    ],

    physicalProps: [
      ["Odor", "Mild"],
      ["Solubility", "Insoluble in water; soluble in organic solvents"],
    ],
  },

  {
    id: 3,
    image: "/images/products/category1/product3.webp",
    title: "Para Chloro Meta Cresol (Chlorocresol) (PCMC)",
    casNo: "59-50-7",

    shortDescription:
      "Widely used preservative and antimicrobial agent in cosmetics and pharmaceuticals.",

    about:
      "Para Chloro Meta Cresol (PCMC) is a strong antimicrobial preservative used in pharmaceutical and cosmetic formulations.",

    productInfo: [
      ["CAS Number", "59-50-7"],
      ["Molecular Formula", "C7H7ClO"],
      ["Molecular Weight", "142.58"],
      ["Synonyms", "4-Chloro-3-methylphenol"],
    ],

    specifications: [
      ["Appearance", "White to off-white powder"],
      ["Purity", "> 99%"],
      ["Melting Point", "64–67°C"],
    ],

    physicalProps: [
      ["Solubility", "Soluble in ethanol, ether, oils"],
      ["Odor", "Phenolic"],
    ],
  },
];

export default products;
