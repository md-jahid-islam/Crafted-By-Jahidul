// import { useState } from "react";
// import { motion } from "framer-motion";

// const QuickQuoteComponents = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     product: "",
//     fabric: "",
//     quantity: "",
//     sizes: "",
//     notes: "",
//   });

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Quote request submitted successfully!");
//     setForm({
//       name: "",
//       email: "",
//       product: "",
//       fabric: "",
//       quantity: "",
//       sizes: "",
//       notes: "",
//     });
//   };

//   return (
//     <section className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617] px-4 py-20 flex items-center">
//       <div className="max-w-5xl mx-auto w-full grid lg:grid-cols-2 gap-14">

//         {/* Left Info */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-white"
//         >
//           <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
//             Get a <span className="text-blue-500">Quick Quote</span>
//           </h2>

//           <p className="mt-6 text-gray-400 text-lg leading-relaxed">
//             Share your product requirements and our production team will
//             respond with pricing, lead-time & customization details.
//           </p>

//           <ul className="mt-8 space-y-4 text-gray-300 text-sm">
//             <li>✔ MOQ starts from 25 pcs</li>
//             <li>✔ Custom fabric, print & embroidery</li>
//             <li>✔ Labels, tags & packaging support</li>
//             <li>✔ Fast production & delivery</li>
//           </ul>
//         </motion.div>

//         {/* Form */}
//         <motion.form
//           initial={{ opacity: 0, x: 40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           onSubmit={handleSubmit}
//           className="bg-gray-900/80 backdrop-blur border border-gray-700 rounded-2xl p-8 md:p-10 space-y-5"
//         >
//           <div className="grid md:grid-cols-2 gap-4">
//             <input
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               placeholder="Full Name"
//               required
//               className="w-full bg-gray-800 text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
//             />

//             <input
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               placeholder="Email Address"
//               required
//               className="w-full bg-gray-800 text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <input
//             name="product"
//             value={form.product}
//             onChange={handleChange}
//             placeholder="Product (T-shirt, Hoodie, Polo...)"
//             required
//             className="w-full bg-gray-800 text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <div className="grid md:grid-cols-2 gap-4">
//             <input
//               name="fabric"
//               value={form.fabric}
//               onChange={handleChange}
//               placeholder="Fabric (e.g. 180 GSM Cotton)"
//               className="w-full bg-gray-800 text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
//             />

//             <input
//               name="quantity"
//               value={form.quantity}
//               onChange={handleChange}
//               placeholder="Quantity (MOQ 25)"
//               required
//               className="w-full bg-gray-800 text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <input
//             name="sizes"
//             value={form.sizes}
//             onChange={handleChange}
//             placeholder="Sizes breakdown (S-10, M-20...)"
//             className="w-full bg-gray-800 text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <textarea
//             name="notes"
//             value={form.notes}
//             onChange={handleChange}
//             rows="4"
//             placeholder="Notes (print position, embroidery, deadline...)"
//             className="w-full bg-gray-800 text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 resize-none"
//           />

//           <button
//             type="submit"
//             className="w-full py-3 rounded-full text-white font-semibold
//             bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500
//             hover:scale-[1.02] transition-transform"
//           >
//             Send Quote Request
//           </button>

//           <p className="text-xs text-gray-400 text-center">
//             We usually respond within 24 hours.
//           </p>
//         </motion.form>
//       </div>
//     </section>
//   );
// };

// export default QuickQuoteComponents;



import { useState } from "react";
import { motion } from "framer-motion";

const QuickQuoteComponents = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    product: "",
    fabric: "",
    quantity: "",
    sizes: "",
    notes: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Quote request submitted successfully!");
    setForm({
      name: "",
      email: "",
      product: "",
      fabric: "",
      quantity: "",
      sizes: "",
      notes: "",
    });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617] px-4 py-20 flex items-center">
      <div className="max-w-5xl mx-auto w-full grid lg:grid-cols-2 gap-14">

        {/* Left Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Get a <span className="text-blue-500">Quick Quote</span>
          </h2>

          <p className="mt-6 text-gray-400 text-lg leading-relaxed">
            Share your product requirements and our production team will
            respond with pricing, lead-time & customization details.
          </p>

          <ul className="mt-8 space-y-4 text-gray-300 text-sm">
            <li>✔ MOQ starts from 25 pcs</li>
            <li>✔ Custom fabric, print & embroidery</li>
            <li>✔ Labels, tags & packaging support</li>
            <li>✔ Fast production & delivery</li>
          </ul>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="bg-gray-900/80 backdrop-blur border border-gray-700 rounded-2xl p-8 md:p-10 space-y-5"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full bg-gray-800 text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full bg-gray-800 text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <input
            name="product"
            value={form.product}
            onChange={handleChange}
            placeholder="Product (T-shirt, Hoodie, Polo...)"
            required
            className="w-full bg-gray-800 text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="fabric"
              value={form.fabric}
              onChange={handleChange}
              placeholder="Fabric (e.g. 180 GSM Cotton)"
              className="w-full bg-gray-800 text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
              placeholder="Quantity (MOQ 25)"
              required
              className="w-full bg-gray-800 text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <input
            name="sizes"
            value={form.sizes}
            onChange={handleChange}
            placeholder="Sizes breakdown (S-10, M-20...)"
            className="w-full bg-gray-800 text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            rows="4"
            placeholder="Notes (print position, embroidery, deadline...)"
            className="w-full bg-gray-800 text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-full text-white font-semibold
            bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500
            hover:scale-[1.02] transition-transform"
          >
            Send Quote Request
          </button>

          <p className="text-xs text-gray-400 text-center">
            We usually respond within 24 hours.
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default QuickQuoteComponents;
