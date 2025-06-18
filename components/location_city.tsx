"use client"

import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation"

const cities = [
  { name: "Delhi", icon: "/india-gate2.svg", path: "city/delhi" },
  { name: "Noida", icon: "/qutb-minar-in-new-delhi.svg", path: "city/noida" },
  { name: "Gurugram", icon: "/sher-dor-madrasah.svg", path: "city/gurugram" },
]

const images = [
  "/gallery-4.jpg",
  "/gallery-1.jpg",
  "/gallery-7.jpg",
  "/gallery-9.jpg"
]

export default function ScaffoldingProjects() {
  const [selected, setSelected] = useState("")
  const router = useRouter()

  return (
    <div className="space-y-10 px-4 py-8">
      {/* City Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cities.map((city) => (
          <div
            key={city.name}
            className="cursor-pointer p-4 shadow-md hover:bg-yellow-100 rounded-lg border border-yellow-300 text-center"
            onClick={() => router.push(city.path)}
          >
            <Image src={city.icon} alt={city.name} width={64} height={64} className="mx-auto mb-2" />
            <h2 className="text-lg font-semibold">{city.name}</h2>
          </div>
        ))}
      </div>
      {/* Project Images */ }
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 mt-2">
        OUR GALLERY
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {images.map((img, idx) => (
          <div key={idx} className="w-full h-64 relative rounded overflow-hidden shadow-sm">
            <Image
              src={img}
              alt={`Scaffold Image ${idx + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div >
  )
}
