import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const products = [
  {
    name: "T-Shirt",
    moq: "25 pcs",
    lead: "10–18 days",
    details: [
      "Premium / Regular fit",
      "Fabric: Cotton | TC | Poly",
      "Print: Screen / DTF / DTG",
      "Branding: Embroidery on request",
      "Sizes: S–5XL",
    ],
  },
  {
    name: "Polo",
    moq: "25 pcs",
    lead: "12–20 days",
    details: [
      "Piqué / flat knit collar",
      "Fabric: Cotton | TC | Poly | Denim",
      "Embroidery / patch logo",
      "Two / three button placket",
      "Sizes: S–5XL",
    ],
  },
  {
    name: "Hoodie",
    moq: "25 pcs",
    lead: "12–22 days",
    details: [
      "Fleece / heavy cotton",
      "Screen / DTF / DTG print",
      "Kangaroo pocket / zipper",
      "Custom labels & trims",
      "Sizes: S–5XL",
    ],
  },
  {
    name: "Jacket",
    moq: "25 pcs",
    lead: "15–28 days",
    details: [
      "Windbreaker / Bomber",
      "Fabric: Nylon | TC | Denim",
      "Screen / DTF print",
      "Padded / non-padded",
      "Sizes: S–5XL",
    ],
  },
  {
    name: "Pant",
    moq: "25 pcs",
    lead: "14–24 days",
    details: [
      "Twill / Denim / Chino",
      "Fabric: Cotton | TC | Poly",
      "Logo: Patch / Print",
      "Slim / regular fit",
      "Sizes: 28–42",
    ],
  },
  {
    name: "Tracksuit",
    moq: "25 pcs",
    lead: "12–20 days",
    details: [
      "Poly knit / cotton blend",
      "Print / embroidery branding",
      "Zipper pockets",
      "Top + bottom set",
      "Sizes: S–5XL",
    ],
  },
  {
    name: "Uniform",
    moq: "25 pcs",
    lead: "10–20 days",
    details: [
      "Corporate / School / Workwear",
      "Cotton | TC | Poly | Denim",
      "Logo embroidery / patch",
      "Batch numbering & labels",
      "Size-graded production",
    ],
  },
  {
    name: "Cap / Beanie",
    moq: "50 pcs",
    lead: "10–16 days",
    details: [
      "Baseball / 5-panel / trucker",
      "Embroidery / patch / woven label",
      "Custom colors & trims",
      "Adjustable closures",
      "One size (bulk custom)",
    ],
  },
  {
    name: "Apron",
    moq: "25 pcs",
    lead: "10–18 days",
    details: [
      "Kitchen / Barista / Workshop",
      "Canvas / Denim / TC",
      "Logo: Embroidery / Print",
      "Custom pockets & trims",
      "Adjustable straps",
    ],
  },
 ];

 const GarmentsComponents = () => {

  return (
    <>
    <section className="relative bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617] py-24 px-6 md:px-16">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 blur-3xl opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Order-Based <span className="text-blue-500">Garments Services <p className="text-white">Production</p></span>
          </h2>
          <p className="mt-5 text-gray-400 max-w-3xl mx-auto">
            Small-batch manufacturing with MOQ 25 pcs. Custom labels, tags,
            packaging & logistics arranged. Send specs or pick a product to
            request a quote.
          </p>
        </div>

        {/* Products */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-28">
          {products.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/70 border border-gray-700 rounded-2xl p-8 hover:border-blue-500 transition"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.name}
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                MOQ: {item.moq} • Lead: {item.lead}
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                {item.details.map((d, idx) => (
                  <li key={idx}>✔ {d}</li>
                ))}
              </ul>

              <div className="flex gap-4 mt-6">
               
             <Link className="text-blue-400 hover:underline" to={"/QuickQuote"}>Request quote →</Link>
             <Link className="text-blue-400 hover:underline" to={"/Contact"}>Contact → </Link>

              </div>
            </motion.div>
          ))}
        </div>      
      </div>
    </section>    
    </>
  );
 };

 export default GarmentsComponents;
