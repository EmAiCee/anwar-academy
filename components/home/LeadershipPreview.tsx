"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

const leaders = [
  {
    name: "Dr. [Director Name]",
    role: "Director",
    initials: "DR",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80&auto=format&fit=crop",
  },
  {
    name: "Mr. [Principal Name]",
    role: "School Principal",
    initials: "PR",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&auto=format&fit=crop",
  },
  {
    name: "Mrs. [VP Name]",
    role: "Vice Principal",
    initials: "VP",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80&auto=format&fit=crop",
  },
];

function LeaderCard({
  leader,
}: {
  leader: (typeof leaders)[number];
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="group bg-brand-cream rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
      <div className="relative w-28 h-28 mx-auto mb-5 rounded-full overflow-hidden ring-4 ring-white shadow-md bg-brand-blue">
        {!failed ? (
          <Image
            src={leader.image}
            alt={leader.name}
            fill
            sizes="112px"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white text-3xl font-heading font-bold">
            {leader.initials}
          </div>
        )}
      </div>
      <h3 className="text-lg text-brand-charcoal mb-1">{leader.name}</h3>
      <p className="text-sm text-brand-red font-medium">{leader.role}</p>
    </div>
  );
}

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
            <LeaderCard key={i} leader={leader} />
          ))}
        </div>
      </div>
    </section>
  );
}