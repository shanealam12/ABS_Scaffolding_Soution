"use client"

import Header from "@/components/header"
import Hero from "@/components/hero"
import Experience from "@/components/experience"
import Counter_section from "@/components/counter_section"
import AboutSection from "@/components/about-section"
import ProductsSection from "@/components/products-section"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useModal } from "@/context/modal-context"
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import Image from "next/image"
import Link from "next/link"
export default function Home() {
  const { openEnquiryModal } = useModal()


  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <ProductsSection />
      <Counter_section/>

      {/* <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-zinc-800">Ready to Get Started?</h2>
          <p className="text-lg text-zinc-600 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your scaffolding and shuttering material requirements. Our team is ready to
            assist you.
          </p>
          <Button className="bg-amber-300 text-black hover:bg-amber-400 text-lg px-8 py-6" onClick={openEnquiryModal}>
            Request a Quote
          </Button>
        </div>
      </section> */}

      <Footer />
    </main>
  )
}
