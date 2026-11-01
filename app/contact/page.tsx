"use client";

import { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiSend,
  FiCheckCircle,
} from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: hook this to your email service / API later
    console.log("Contact form submitted:", form);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <>
      {/* HERO */}
      <section className="relative bg-brand-blue text-white py-24 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-red/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-red font-semibold uppercase tracking-widest text-sm">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mt-4 mb-6">
            We&apos;d Love to Hear From You
          </h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Whether you&apos;re enquiring about admissions, scheduling a visit,
            or have a general question, our team is here to help.
          </p>
        </div>
      </section>

      {/* INFO CARDS */}
      <section className="py-16 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <FiMapPin size={22} />,
              title: "Visit Us",
              lines: ["123 Education Lane", "City, Country"],
            },
            {
              icon: <FiPhone size={22} />,
              title: "Call Us",
              lines: ["+123 456 7890", "+123 456 7891"],
            },
            {
              icon: <FiMail size={22} />,
              title: "Email Us",
              lines: ["info@anwaracademy.edu", "admissions@anwaracademy.edu"],
            },
            {
              icon: <FiClock size={22} />,
              title: "Office Hours",
              lines: ["Mon – Fri: 8:00 – 16:00", "Sat: 9:00 – 13:00"],
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-brand-red/10 text-brand-red rounded-xl flex items-center justify-center mb-4">
                {card.icon}
              </div>
              <h3 className="text-lg text-brand-charcoal mb-2">{card.title}</h3>
              {card.lines.map((line, j) => (
                <p key={j} className="text-sm text-gray-600">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* FORM + MAP */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div>
            <span className="text-brand-red font-semibold uppercase tracking-widest text-sm">
              Send a Message
            </span>
            <h2 className="text-3xl md:text-4xl text-brand-charcoal mt-3 mb-4">
              How Can We Help?
            </h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below and a member of our team will respond
              within 1 working day.
            </p>

            {submitted && (
              <div className="mb-6 flex items-start gap-3 bg-green-50 border border-green-200 text-green-800 rounded-lg p-4">
                <FiCheckCircle className="mt-0.5 shrink-0" size={20} />
                <p className="text-sm">
                  Thank you! Your message has been received. We&apos;ll be in
                  touch shortly.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 outline-none transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 outline-none transition"
                    placeholder="+123..."
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 outline-none transition"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Subject *
                </label>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 outline-none transition bg-white"
                >
                  <option value="">Select a subject</option>
                  <option value="admissions">Admissions Enquiry</option>
                  <option value="visit">Schedule a Visit</option>
                  <option value="fees">Fees &amp; Payment</option>
                  <option value="academics">Academics</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 outline-none transition resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-brand-red text-white px-8 py-4 rounded-lg font-semibold hover:bg-brand-red-dark transition shadow-lg shadow-brand-red/20"
              >
                Send Message <FiSend size={18} />
              </button>
            </form>
          </div>

          {/* Map */}
          <div>
            <span className="text-brand-red font-semibold uppercase tracking-widest text-sm">
              Our Location
            </span>
            <h2 className="text-3xl md:text-4xl text-brand-charcoal mt-3 mb-4">
              Find Us on the Map
            </h2>
            <p className="text-gray-600 mb-6">
              Our campus is conveniently located and easily accessible. We
              welcome scheduled visits during office hours.
            </p>
            <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-md border border-gray-100">
              <iframe
                title="Anwar Leadership Academy location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6326!2d3.3792!3d6.5244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzEnMjguMCJOIDPCsDIyJzQ1LjEiRQ!5e0!3m2!1sen!2s!4v1699999999999"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            {/* Socials */}
            <div className="mt-8">
              <h3 className="text-lg text-brand-charcoal mb-3">Follow Us</h3>
              <div className="flex space-x-3">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-11 h-11 bg-brand-blue text-white rounded-full flex items-center justify-center hover:bg-brand-red transition"
                >
                  <FaFacebookF size={18} />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-11 h-11 bg-brand-blue text-white rounded-full flex items-center justify-center hover:bg-brand-red transition"
                >
                  <FaInstagram size={18} />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="w-11 h-11 bg-brand-blue text-white rounded-full flex items-center justify-center hover:bg-brand-red transition"
                >
                  <FaTwitter size={18} />
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="w-11 h-11 bg-brand-blue text-white rounded-full flex items-center justify-center hover:bg-brand-red transition"
                >
                  <FaYoutube size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-blue relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-brand-red/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-4">
            Visit Our School
          </h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto text-lg">
            The best way to experience Anwar Leadership Academy is in person.
            Book a campus tour today.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-white text-brand-blue px-8 py-4 rounded-lg font-semibold hover:bg-brand-cream transition"
          >
            Schedule a Tour
          </a>
        </div>
      </section>
    </>
  );
}