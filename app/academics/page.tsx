import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import {
  FaChild,
  FaBookOpen,
  FaGraduationCap,
  FaPalette,
  FaPuzzlePiece,
  FaMusic,
  FaCalculator,
  FaFlask,
  FaLanguage,
  FaGlobeAfrica,
  FaLaptopCode,
  FaAtom,
  FaChartLine,
  FaUsers,
  FaLightbulb,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Academics | Anwar Leadership Academy",
  description:
    "Explore the Nursery, Primary, and Secondary academic programs at Anwar Leadership Academy — from foundational learning to rigorous secondary preparation.",
};

const divisions = [
  {
    id: "nursery",
    eyebrow: "Ages 2 – 5",
    title: "Nursery Education",
    tagline: "Where Curiosity Begins",
    description:
      "Our Nursery programme provides a warm, safe, and stimulating environment where young children take their first joyful steps into learning. Through structured play, storytelling, music, and hands-on activities, we build the foundational skills of language, numeracy, and social interaction — while nurturing each child's natural curiosity and confidence.",
    icon: <FaChild size={28} />,
    accent: "brand-red" as const,
    approach: [
      "Play-based and child-centered learning",
      "Phonics, early literacy, and numeracy",
      "Creative arts, music, and movement",
      "Social and emotional development",
      "Safe, nurturing classroom environment",
    ],
    subjects: [
      { icon: <FaBookOpen size={18} />, label: "Early Literacy" },
      { icon: <FaCalculator size={18} />, label: "Numbers & Counting" },
      { icon: <FaPalette size={18} />, label: "Creative Arts" },
      { icon: <FaMusic size={18} />, label: "Music & Movement" },
      { icon: <FaPuzzlePiece size={18} />, label: "Motor Skills" },
      { icon: <FaUsers size={18} />, label: "Social Skills" },
    ],
  },
  {
    id: "primary",
    eyebrow: "Ages 6 – 11",
    title: "Primary Education",
    tagline: "Building Strong Foundations",
    description:
      "Our Primary programme develops confident, capable learners through a balanced curriculum of core academics, creative exploration, and character formation. Students grow in literacy, numeracy, and critical thinking — while developing the discipline, curiosity, and values that will carry them through life.",
    icon: <FaBookOpen size={28} />,
    accent: "brand-blue" as const,
    approach: [
      "Strong focus on literacy and numeracy",
      "Inquiry-based science and discovery",
      "Regular formative assessment",
      "Character and moral development",
      "Sports, arts, and enrichment clubs",
    ],
    subjects: [
      { icon: <FaBookOpen size={18} />, label: "English Language" },
      { icon: <FaCalculator size={18} />, label: "Mathematics" },
      { icon: <FaFlask size={18} />, label: "Basic Science" },
      { icon: <FaGlobeAfrica size={18} />, label: "Social Studies" },
      { icon: <FaLanguage size={18} />, label: "Languages" },
      { icon: <FaPalette size={18} />, label: "Creative Arts" },
    ],
  },
  {
    id: "secondary",
    eyebrow: "Ages 12 – 18",
    title: "Secondary Education",
    tagline: "Preparing Tomorrow's Leaders",
    description:
      "Our Secondary programme offers rigorous academic preparation, leadership development, and career guidance for students in Junior and Senior Secondary. With a strong focus on sciences, technology, and critical thinking, we prepare students not only for national examinations but for university, career, and life beyond.",
    icon: <FaGraduationCap size={28} />,
    accent: "brand-red" as const,
    approach: [
      "Junior & Senior Secondary curriculum",
      "Science, technology, and practical learning",
      "Leadership and career preparation",
      "University entrance examination support",
      "Competitive academic competitions",
    ],
    subjects: [
      { icon: <FaFlask size={18} />, label: "Sciences" },
      { icon: <FaCalculator size={18} />, label: "Mathematics" },
      { icon: <FaLaptopCode size={18} />, label: "Computer Science" },
      { icon: <FaAtom size={18} />, label: "Physics & Chemistry" },
      { icon: <FaChartLine size={18} />, label: "Economics & Business" },
      { icon: <FaLanguage size={18} />, label: "Languages" },
    ],
  },
];

export default function AcademicsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-brand-blue text-white py-24 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-red/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-red font-semibold uppercase tracking-widest text-sm">
            Our Academics
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mt-4 mb-6">
            A Complete Educational Journey
            <br className="hidden md:block" />
            From Nursery to Secondary
          </h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Three carefully designed academic divisions — each tailored to the
            developmental needs of every stage of a child&apos;s growth.
          </p>
        </div>
      </section>

      {/* QUICK JUMP */}
      <section className="py-10 bg-white border-b border-gray-100 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {divisions.map((div) => (
              <a
                key={div.id}
                href={`#${div.id}`}
                className="px-5 py-2 rounded-full bg-brand-cream text-brand-charcoal text-sm font-medium hover:bg-brand-red hover:text-white transition"
              >
                {div.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* DIVISION SECTIONS */}
      {divisions.map((div, index) => {
        const isRed = div.accent === "brand-red";
        const bg = isRed ? "bg-white" : "bg-brand-cream";
        const accentBg = isRed ? "bg-brand-red" : "bg-brand-blue";
        const accentText = isRed ? "text-brand-red" : "text-brand-blue";
        const accentBgLight = isRed ? "bg-brand-red/10" : "bg-brand-blue/10";
        const reverse = index % 2 === 1;

        return (
          <section
            key={div.id}
            id={div.id}
            className={`py-24 ${bg} scroll-mt-32`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Text column */}
                <div>
                  <span
                    className={`inline-block text-xs font-semibold uppercase tracking-widest ${accentText} mb-3`}
                  >
                    {div.eyebrow}
                  </span>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-12 h-12 ${accentBgLight} rounded-xl flex items-center justify-center ${accentText}`}
                    >
                      {div.icon}
                    </div>
                    <h2 className="text-3xl md:text-4xl text-brand-charcoal">
                      {div.title}
                    </h2>
                  </div>
                  <p className={`text-lg font-medium ${accentText} mb-4`}>
                    {div.tagline}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    {div.description}
                  </p>

                  <div>
                    <h3 className="text-lg text-brand-charcoal mb-4">
                      Our Approach
                    </h3>
                    <ul className="space-y-2.5">
                      {div.approach.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span
                            className={`${accentBg} text-white rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5`}
                          >
                            <FiCheck size={12} />
                          </span>
                          <span className="text-gray-700 text-sm">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Subject cards column */}
                <div>
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                    <div className="flex items-center gap-2 mb-6">
                      <FaLightbulb className={accentText} size={20} />
                      <h3 className="text-lg text-brand-charcoal">
                        Key Subject Areas
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {div.subjects.map((subj, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 bg-brand-cream rounded-lg p-3.5 hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-100 transition"
                        >
                          <div
                            className={`w-9 h-9 ${accentBgLight} ${accentText} rounded-md flex items-center justify-center shrink-0`}
                          >
                            {subj.icon}
                          </div>
                          <span className="text-sm font-medium text-brand-charcoal">
                            {subj.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-20 bg-brand-blue relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-brand-red/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-4">
            Find the Right Path for Your Child
          </h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto text-lg">
            Whether your child is just beginning their journey or preparing for
            university, we have a division tailored for their stage of growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-red text-white px-8 py-4 rounded-lg font-semibold hover:bg-brand-red-dark transition"
            >
              Enquire About Admission <FiArrowRight />
            </Link>
            <Link
              href="/leadership"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-brand-blue transition"
            >
              Meet Our Educators
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}