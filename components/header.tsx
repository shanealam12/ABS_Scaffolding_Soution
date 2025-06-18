"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Mail, Menu, X } from "lucide-react";
import Logo from "@/components/logo";
import { useModal } from "@/context/modal-context";

export default function Header() {
  const { openEnquiryModal } = useModal();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div
        className={`w-full py-2 px-4 md:px-8 transition-colors duration-300 ${scrolled ? "bg-white" : "bg-amber-300"
          }`}
      >
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Hide heading on mobile */}
          <h1 className="hidden md:block mb-2 md:mb-0 text-lg font-medium text-black text-left">
            Shuttering & Scaffolding Material on hire in Delhi, Noida and Gurugram
          </h1>

          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <a
              href="tel:+917984099038"
              className={`flex items-center gap-2 font-bold transition-colors duration-300 ${scrolled
                  ? "text-zinc-800 hover:text-amber-600"
                  : "text-zinc-600 hover:underline"
                }`}
            >
              <Phone className="h-4 w-4" />
              +91-7984099038
            </a>
            <a
              href="mailto:absscaffoldingsolutions@gmail.com"
              className={`flex items-center gap-2 text-sm md:text-base transition-colors duration-300 ${scrolled
                  ? "text-zinc-800 hover:text-amber-600"
                  : "text-zinc-600 hover:underline"
                }`}
            >
              <Mail className="h-4 w-4" />
              absscaffoldingsolutions@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <header
        className={`fixed left-0 w-full z-50 transition-all duration-300 ${scrolled ? "top-0" : "top-10"
          }`}
      >
        <nav
          className={`w-full py-4 px-4 md:px-8 transition-colors duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"
            }`}
        >
          <div className="px-1 container mx-auto flex justify-between items-center">
            {/* Logo with dynamic top margin */}
            <div
              className={`relative transition-all duration-300 ${scrolled ? "top-0" : "top-4"
                }`}
            >
              <Logo />
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-8">
              {[
                { href: "/", label: "HOME" },
                { href: "/about", label: "ABOUT" },
                { href: "/products", label: "OUR PRODUCTS" },
                { href: "/gallery", label: "OUR GALLERY" },
                { href: "/contact", label: "CONTACT" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`text-xl font-bold transition-colors duration-300 ${scrolled
                        ? "text-zinc-800 hover:text-amber-600"
                        : "text-white hover:text-amber-600"
                      }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Hamburger */}
            {/* Mobile Hamburger */}
            <button
              className="md:hidden"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X size={24} className={`${scrolled ? "text-black" : "text-white"}`} />
              ) : (
                <Menu size={24} className={`${scrolled ? "text-black" : "text-white"}`} />
              )}
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          {mobileOpen && (
            <div className="md:hidden bg-white shadow-lg">
              <ul className="flex flex-col items-center gap-6 py-4">
                {[
                  { href: "/", label: "HOME" },
                  { href: "/about", label: "ABOUT" },
                  { href: "/products", label: "OUR PRODUCTS" },
                  { href: "/gallery", label: "OUR GALLERY" },
                  { href: "/contact", label: "CONTACT" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-lg font-bold text-zinc-800 hover:text-amber-600"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
