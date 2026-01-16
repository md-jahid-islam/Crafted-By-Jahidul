import { useState } from "react";
import { Link } from "react-router-dom";

 const faqData = [
  {
    category: "General",
    question: "Do you work with clients worldwide?",
    answer:
      "Yes. I work fully remote and collaborate with clients across different time zones using async updates and focused calls.",
  },
  {
    category: "General",
    question: "Which languages do you communicate in?",
    answer:
      "I communicate in English and Bangla. Documentation and project communication are usually in clear, simple English.",
  },
  {
    category: "General",
    question: "What kind of projects do you usually work on?",
    answer:
      "Marketing websites, SaaS dashboards, e-commerce flows and high-converting landing pages, plus improving existing React/Next.js apps.",
  },
  {
    category: "General",
    question: "Who owns the code and designs after the project is finished?",
    answer:
      "After full payment, you own all final code, designs and assets agreed in the scope.",
  },
  {
    category: "Services",
    question: "What do you offer as a core service?",
    answer:
      "Full-stack development combined with marketing: modern front-ends, APIs, databases, analytics and conversion-focused pages.",
  },
  {
    category: "Tech stack",
    question: "Which tech stack do you specialise in?",
    answer:
      "React, Next.js, Tailwind CSS, Framer Motion, Node.js, Express, MongoDB and serverless hosting like Vercel.",
  },
  {
    category: "Process",
    question: "How do we get started on a new project?",
    answer:
      "We start with a short call or message, then I send a clear written scope with timeline and investment.",
  },
  {
    category: "Pricing",
    question: "How do you structure your pricing?",
    answer:
      "Fixed-price for defined scopes, or monthly retainers / hourly blocks for ongoing work.",
  },
 ];
 const FQAComponents = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const categories = ["All", "General", "Services", "Tech stack", "Process", "Pricing"];

  const filteredFAQs = faqData.filter((item) => {
    const matchesCategory = filter === "All" || item.category === filter;
    const matchesSearch =
      item.question.toLowerCase().includes(search.toLowerCase()) ||
      item.answer.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="bg-[#020617] text-gray-300 py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="mb-10">
          <h4 className="text-cyan-400 font-semibold mb-2">
            FAQ · Working with Jahidul Islam
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Questions I hear a lot
          </h2>
          <p className="text-gray-400">
            Common questions about working together, timelines, tech stack and pricing.
          </p>
        </div>

        {/* Search */}
        <input type="text" placeholder="Search by question or keyword..." className="w-full mb-6 px-4 py-3 rounded-lg bg-[#020617] border border-gray-700 focus:outline-none focus:border-cyan-400" value={search}onChange={(e) => setSearch(e.target.value)}/>
        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1 rounded-full text-sm border transition ${
                filter === cat
                  ? "bg-cyan-500 text-black border-cyan-500"
                  : "border-gray-700 hover:border-cyan-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFAQs.map((item, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-lg">
              <button onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-5 text-left">
                <span className="font-medium text-white">
                  {item.question}
                </span>
                <span className="text-cyan-400">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {activeIndex === index && (
                <div className="px-5 pb-5 text-sm text-gray-400 leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">
            Still have a question?
          </h3>
          <p className="text-gray-400 mb-6">
            Send me a quick message and I’ll get back to you.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/contact" className="px-6 py-3 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition">
              Go to contact page →
            </Link>
            <a href="mailto:jahidulislamwebbd@gmail.com"className="px-6 py-3 rounded-lg border border-gray-700 hover:border-cyan-400 transition">
              Email me directly →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
 };

 export default FQAComponents;
