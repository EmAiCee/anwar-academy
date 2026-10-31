import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const leaders = [
  { name: "Dr. [Director Name]", role: "Director", initials: "DR" },
  { name: "Mr. [Principal Name]", role: "School Principal", initials: "PR" },
  { name: "Mrs. [VP Name]", role: "Vice Principal", initials: "VP" },
];

export default function LeadershipPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-brand-red font-semibold uppercase tracking-widest text-sm">
              Our Leadership
            </span>
            <h2 className="text-3xl md:text-4xl text-brand-charcoal mt-3">
              Guided by Experience &amp; Vision
            </h2>
          </div>
          <Link
            href="/leadership"
            className="inline-flex items-center gap-2 text-brand-red font-semibold hover:gap-3 transition-all"
          >
            Meet the Team <FiArrowRight />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {leaders.map((leader, i) => (
            <div
              key={i}
              className="group bg-brand-cream rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="w-24 h-24 mx-auto mb-5 rounded-full bg-brand-blue text-white flex items-center justify-center text-3xl font-heading font-bold shadow-md">
                {leader.initials}
              </div>
              <h3 className="text-lg text-brand-charcoal mb-1">
                {leader.name}
              </h3>
              <p className="text-sm text-brand-red font-medium">
                {leader.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}