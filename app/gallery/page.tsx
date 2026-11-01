import type { Metadata } from "next";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "School Gallery | Anwar Leadership Academy",
  description:
    "Explore the Anwar Leadership Academy campus — classrooms, labs, library, activities, sports, and school events.",
};

export default function GalleryPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-brand-blue text-white py-24 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-red/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-red font-semibold uppercase tracking-widest text-sm">
            School Gallery
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mt-4 mb-6">
            Explore Our Campus
          </h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            A glimpse into the spaces, faces, and moments that make Anwar
            Leadership Academy a place where children thrive.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-16 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid />

          <div className="mt-16 max-w-2xl mx-auto text-center bg-white rounded-2xl border border-gray-100 p-6">
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-brand-charcoal">
                Note:
              </span>{" "}
              Gallery photos will be uploaded from the school&apos;s own
              collection. Each tile is a placeholder and will be replaced with
              real photography of our premises, facilities, and activities.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}