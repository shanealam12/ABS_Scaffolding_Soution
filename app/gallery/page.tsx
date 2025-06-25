import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
export default function GalleryPage() {
  const galleryImages = [
    {
      src: "/gallery-1.webp",
      // alt: "Construction site with scaffolding",
      // title: "Commercial Building Project",
    },
    {
      src: "/gallery-2.webp",
      // alt: "High-rise building construction",
      // title: "High-rise Residential Complex",
    },
    {
      src: "/gallery-3.webp",
      // alt: "Bridge construction with scaffolding",
      // title: "Infrastructure Project",
    },
    {
      src: "/gallery-4.webp",
      // alt: "Interior scaffolding setup",
      // title: "Interior Renovation",
    },
    {
      src: "/gallery-5.webp",
      // alt: "Scaffolding for historical building restoration",
      // title: "Heritage Building Restoration",
    },
    {
      src: "/gallery-6.webp",
      // alt: "Industrial scaffolding setup",
      // title: "Industrial Project",
    },
    {
      src: "/gallery-7.webp",
      // alt: "Stadium construction scaffolding",
      // title: "Sports Complex Construction",
    },
    {
      src: "/gallery-8.webp",
      // alt: "Shopping mall construction",
      // title: "Commercial Center Development",
    },
    {
      src: "/gallery-9.webp",
      // alt: "Hospital building construction",
      // title: "Healthcare Facility Project",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />
        {/* Top Banner Image */}
      <div className="relative w-full h-72 md:h-[450px]">
        <Image
          src="/gallery_bannar.webp"
          alt="Contact Banner"
          layout="fill"
          objectFit="cover"
          priority         
          loading="eager"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">Our Gallery</h1>
        </div>
      </div>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <p className="text-center text-lg text-zinc-700 max-w-3xl mx-auto mb-12">
            Explore our portfolio of completed projects and see our scaffolding and shuttering materials in action
            across various construction sites.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-md">
                <a href={image.src} target="_blank" rel="noopener noreferrer">
                  <img
                    src={image.src || "/placeholder.svg"}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    alt=""
                  />
                </a>
              </div>

              // <div key={index} className="group relative overflow-hidden rounded-lg shadow-md">
              //   <img
              //     src={image.src || "/placeholder.svg"}
              //     // alt={image.alt}
              //     className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              //   />
              //   <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              //     <div className="p-4 w-full">
              //       {/* <h3 className="text-white font-bold text-lg">{image.title}</h3> */}
              //     </div>
              //   </div>
              // </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
