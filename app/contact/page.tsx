"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import EnquiryForm from "@/components/enquiry-form"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import Image from "next/image"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Top Banner Image */}
      <div className="relative w-full h-72 md:h-[450px]">
        <Image
          src="/contect_us.webp" // ⬅️ Apna image path yahaan change karein
          alt="Contact Banner"
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">Contact Us</h1>
        </div>
      </div>

      {/* Contact Info */}
      <h2 className="px-10 py-10 text-4xl font-bold text-center text-zinc-800 mb-6">Contact Details</h2>
      <section className="bg-zinc-900 text-white py-12">
        <div className="container mx-auto px-4">
          {/* <h2 className="text-3xl font-bold text-center mb-10">Contact Information</h2> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="bg-amber-200 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-zinc-800" />
              </div>
              <div>
                <h3 className="font-bold">Address</h3>
                <p>
                  Khasra No. 191, Vill-Jalpura, Teshil Dadri,<br />
                  Greater Noida, Gautambuddha Nagar,<br />
                  Uttar Pradesh - 201306
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="bg-amber-200 p-3 rounded-full">
                <Phone className="h-6 w-6 text-zinc-800" />
              </div>
              <div>
                <h3 className="font-bold">Phone</h3>
                <p>
                  <a href="tel:+917984099038" className="hover:underline block">+91-7984099038</a>
                  <a href="tel:+919811883941" className="hover:underline block">+91-9811883941</a>
                  <a href="tel:+919718736975" className="hover:underline block">+91-9718736975</a>
                </p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-4">
              <div className="bg-amber-200 p-3 rounded-full">
                <FaWhatsapp className="h-6 w-6 text-amber-700" />
              </div>
              <div>
                <h3 className="font-bold">WhatsApp</h3>
                <p>
                  <a href="https://wa.me/917984099038" className="hover:underline block">+91-7984099038</a>
                  <a href="https://wa.me/919811883941" className="hover:underline block">+91-9811883941</a>
                  <a href="https://wa.me/919718736975" className="hover:underline block">+91-9718736975</a>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="bg-amber-200 p-3 rounded-full">
                <Mail className="h-6 w-6 text-zinc-800" />
              </div>
              <div>
                <h3 className="font-bold">Email</h3>
                <a href="mailto:absscaffoldingsolutions@gmail.com" className="hover:underline">
                  absscaffoldingsolutions@gmail.com
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="flex items-start gap-4">
              <div className="bg-amber-200 p-3 rounded-full">
                <Clock className="h-6 w-6 text-zinc-800" />
              </div>
              <div>
                <h3 className="font-bold">Business Hours</h3>
                <p>Mon–Sun: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-zinc-800">Our Location</h2>
          <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-lg">
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
              </div>
            </section>
      {/* Enquiry Form */}
      <section className="py-16 bg-zinc-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-zinc-800 mb-8">Get In Touch</h2>
          <p className="text-center text-zinc-600 mb-10">
            Have questions about our products or services? Fill out the form and our team will get back to you as soon as possible.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <EnquiryForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

