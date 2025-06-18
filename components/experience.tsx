
"use client"

import { useEffect, useState } from "react"
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.5 })
  const [startCount, setStartCount] = useState(false)

  useEffect(() => {
    if (inView) {
      setStartCount(false)
      setTimeout(() => setStartCount(true), 100)
    }
  }, [inView])

  return (
    <section className="bg-white py-16 px-4 md:px-16">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-zinc-900 mt-2">
          CONTACT
        </h1>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Image + Counter */}
        <div className="relative border-2 border-dashed border-yellow-400 p-2 max-w-md w-full">
          <Image
            src="/gallery-4.jpg"
            alt="Scaffolding Construction"
            width={800}
            height={400}
            className="object-cover w-full h-auto rounded-md"
          />
          <div
            ref={ref}
            className="absolute bottom-[-20px] right-[-20px] bg-white shadow-md rounded-full px-6 py-4 text-center"
          >
            <p className="text-2xl font-bold text-black">
              {startCount ? <CountUp end={5} duration={2} /> : 0}
              <span className="text-lg">+</span>
            </p>
            <p className="text-sm text-gray-600 leading-tight">
              Years of<br />Experience
            </p>
          </div>
        </div>

        {/* Right Text Block */}
        <div className="max-w-2xl w-full space-y-6 text-center md:text-left">
          <h2 className="text-4xl text-center bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-md shadow-lg transition-all">
            Strength Through Support
          </h2>

          <p className="bg-yellow-400/30 p-4 rounded-md text-gray-800 leading-relaxed">
            At <strong>ABS SCAFFOLDING SOLUTIONS</strong>, we deliver top-quality scaffolding solutions designed to boost efficiency and safety in the construction industry. Our mission is to support ambitious individuals and organizations who are shaping the future of our nation. We help them achieve their business goals while driving meaningful change within their communities.
          </p>

          <p className="bg-yellow-400/30 p-4 rounded-md text-gray-800 leading-relaxed">
            With over <strong>5 years </strong>of hands-on experience, Amirsons has built a solid reputation for reliable, professional service in the construction sector. Whether it’s a small project or a large-scale build, we’re here to support your vision every step of the way.
          </p>
        </div>
      </div>
      <div className="pt-4 text-center">
        <Link href="/contact" passHref>
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-md shadow-lg transition-all">
            CONTACT US <span className="ml-2 text-lg">+</span>
          </Button>
        </Link>
      </div>

    </section>
  )
}



