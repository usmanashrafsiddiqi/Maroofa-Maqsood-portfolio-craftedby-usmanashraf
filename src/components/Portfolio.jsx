import React from "react";

const Portfolio = () => {
  const experiences = [
    {
      company: "NOOR MOHAMD BHAT (FMCG – Dry Fruits)",
      role: "Social Media Manager & Content Creator",
      duration: "1 year | Ongoing",
      highlights:
        "Created engaging Instagram content, managed product campaigns, optimized visuals, and built a strong local audience presence.",
    },
    {
      company: "NAZNEEN GROUP OF HOUSEBOATS (Travel & Hospitality)",
      role: "Social Media Manager",
      duration: "6 months | Ongoing",
      highlights:
        "Developed a travel-focused Instagram presence, designed promotional content, handled guest engagement strategies, and improved page aesthetics.",
    },
    {
      company: "FORTUNE EDUCATION (Education Sector)",
      role: "Social Media In-Charge",
      duration: "3 months",
      highlights:
        "Managed educational campaigns, created admission-related content, maintained the institute's professional online identity.",
    },
    {
      company: "PARVAAZ (Art & Craft Brand)",
      role: "Social Media Manager",
      duration: "Just Started",
      highlights:
        "Currently building a creative content strategy to showcase unique handmade products and expand the brand’s social media presence.",
    },
    {
      company: "STYLESWAP (Fashion & Apparel)",
      role: "Founder & Content Creator",
      duration: "1 year",
      highlights:
        "Handled everything from brand identity to daily posts, promotional reels, product launches, and customer engagement.",
    },
  ];

  return (
    <section className="w-full py-20 bg-gradient-to-r from-blue-100 to-pink-50">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-800 mb-12">
          My Experience
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300"
            >
              {/* Ribbon Label */}
              <div className="absolute top-0 left-0 bg-pink-500 text-white px-3 py-1 rounded-tr-xl rounded-bl-xl text-sm font-semibold shadow-md">
                {exp.company}
              </div>

              <div className="mt-6">
                <p className="text-lg font-semibold text-gray-700 mb-1">{exp.role}</p>
                <p className="text-sm text-gray-500 mb-3 italic">{exp.duration}</p>
                <p className="text-gray-600 text-base leading-relaxed">{exp.highlights}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
