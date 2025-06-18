"use client"

import { useModal } from "@/context/modal-context"
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import Experience from "@/components/experience"
import Location_city from "@/components/location_city"
export default function Home() {
  const { openEnquiryModal } = useModal()
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.5 })
  const [startCount, setStartCount] = useState(false)

  useEffect(() => {
    if (inView) {
      setStartCount(false) // reset before starting
      setTimeout(() => setStartCount(true), 100) // restart after short delay
    }
  }, [inView])

  const stats = [
    { number: 111, label: 'HAPPY CUSTOMERS' },
    { number: 444, label: 'APPROVED PRODUCTS' },
    { number: 303, label: 'CERTIFIED CLIENT' },
    { number: 416, label: 'SATISFACTION' },
  ]

  return (
    <main className="min-h-screen">
      <section className="bg-[url('/bannar.png')] bg-cover bg-center py-16">
        <div className="bg-black/60 py-16" ref={ref}>
          <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            {stats.map((item, index) => (
              <div key={index} className="border-r last:border-r-0 border-white/30 pr-6 last:pr-0">
                <h3 className="text-4xl font-bold mb-2">
                  {startCount ? (
                    <CountUp end={item.number} duration={2.5} />
                  ) : (
                    0
                  )}
                  <span className="text-2xl">+</span>
                </h3>
                <p className="text-sm font-medium uppercase tracking-wide">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Experience/>
      <Location_city/>
    </main>
  )
}
