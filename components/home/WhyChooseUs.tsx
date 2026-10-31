import { FiCheckCircle } from "react-icons/fi";

const features = [
  "Qualified and Experienced Educators",
  "Conducive, Modern Learning Environment",
  "Strong Focus on Moral & Character Development",
  "State-of-the-Art Science & Computer Labs",
  "Extensive Sports & Extracurricular Activities",
  "Student-Centered, Interactive Learning Approach",
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-brand-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-6">
            Why Choose Anwar Leadership Academy?
          </h2>
          <p className="text-blue-100 mb-12 text-lg">
            We are not just a school; we are a community dedicated to nurturing
            the intellectual, moral, and social growth of every child.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
            {features.map((feature, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4"
              >
                <FiCheckCircle className="text-brand-red mt-0.5 shrink-0" size={20} />
                <span className="text-sm font-medium text-white">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}