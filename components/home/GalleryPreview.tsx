import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import {
  FaFlask,
  FaLaptopCode,
  FaBook,
  FaFutbol,
  FaMicroscope,
  FaChalkboardTeacher,
} from "react-icons/fa";

const tiles = [
  { icon: <FaLaptopCode size={28} />, label: "Computer Lab", color: "bg-brand-blue" },
  { icon: <FaFlask size={28} />, label: "Science Lab", color: "bg-brand-red" },
  { icon: <FaBook size={28} />, label: "Library", color: "bg-brand-red" },
  { icon: <FaChalkboardTeacher size={28} />, label: "Classrooms", color: "bg-brand-blue" },
  { icon: <FaFutbol size={28} />, label: "Playground", color: "bg-brand-blue" },
  { icon: <FaMicroscope size={28} />, label: "Innovation", color: "bg-brand-red" },
];

export default function GalleryPreview() {
  return (
    <section className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-brand-red font-semibold uppercase tracking-widest text-sm">
            Our Campus
          </span>
          <h2 className="text-3xl md:text-4xl text-brand-charcoal mt-3 mb-4">
            Explore Our Learning Environment
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Purpose-built facilities designed to support curiosity, creativity,
            and hands-on discovery.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {tiles.map((tile, i) => (
            <div
              key={i}
              className={`${tile.color} relative aspect-square rounded-2xl flex flex-col items-center justify-center text-white p-6 group overflow-hidden`}
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
              <div className="relative mb-3 opacity-90 group-hover:scale-110 transition-transform">
                {tile.icon}
              </div>
              <p className="relative font-semibold text-sm md:text-base">
                {tile.label}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 bg-brand-charcoal text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-black transition"
          >
            View Full Gallery <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}