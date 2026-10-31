import type { Metadata } from "next";
import Link from "next/link";
import { FiMail, FiAward, FiArrowRight } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Our Leadership | Anwar Leadership Academy",
  description:
    "Meet the management and leadership team of Anwar Leadership Academy — experienced educators dedicated to academic excellence and character development.",
};

type Leader = {
  name: string;
  role: string;
  bio: string;
  qualifications?: string;
  initials: string;
};

const principalLeaders: Leader[] = [
  {
    name: "Dr. [Director Full Name]",
    role: "Director / Founder",
    bio: "A visionary educator with decades of experience in academic leadership, the Director founded Anwar Leadership Academy with a commitment to nurturing principled future leaders.",
    qualifications: "Ph.D. in Education Leadership",
    initials: "DR",
  },
  {
    name: "Mr. [Principal Full Name]",
    role: "School Principal",
    bio: "Leading the academic vision of the school, the Principal ensures every student is supported, challenged, and inspired to reach their full potential.",
    qualifications: "M.Ed. in Curriculum & Instruction",
    initials: "PR",
  },
];

const sectionHeads: Leader[] = [
  {
    name: "Mrs. [Name]",
    role: "Vice Principal",
    bio: "Overseeing day-to-day academic operations and student welfare across all divisions.",
    qualifications: "B.Ed., M.A. in Educational Management",
    initials: "VP",
  },
  {
    name: "Mrs. [Name]",
    role: "Head of Nursery",
    bio: "Championing early childhood development through play, creativity, and foundational learning.",
    qualifications: "B.Ed. in Early Childhood Education",
    initials: "HN",
  },
  {
    name: "Mr. [Name]",
    role: "Head of Primary",
    bio: "Guiding literacy, numeracy, and character development for young learners.",
    qualifications: "B.Ed., PGDE",
    initials: "HP",
  },
  {
    name: "Mr. [Name]",
    role: "Head of Secondary",
    bio: "Leading rigorous academic preparation and leadership training for secondary students.",
    qualifications: "M.Sc., B.Ed.",
    initials: "HS",
  },
];

const seniorStaff: Leader[] = [
  {
    name: "Mrs. [Name]",
    role: "Head of Sciences",
    bio: "Coordinating science curriculum and laboratory programs across secondary levels.",
    qualifications: "M.Sc. in Biology",
    initials: "SC",
  },
  {
    name: "Mr. [Name]",
    role: "Head of Mathematics",
    bio: "Driving numeracy standards and problem-solving culture across the school.",
    qualifications: "M.Sc. in Mathematics",
    initials: "MA",
  },
  {
    name: "Mrs. [Name]",
    role: "Head of Languages",
    bio: "Overseeing English and language learning programs from Nursery to Secondary.",
    qualifications: "M.A. in English",
    initials: "LG",
  },
  {
    name: "Mr. [Name]",
    role: "Head of ICT",
    bio: "Leading digital literacy and innovation across all academic divisions.",
    qualifications: "B.Sc. in Computer Science",
    initials: "IC",
  },
];

function FeaturedCard({ leader }: { leader: Leader }) {
  return (
    <div className="relative bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="h-2 bg-brand-red" />
      <div className="p-8 md:p-10">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-28 h-28 rounded-2xl bg-brand-blue text-white flex items-center justify-center text-4xl font-heading font-bold shrink-0 shadow-md">
            {leader.initials}
          </div>
          <div className="flex-1">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-red mb-2">
              {leader.role}
            </span>
            <h3 className="text-2xl text-brand-charcoal mb-3">
              {leader.name}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">{leader.bio}</p>
            {leader.qualifications && (
              <div className="inline-flex items-center gap-2 text-sm text-brand-blue bg-brand-blue/5 px-3 py-1.5 rounded-md">
                <FiAward size={14} />
                <span className="font-medium">{leader.qualifications}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function LeaderCard({ leader }: { leader: Leader }) {
  return (
    <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="flex flex-col items-center text-center p-8">
        <div className="w-24 h-24 rounded-full bg-brand-cream border-4 border-white shadow-md text-brand-blue flex items-center justify-center text-2xl font-heading font-bold mb-5 group-hover:bg-brand-red group-hover:text-white transition-colors">
          {leader.initials}
        </div>
        <h3 className="text-lg text-brand-charcoal mb-1">{leader.name}</h3>
        <p className="text-sm text-brand-red font-medium mb-3">{leader.role}</p>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          {leader.bio}
        </p>
        {leader.qualifications && (
          <p className="text-xs text-gray-400 italic">{leader.qualifications}</p>
        )}
      </div>
    </div>
  );
}

export default function LeadershipPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-brand-blue text-white py-24 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-red/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-red font-semibold uppercase tracking-widest text-sm">
            Meet Our Leadership
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mt-4 mb-6">
            Guiding Our School
            <br className="hidden md:block" />
            with Vision &amp; Experience
          </h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Our management team brings together seasoned educators, dedicated
            administrators, and passionate leaders committed to the success of
            every student.
          </p>
        </div>
      </section>

      {/* DIRECTOR + PRINCIPAL */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-brand-charcoal mb-3">
              Director &amp; Principal
            </h2>
            <div className="w-20 h-1 bg-brand-red mx-auto" />
          </div>
          {principalLeaders.map((leader, i) => (
            <FeaturedCard key={i} leader={leader} />
          ))}
        </div>
      </section>

      {/* SECTION HEADS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-brand-red font-semibold uppercase tracking-widest text-sm">
              Academic Leadership
            </span>
            <h2 className="text-3xl md:text-4xl text-brand-charcoal mt-3 mb-3">
              Section Heads
            </h2>
            <div className="w-20 h-1 bg-brand-red mx-auto mb-4" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each academic division is led by a specialist dedicated to
              delivering age-appropriate excellence and holistic development.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectionHeads.map((leader, i) => (
              <LeaderCard key={i} leader={leader} />
            ))}
          </div>
        </div>
      </section>

      {/* SENIOR STAFF */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-brand-red font-semibold uppercase tracking-widest text-sm">
              Senior Staff
            </span>
            <h2 className="text-3xl md:text-4xl text-brand-charcoal mt-3 mb-3">
              Department Heads
            </h2>
            <div className="w-20 h-1 bg-brand-red mx-auto mb-4" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our department heads oversee curriculum quality, teaching
              standards, and student outcomes across key subject areas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {seniorStaff.map((leader, i) => (
              <LeaderCard key={i} leader={leader} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl text-brand-charcoal mb-4">
            Have a Question for Our Team?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Our leadership is always happy to hear from parents and prospective
            families.
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