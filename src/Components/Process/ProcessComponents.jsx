 const processSteps = [
  {
    id: 1,
    title: "Discovery & fit",
    subtitle: "15–30 min intro call",
    points: [
      "We get clear on your goals, target audience and what success looks like.",
      "You share what you’re building and why it matters.",
      "We talk about your current site/app, what’s working and what isn’t.",
      "I ask focused questions about timeline, budget and constraints.",
    ],
  },
  {
    id: 2,
    title: "Scope, plan & proposal",
    subtitle: "Written summary",
    points: [
      "You receive a clear summary of your goals in my own words.",
      "Proposed pages, features and integrations listed in detail.",
      "Estimated timeline, investment and next steps included.",
    ],
  },
  {
    id: 3,
    title: "Design & build",
    subtitle: "Weekly or bi-weekly check-ins",
    points: [
      "Built with React / Next.js, Node.js and modern best practices.",
      "You review work in small, testable pieces.",
      "Feedback is collected in clear rounds to avoid confusion.",
    ],
  },
  {
    id: 4,
    title: "Launch, handover & support",
    subtitle: "Smooth go-live",
    points: [
      "Deployment to Vercel or your preferred hosting.",
      "Basic documentation and Loom walkthroughs.",
      "Optional ongoing support or monthly improvements.",
    ],
  },
 ];

 const ProcessComponents = () => {
  return (
    <section className="bg-[#020617] text-gray-300 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h4 className="text-cyan-400 font-semibold mb-2">
            Process · How we work together
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            A simple, transparent process
          </h2>
          <p className="text-gray-400">
            When you work with me, you always know what's happening next.
            No vague promises – just a clear path from first call to launch
            and beyond.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-10 md:grid-cols-2">
          {processSteps.map((step) => (
            <div
              key={step.id}
              className="border border-gray-800 rounded-xl p-6 hover:border-cyan-400/40 transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400 font-bold">
                  {step.id}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {step.subtitle}
                  </p>
                </div>
              </div>

              <ul className="space-y-2 text-sm leading-relaxed">
                {step.points.map((point, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="text-cyan-400">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* What you can expect */}
        <div className="mt-20 grid gap-10 md:grid-cols-3">
          {[
            {
              title: "Clear communication",
              desc: "Straightforward, honest updates. No buzzwords, no ghosting, no surprises.",
            },
            {
              title: "Modern stack",
              desc: "React, Next.js, Node.js, Tailwind, SEO & analytics ready from day one.",
            },
            {
              title: "Business focus",
              desc: "Not just code – focused on conversions, leads and long-term value.",
            },
          ].map((item, i) => (
            <div key={i}>
              <h4 className="text-white font-semibold mb-2">{item.title}</h4>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to talk about your project?
          </h3>
          <p className="text-gray-400 mb-6">
            Share a few details and I’ll reply with next steps and a suggested
            time for a quick call.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a href="/contact" className="px-6 py-3 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition">
              Start a project brief →
            </a>
            <a href="mailto:jahidulislamwebbd@gmail.com" className="px-6 py-3 rounded-lg border border-gray-700 text-white hover:border-cyan-400 transition">
              Email me directly →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
 };

 export default ProcessComponents;
