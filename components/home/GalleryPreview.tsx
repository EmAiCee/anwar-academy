import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

const tiles = [
  {
    label: "Computer Lab",
    image:
      "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=800&q=80&auto=format&fit=crop",
  },
  {
    label: "Science Lab",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80&auto=format&fit=crop",
  },
  {
    label: "Library",
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80&auto=format&fit=crop",
  },
  {
    label: "Classrooms",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80&auto=format&fit=crop",
  },
  {
    label: "Playground",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80&auto=format&fit=crop",
  },
  {
    label: "Innovation",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80&auto=format&fit=crop",
  },
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
            <Link
              key={i}
              href="/gallery"
              className="group relative aspect-square overflow-hidden rounded-2xl bg-brand-blue"
            >
              <Image
                src={tile.image}
                alt={tile.label}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-colors" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="text-white font-semibold text-sm md:text-base">
                  {tile.label}
                </p>
              </div>
            </Link>
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