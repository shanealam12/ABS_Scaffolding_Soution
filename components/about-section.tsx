import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-zinc-800">About ABS Scaffolding Solution</h2>
            <p className="text-zinc-700 mb-4">
              ABS Scaffolding Solution is a renowned name in the construction industry, providing high-quality
              shuttering and scaffolding materials on hire in NCR and surrounding regions.
            </p>
            <p className="text-zinc-700 mb-6">
              With over 5 years of experience, we have established ourselves as a trusted partner for construction
              companies, offering reliable equipment, timely delivery, and exceptional service.
            </p>
            <Link href="/about">
              <Button className="bg-amber-300 text-black hover:bg-amber-400">Learn More About Us</Button>
            </Link>
          </div>
          <div className="md:w-1/2">
            <div className="aspect-video bg-zinc-200 rounded-lg overflow-hidden">
              <img src="/contect_us.jpg" alt="Scaffolding equipment" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
