import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

async function getCurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

export default async function Footer() {
  const currentYear = await getCurrentYear();

  return (
    <footer className="bg-brand-charcoal text-gray-300 py-12 border-t-4 border-brand-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white text-xl mb-4">Anwar Leadership Academy</h3>
          <p className="text-sm text-gray-400 mb-4">
            Nurturing future leaders through academic excellence, discipline, and moral integrity.
          </p>
          <p className="text-sm text-brand-red font-semibold italic">
            &ldquo;Knowledge is Power&rdquo;
          </p>
        </div>

        <div>
          <h4 className="text-white text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-brand-red">About Us</Link></li>
            <li><Link href="/academics" className="hover:text-brand-red">Academics</Link></li>
            <li><Link href="/leadership" className="hover:text-brand-red">Leadership</Link></li>
            <li><Link href="/gallery" className="hover:text-brand-red">Gallery</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-lg mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <FiMapPin size={16} className="mt-1 text-brand-red shrink-0" />
              123 Education Lane, City, Country
            </li>
            <li className="flex items-center gap-2">
              <FiPhone size={16} className="text-brand-red" /> +123 456 7890
            </li>
            <li className="flex items-center gap-2">
              <FiMail size={16} className="text-brand-red" /> info@anwaracademy.edu
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-lg mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a
              href="#"
              aria-label="Facebook"
              className="bg-gray-800 p-2 rounded-full hover:bg-brand-red transition"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="bg-gray-800 p-2 rounded-full hover:bg-brand-red transition"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="bg-gray-800 p-2 rounded-full hover:bg-brand-red transition"
            >
              <FaTwitter size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
        &copy; {currentYear} Anwar Leadership Academy. All rights reserved.
      </div>
    </footer>
  );
}