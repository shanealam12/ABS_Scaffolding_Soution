import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProductsSection() {
  const products = [
    {
      title: "Vertical Standard",
      description: "A vertical standard regulates specific industry sectors with tailored guidelines.",
      image: "/product-1.webp",
    },
    {
      title: "Horizontal Ledger",
      description: "A horizontal ledger records transactions across multiple industries or sectors.",
      image: "/product-2.webp",
    },
    {
      title: "U Head Jack",
      description: "A U head jack supports scaffolding beams and provides height adjustment.",
      image: "/product-3.webp",
    },
    {
      title: "Base Jack",
      description: "A base jack provides stability and height adjustment for scaffolding structures and systems.",
      image: "/product-4.webp",
    },
    {
      title: "Spigot Pin",
      description: "A spigot pin connects scaffolding tubes, ensuring alignment and stability.",
      image: "/product-5.webp",
    },
    {
      title: "Steel Challi",
      description: "A steel challi is a durable, mesh-like reinforcement used in construction projects.",
      image: "/product-6.webp",
    },
  ]

  return (
    <section className="py-16 px-4 bg-zinc-100">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-center text-zinc-800">Our Products</h1>
        <p className="text-zinc-600 text-center mb-12 max-w-2xl mx-auto">
          We offer a comprehensive range of scaffolding and shuttering materials to meet all your construction needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-zinc-800">{product.title}</h3>
                <p className="text-zinc-600 mb-4">{product.description}</p>
                <Link href="/products">
                  <Button variant="outline" className="border-amber-300 text-amber-600 hover:bg-amber-50">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/products">
            <Button className="bg-amber-300 text-black hover:bg-amber-400">View All Products</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
