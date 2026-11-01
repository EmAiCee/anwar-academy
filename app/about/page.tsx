import type { Metadata } from "next";
import Link from "next/link";
import {
  FiEye,
  FiTarget,
  FiBookOpen,
  FiHeart,
  FiShield,
  FiUsers,
  FiAward,
  FiTrendingUp,
  FiArrowRight,
} from "react-icons/fi";
import { FaGraduationCap, FaLightbulb, FaBalanceScale } from "react-icons/fa";

export const metadata: Metadata = {
  title: "About Us | Anwar Leadership Academy",
  description:
    "Learn about the history, vision, mission, and core values of Anwar Leadership Academy — a premium institution shaping future leaders.",
};

const coreValues = [
  {
    title: "Academic Excellence",
    desc: "We set high standards and inspire every student to reach their full intellectual potential.",
    icon: <FaGraduationCap size={28} className="text-brand-red" />,
  },
  {
    title: "Discipline",
    desc: "Structure and self-control form the foundation of character and lifelong success.",
    icon: <FiShield size={28} className="text-brand-red" />,
  },
  {
    title: "Integrity",
    desc: "We cultivate honesty, accountability, and strong moral principles in all we do.",
    icon: <FaBalanceScale size={28} className="text-brand-red" />,
  },
  {
    title: "Responsibility",
    desc: "Students learn to take ownership of their actions, learning, and community.",
    icon: <FiUsers size={28} className="text-brand-blue" />,
  },
  {
    title: "Creativity",
    desc: "We nurture imagination and original thinking through arts and inquiry-based learning.",
    icon: <FaLightbulb size={28} className="text-brand-red" />,
  },
  {
    title: "Leadership",
    desc: "Every child is given opportunities to lead, serve, and grow in confidence.",
    icon: <FiAward size={28} className="text-brand-blue" />,
  },
  {
    title: "Moral Development",
    desc: "Values-based education anchors students in respect, empathy, and ethical conduct.",
    icon: <FiHeart size={28} className="text-brand-red" />,
  },
  {
    title: "Innovation",
    desc: "We embrace new ideas, technology, and teaching methods to prepare for tomorrow.",
    icon: <FiTrendingUp size={28} className="text-brand-blue" />,
  },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-brand-blue text-white py-24 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-red/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-red font-semibold uppercase tracking-widest text-sm">
            About Our School
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mt-4 mb-6">
            A Legacy of Learning,
            <br className="hidden md:block" />
            A Future of Leaders
          </h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Anwar Leadership Academy exists to nurture the whole child —
            academically, morally, and socially — preparing them to lead lives
            of purpose and impact.
          </p>
        </div>
      </section>

      {/* HISTORY */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-red font-semibold uppercase tracking-widest text-sm">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl text-brand-charcoal mt-3 mb-6">
              Founded on a Vision for Transformation
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Anwar Leadership Academy was established with a simple yet
                powerful conviction: that every child, given the right
                environment, guidance, and values, can become a leader in their
                field and community.
              </p>
              <p>
                Founded by a group of dedicated educators who shared a passion
                for holistic education, the school began with a small
                commitment to excellence that has since grown into a thriving
                institution serving students across Nursery, Primary, and
                Secondary divisions.
              </p>
              <p>
                Over the years, Anwar Leadership Academy has continued to expand
                its facilities, curriculum, and faculty — while never losing
                sight of its founding principles of discipline, integrity, and
                academic excellence.
              </p>
              <p className="italic text-brand-blue font-medium">
                &ldquo;Our greatest achievement is not in the buildings we
                construct, but in the character we help shape.&rdquo;
              </p>
            </div>
          </div>

          {/* Stat cards instead of images */}
          <div className="grid grid-cols-2 gap-5">
            {[
              { label: "Years of Excellence", value: "15+" },
              { label: "Dedicated Educators", value: "40+" },
              { label: "Students Thriving", value: "500+" },
              { label: "Academic Divisions", value: "3" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-brand-cream rounded-xl p-6 border border-gray-100 text-center"
              >
                <p className="text-4xl font-heading font-bold text-brand-red mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION + MISSION */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm">
            <div className="w-14 h-14 bg-brand-red/10 rounded-xl flex items-center justify-center mb-6">
              <FiEye size={28} className="text-brand-red" />
            </div>
            <h3 className="text-2xl text-brand-charcoal mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be a leading center of educational excellence, raising a
              generation of confident, principled, and visionary leaders who
              contribute meaningfully to society and uphold the highest
              standards of integrity and service.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm">
            <div className="w-14 h-14 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6">
              <FiTarget size={28} className="text-brand-blue" />
            </div>
            <h3 className="text-2xl text-brand-charcoal mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To provide a holistic education that combines academic rigor with
              moral development, nurtures every child&rsquo;s unique potential,
              and equips students with the skills, character, and confidence to
              excel in a rapidly changing world.
            </p>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-red font-semibold uppercase tracking-widest text-sm">
              Our Core Values
            </span>
            <h2 className="text-3xl md:text-4xl text-brand-charcoal mt-3 mb-4">
              The Pillars That Guide Us
            </h2>
            <div className="w-24 h-1 bg-brand-red mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, i) => (
              <div
                key={i}
                className="bg-brand-cream rounded-xl p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
                  {value.icon}
                </div>
                <h3 className="text-lg text-brand-charcoal mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-24 bg-brand-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FiBookOpen size={40} className="text-brand-red mx-auto mb-6" />
          <span className="text-brand-red font-semibold uppercase tracking-widest text-sm">
            Our Educational Philosophy
          </span>
          <h2 className="text-3xl md:text-4xl text-white mt-3 mb-8">
            Nurturing the Whole Child
          </h2>
          <p className="text-blue-100 text-lg leading-relaxed mb-6">
            We believe education extends far beyond textbooks and examinations.
            At Anwar Leadership Academy, we are committed to developing the
            intellectual, moral, social, and emotional dimensions of every
            student.
          </p>
          <p className="text-blue-100 leading-relaxed">
            Our approach combines strong academic foundations with
            inquiry-based learning, character education, and opportunities for
            leadership and service. We create a safe, supportive environment
            where curiosity is celebrated, mistakes become learning moments,
            and every child is known, valued, and challenged to grow.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl text-brand-charcoal mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Discover what makes Anwar Leadership Academy a special place to
            learn and grow.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-red text-white px-8 py-4 rounded-lg font-semibold hover:bg-brand-red-dark transition shadow-lg shadow-brand-red/20"
          >
            Contact Us <FiArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}