import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function HomeCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-brand-blue rounded-3xl overflow-hidden p-10 md:p-16 text-center">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-brand-red/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

          <div className="relative">
            <h2 className="text-3xl md:text-4xl text-white mb-4">
              Admissions Now Open
            </h2>
            <p className="text-blue-100 max-w-xl mx-auto mb-8 text-lg">
              Give your child a strong foundation for a lifetime of success.
              Join the Anwar Leadership Academy family today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-red text-white px-8 py-4 rounded-lg font-semibold hover:bg-brand-red-dark transition"
              >
                Apply Now <FiArrowRight />
              </Link>
              <Link
                href="/academics"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-brand-blue transition"
              >
                Explore Academics
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}