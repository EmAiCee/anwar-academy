import { FaChild, FaBookOpen, FaGraduationCap } from "react-icons/fa";

const divisions = [
  {
    title: "Nursery Education",
    desc: "A safe, nurturing, and creative environment to build foundational learning and social skills.",
    icon: <FaChild size={36} className="text-brand-red" />,
  },
  {
    title: "Primary Education",
    desc: "Fostering literacy, numeracy, and character development through interactive and engaging learning.",
    icon: <FaBookOpen size={36} className="text-brand-blue" />,
  },
  {
    title: "Secondary Education",
    desc: "Rigorous academic preparation, leadership training, and career guidance for a successful future.",
    icon: <FaGraduationCap size={36} className="text-brand-red" />,
  },
];

export default function DivisionsPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-brand-charcoal mb-4">
            Our Academic Divisions
          </h2>
          <div className="w-24 h-1 bg-brand-red mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide a seamless educational journey from early childhood to
            young adulthood, tailored to the developmental needs of every student.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {divisions.map((div, index) => (
            <div
              key={index}
              className="bg-brand-cream p-8 rounded-xl border border-gray-100 hover:shadow-xl transition-shadow duration-300 text-center flex flex-col items-center"
            >
              <div className="bg-white p-4 rounded-full shadow-sm mb-6">
                {div.icon}
              </div>
              <h3 className="text-xl text-brand-blue mb-4">{div.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{div.desc}</p>
              <a
                href="/academics"
                className="text-brand-red font-semibold hover:underline"
              >
                Learn More &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}