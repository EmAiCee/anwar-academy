import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { FaGraduationCap, FaBookOpen, FaAward } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative bg-brand-cream overflow-hidden">
      {/* Decorative brand blobs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div className="animate-[fade-up_0.7s_ease-out]">
          <span className="inline-flex items-center gap-2 bg-brand-red/10 text-brand-red px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <FaAward size={14} /> Nurturing Leaders Since Inception
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl text-brand-charcoal leading-[1.1] mb-6">
            Empowering Future Leaders Through{" "}
            <span className="text-brand-red">Excellence</span>
          </h1>

          <p className="text-lg text-gray-600 mb-10 max-w-xl leading-relaxed">
            At Anwar Leadership Academy, we blend academic rigor with moral
            development to shape confident, capable leaders of tomorrow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/about"
              className="bg-brand-red text-white px-8 py-4 rounded-lg font-semibold hover:bg-brand-red-dark transition flex items-center justify-center gap-2 shadow-lg shadow-brand-red/20"
            >
              Discover Our School <FiArrowRight size={20} />
            </Link>
            <Link
              href="/contact"
              className="bg-white border-2 border-brand-charcoal/10 text-brand-charcoal px-8 py-4 rounded-lg font-semibold hover:border-brand-red hover:text-brand-red transition"
            >
              Contact Us
            </Link>
          </div>

          {/* Quick stats */}
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            <div>
              <p className="text-3xl font-bold text-brand-blue font-heading">15+</p>
              <p className="text-sm text-gray-500">Years of Excellence</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-brand-blue font-heading">3</p>
              <p className="text-sm text-gray-500">Academic Divisions</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-brand-blue font-heading">500+</p>
              <p className="text-sm text-gray-500">Students Thriving</p>
            </div>
          </div>
        </div>

        {/* Right: Branded visual card */}
        <div className="relative hidden lg:flex items-center justify-center">
          <div className="relative w-full max-w-md">
            {/* Main card */}
            <div className="bg-brand-blue rounded-2xl p-10 text-white shadow-2xl">
              <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-6 backdrop-blur">
                <FaGraduationCap size={32} className="text-brand-red" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-3 text-white">
                Knowledge is Power
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-6">
                A premium learning environment where curiosity meets discipline,
                and every child is guided toward their full potential.
              </p>
              <div className="flex items-center gap-3 text-sm">
                <FaBookOpen className="text-brand-red" />
                <span>Nursery · Primary · Secondary</span>
              </div>
            </div>

            {/* Floating accent card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-5 shadow-xl border border-gray-100 max-w-[200px]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs font-semibold text-gray-500">
                  ADMISSIONS
                </span>
              </div>
              <p className="text-sm font-bold text-brand-charcoal">
                Now Open for 2025
              </p>
            </div>

            {/* Decorative red square */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-red rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}