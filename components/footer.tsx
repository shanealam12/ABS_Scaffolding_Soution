import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import Link from "next/link"
import Logo from "@/components/logo"

export default function Footer() {
  return (
    <footer className="bg-zinc-800 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">

            <Logo />
            <p className="mt-4 text-zinc-300">
              Providing quality scaffolding and shuttering materials for over 5 years. Your trusted partner in
              construction.
            </p>
            <h3 className="mt-14 text-xl font-bold mb-4 text-amber-300">Follow Us</h3>
            <div className="flex gap-4">
              <a href="https://wa.me/9197984099038" target="_blank" rel="noopener noreferrer" className="bg-zinc-700 p-2 rounded-full hover:bg-amber-300 transition-colors">
                <FaWhatsapp className="h-5 w-5 text-green-500" />
              </a>
              <a href="#" className="bg-zinc-700 p-2 rounded-full hover:bg-amber-300 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-zinc-700 p-2 rounded-full hover:bg-amber-300 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-zinc-700 p-2 rounded-full hover:bg-amber-300 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-zinc-700 p-2 rounded-full hover:bg-amber-300 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-amber-300">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-zinc-300 hover:text-amber-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-zinc-300 hover:text-amber-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-zinc-300 hover:text-amber-300 transition-colors">
                  Our Products
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-zinc-300 hover:text-amber-300 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-300 hover:text-amber-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-amber-300">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-amber-300 mt-1" />
                <span className="text-zinc-300">Khasra No. 191, Vill-Jalpura, Teshil Dadri,<br />
                  Greater Noida, Gautambuddha Nagar,<br />
                  Uttar Pradesh - 201306</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-amber-300" />
                <p>
                  <a href="tel:+917984099038" className="hover:underline block">+91-7984099038</a>
                  <a href="tel:+919811883941" className="hover:underline block">+91-9811883941</a>
                  <a href="tel:+919718736975" className="hover:underline block">+91-9718736975</a>
                </p>
                {/* <span className="text-zinc-300">+(91)-9711313396</span> */}
              </li>
              <Mail className="h-5 w-5 text-amber-300" />
              <li className="flex items-center gap-3">
                <span className="text-zinc-300">absscaffoldingsolutions@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-2xl font-bold mb-4 text-amber-300">Location</h4>
            <div className="w-full h-[280px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps?q=28.550722,77.437460&hl=es;z=14&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            {/* <div className="mt-6">
              <h4 className="font-bold mb-2 text-amber-300">Business Hours</h4>
              <p className="text-zinc-300">Monday - Saturday:</p>
            </div> */}
          </div>
        </div>
      </div>
      <div className="bg-zinc-900 py-4">
        <div className="container mx-auto px-4 text-center text-zinc-400 text-sm">
          <p>© {new Date().getFullYear()} ABS Scaffolding Solution. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
