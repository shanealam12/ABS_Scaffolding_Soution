"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useModal } from "@/context/modal-context"

export default function ProductsPage() {
  const { openEnquiryModal } = useModal()
  const [selectedProductIndex, setSelectedProductIndex] = useState<number | null>(null)

  const toggleDetails = (index: number) => {
    setSelectedProductIndex(index === selectedProductIndex ? null : index)

    // Scroll to detail section
    setTimeout(() => {
      const detailSection = document.getElementById("product-detail")
      detailSection?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 100)
  }


  const products = [
    {
      title: "Vertical Standard",
      description: "A vertical standard regulates specific industry sectors with tailored guidelines.",
      features: [
        "Vertical standards are those regulations that apply to a specific or limited number of industries and businesses. Examples of vertical standards are rules and regulations covering construction or the shipping industries. These standards are negotiated with industry groups themselves.",

        "Standards that apply to a particular industry or to particular operations, practices, conditions, processes, means, methods, equipment or installations. Horizontal Standards – Other (more general) standards applicable to multiple industries"
      ],
      image: "/product-1.png",
    },
    {
      title: "Horizontal Ledger",
      description: "A horizontal ledger records transactions across multiple industries or sectors.",
      features: [
        "Ledgers are the horizontal members of Cuplock scaffolding. They provide horizontal support for loads and planks. Ledgers are also used as mid rail and top or hand guard rails.",

        "Banking on the skills of an experienced team of professionals, we have been remarkable in offering a wide array of Horizontal Ledger. Offered horizontal ledgers are available in different sizes to meet maximum customer varied requirements and demands effectively. In addition to this, customer can avail these horizontal ledgers from us at reasonable rates."
      ],
      image: "/product-2.png",
    },
    {
      title: "U Head Jack",
      description: "A U head jack supports scaffolding beams and provides height adjustment.",
      features: [
        "These U Head are available in accurate dimensions and are easily installed for heavy duty functioning in several construction areas. It is made up of optimum quality raw materials that enhance the life and durability of the product. These are scaffolding accessories that are usually applauded for its quality, sturdiness, easy installation and low maintenance.",

        "Adjustable U Head available with us are widely used during building construction work providing end to end connection to scaffolding structure. These U Head are made using finest quality raw material and hence very strong and durable."
      ],
      image: "/product-3.png",
    },
    {
      title: "Base Jack",
      description: "A base jack provides stability and height adjustment for scaffolding structures and systems.",
      features: [
        "Base Jacks are inserted into the bottom end of the Standards to provide the required vertical height adjustment. Base Jacks are also considered the “feet” of the scaffold structure. The base jack is used as the base of the scaffolding tower to level the scaffold. It is adjusted by rotating the wing nut up and down the threaded bar.",

        "Image result for base jack in scaffolding Product Detail. Scaffolding base jack which is the necessary parts in every scaffolding system to adjust the scaffold level whenever the floor base not flat, special-shaped, etc, which provide a good solution for a construction project, bridge, tunnel, civil building, etc."
      ],
      image: "/product-4.png",
    },
    {
      title: "Spigot Pin",
      description: "A spigot pin connects scaffolding tubes, ensuring alignment and stability.",
      features: [
        "The spigot pin is used in cup lock system. It is made out of 250/300 long round pipe of 38 MM OD. Spigot is used for ambien 10 mg cup lock standard vertical. Washer is welded at the center of spigot. Spigot is connecting internally and to allow ease of generic viagra online.",

        "We are an acclaimed name engaged in offering our precious clients a superior quality range of Joint Pin. Our offered pins are manufactured at our advanced manufacturing unit under the supervision of highly skilled and experienced professionals."
      ],
      image: "/product-5.png",
    },
    {
      title: "Steel Challi",
      description: "A steel challi is a durable, mesh-like reinforcement used in construction projects.",
      features: [
        "Steel challi is used as a platform that extends out of the structure on which the work process has been carried out. It is made from high quality steel which ensures a durable and dependable support to the people involved in construction.",

        "Steel Challi Precisely manufactured by our highly skilled professionals using quality approved raw material and latest technology, this Challi is available in various specifications as per the requirements of clients. Also, this Challi is checked on several quality parameters to ensure their flawless finish."
      ],
      image: "/product-6.png",
    },
    {
      title: "Shuttering Plates",
      description: "Shuttering plates are temporary molds used to hold concrete in construction projects.",
      features: [
        "Shuttering Plates/ Centering Plates are also called M.S Plate, Steel Plate, Form Work, Farma or Pharma. These MS shuttering plates on rent are commonly used in slab casting to hold the green concrete until it takes shape and solidifies enough to support its own weight.",

        "Formwork is important for concrete to harden in the desired shape. Many contractors now prefer shuttering material on rent as it reduces project costs and speeds up setup. Formwork is the temporary or permanent support structure/mould into which concrete is poured. It is also known as centring or shuttering.",
        
        "<h1>Get Durable MS Shuttering Plates on Rent<h1>",

        "We provide sturdy and reliable MS shuttering plates on rent for builders and contractors. Our plates are ideal for slab work, column formwork, and other reinforced concrete structures. Whether your project is large-scale or residential, renting these plates helps you maintain structural accuracy without investing in permanent inventory."
      ],
      image: "/product-7.png",
    },
    {
      title: "Span",
      description: "In construction, span refers to the distance between supports for beams or structures.",
      features: [
        "Span Tablet is an antibiotic medicine containing cefixime as its active ingredie. It is used in treating bacterial infections of the urinary tract, lungs, throat, airways, tonsils, middle ear and cervical/urethral infections.",

        "Span is the amount of area or the amount of time that something encompasses. An example of span is how long you live. An example of span is a house on three acres. A team of two animals used together."
      ],
      image: "/product-8.png",
    },
    {
      title: "Adjustable Telescopic Props",
      description: "Adjustable telescopic props are used in temporary support for construction with versatility.",
      features: [
        "Adjustable telescopic props are versatile, height-adjustable steel supports used in construction to provide temporary support to formwork or other structural components during building or repair projects. The telescopic design allows for easy adjustment of the prop's height to fit varying site requirements.",

        "Commonly used in slab formwork to support concrete molds until the concrete hardens and can bear its own weight."
      ],
      image: "/product-9.png",
    },
    {
      title: "Cuplock System",
      description: "The Cuplock system is a modular scaffolding system known for its quick assembly and dismantling features.",
      features: [
        "The Cuplock system is a modular scaffolding system known for its quick assembly and dismantling features. It consists of vertical standards with fixed cup joints at regular intervals. Horizontal ledgers and diagonal braces are attached to these joints using a unique locking method that ensures stability and safety.",

        "Widely used in construction projects for scaffolding, it supports workers and materials at various heights. It's particularly effective for building façades, bridges, and other complex structures."
      ],
      image: "/product-10.png",
    },
  ]



  return (
    <main className="min-h-screen">
      <Header />

      {/* Banner */}
      <div className="relative bg-zinc-800">
        <div
          className="absolute top-0 left-0 w-full h-[400px] bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/product_bannar.jpg')" }}
        />
        <div className="relative h-[400px] flex items-center justify-center z-10">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-white text-center">Our Products</h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">

          {/* Intro Text */}
          <p className="text-center text-lg text-zinc-700 max-w-3xl mx-auto mb-12">
            We offer a comprehensive range of high-quality scaffolding and shuttering materials to meet all your
            construction needs. Our products are designed for durability, safety, and ease of use.
          </p>

          {/* Product Detail Section */}
          {selectedProductIndex !== null && (
            <div id="product-detail" className="mb-16 bg-white border border-zinc-200 rounded-lg shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-6 items-start p-6">
                <div>
                  <img
                    src={products[selectedProductIndex].image}
                    alt={products[selectedProductIndex].title}
                    className="w-full h-auto rounded"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-zinc-800">
                    {products[selectedProductIndex].title}
                  </h2>
                  <p className="text-zinc-600 mb-4">{products[selectedProductIndex].description}</p>
                  <h4 className="font-semibold text-sm text-zinc-700 mb-2">Key Features:</h4>
                  <ul className="list-disc pl-5 text-sm text-zinc-600 space-y-1">
                    {products[selectedProductIndex].features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <Button
                      variant="outline"
                      className="border-blue-300 text-blue-600 hover:bg-blue-50"
                      onClick={() => setSelectedProductIndex(null)}
                    >
                      Close
                    </Button>
                    <Button
                      variant="outline"
                      className="border-amber-300 text-amber-600 hover:bg-amber-50"
                      onClick={openEnquiryModal}
                    >
                      Request Quote
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md border border-zinc-200">
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

                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant="outline"
                      className="border-blue-300 text-blue-600 hover:bg-blue-50"
                      onClick={() => toggleDetails(index)}
                    >
                      Read More
                    </Button>
                    <Button
                      variant="outline"
                      className="border-amber-300 text-amber-600 hover:bg-amber-50"
                      onClick={openEnquiryModal}
                    >
                      Request Quote
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
