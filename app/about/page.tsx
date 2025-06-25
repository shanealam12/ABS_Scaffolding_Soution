import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      {/* Top Banner Image */}
      <div className="relative w-full h-72 md:h-[450px]">
        <Image
          src="/about.webp"
          alt="Contact Banner"
          layout="fill"
          objectFit="cover"
          priority         
          loading="eager"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">About Us</h1>
        </div>

      </div>
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-zinc-800">Our Story</h2>
              <p className="text-zinc-700 mb-4">
                ABS Scaffolding Solutions was established in 2020 with a vision to provide high-quality
                scaffolding and shuttering materials to the construction industry. Over the past 5 years, we have
                grown to become one of the most trusted names in the industry.
              </p>
              <p className="text-zinc-700 mb-4">
                Our journey began with a small inventory of basic scaffolding equipment, but through dedication to
                quality and customer satisfaction, we have expanded our range to include a comprehensive selection of
                construction support materials.
              </p>
              <p className="text-zinc-700">
                Today, we serve hundreds of construction companies across NCR and surrounding regions, providing them
                with reliable equipment and exceptional service.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="aspect-video bg-zinc-200 rounded-lg overflow-hidden">
                <img src="/gallery-1.webp" alt="Company history" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-zinc-800">From the Leadership Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {/* Chairman */}
            <div className="bg-zinc-100 p-6 rounded-lg shadow-md text-center">
              <img
                src="/mo_ashir1.webp"
                alt="Chairman Mohd Ashir"
                className="w-40 h-40 object-cover mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-bold text-zinc-800 mb-1">Mohd Ashir</h3>
              <p className="text-sm font-semibold text-zinc-500 mb-4">Chairman</p>
              <p className="text-zinc-700 text-sm">
                Mohd Ashir brings deep expertise in setting the organization's strategic direction, overseeing management, providing guidance, and verifying compliance with regulatory requirements.

              </p>
            </div>

            {/* Director 1 */}
            <div className="bg-zinc-100 p-6 rounded-lg shadow-md text-center">
              <img
                src="/shamshad2.webp"  // Replace with actual path
                alt="Director Name"
                className="w-40 h-40 object-cover mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-bold text-zinc-800 mb-1">Shamshad Ali</h3>
              <p className="text-sm font-semibold text-zinc-500 mb-4">Chairman</p>
              <p className="text-zinc-700 text-sm">
                Provide strategic guidance through participation in strategic planning, verifying that the organization's goals and objectives are aligned with its mission and vision.
              </p>
            </div>

            {/* Director 2 */}
            <div className="bg-zinc-100 p-6 rounded-lg shadow-md text-center">
              <img
                src="/babbu.webp"  // Replace with actual path
                alt="Director Name"
                className="w-40 h-40 object-cover mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-bold text-zinc-800 mb-1">Babbu Khan</h3>
              <p className="text-sm font-semibold text-zinc-500 mb-4">Chairman</p>
              <p className="text-zinc-700 text-sm">
                Babbu Khan oversees operational strategy, ensuring that all client projects are delivered efficiently and safely. He has a hands-on approach and decades of experience in field of scaffolding and construction.

              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-zinc-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-zinc-800">Why Choose Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-zinc-800">Quality Assurance</h3>
              <p className="text-zinc-600">
                All our scaffolding and shuttering materials undergo rigorous quality checks to ensure safety and
                durability.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-zinc-800">Experienced Team</h3>
              <p className="text-zinc-600">
                Our team consists of industry experts with decades of experience in construction support systems.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-zinc-800">Timely Delivery</h3>
              <p className="text-zinc-600">
                We understand the importance of deadlines in construction projects and ensure prompt delivery of
                materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
