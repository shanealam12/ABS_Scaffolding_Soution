import Header from "@/components/header"
import Footer from "@/components/footer"

interface CityPageProps {
  params: { name: string }
}

export default function CityPage({ params }: CityPageProps) {
  const { name } = params

  return (
    <main className="min-h-screen bg-white text-black">
      <Header />

      {/* Hero Section */}
      <div className="relative bg-zinc-800 w-full h-[400px]">
        <div
          className="absolute top-0 left-0 w-full h-[400px] bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/contect_us.jpg')" }}
        />
        <div className="relative h-[500px] flex items-center justify-center z-10">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-white text-center">Rental Scaffolding or Shuttering Materials in Delhi</h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold capitalize mb-4">{name}</h1>

        <section className="space-y-4">
          <p>
            At ABS SCAFFOLDING SOLUTIONS, we offer safe, flexible, and cost-effective scaffolding and shuttering materials on rent—perfectly tailored to suit your construction needs and timelines.

            Whether it’s a residential, commercial, or industrial project, our experienced team ensures the job is done with the highest standards of safety, quality, and performance. We understand that every project is unique, which is why we offer customized solutions—even for complex or space-constrained sites.

            From home renovations to large-scale industrial constructions, our scaffolding systems are built to withstand tough weather while keeping your workers safe and efficient on the job.
          </p>
          <p>
            We use quality scaffolding materials on rent and shuttering material on hire in Delhi that would not only conform to but also outdo the prescribed industry requirements, thus stabilizing and providing durability to the project. The core of our operations incorporates safety; hence, we follow the legal standards necessary and also provide convenience on your project, wherever it is. We take care of everything from the time of scaffolding products, including installing scaffolds, providing shuttering material on rent, and scaffolding materials so that supporting structures do not get loose as a result of strenuous building activities.
          </p>
        </section>

        {/* Material Sections */}
        <section className="mt-8 space-y-6">
          <h2 className="text-2xl font-semibold">Wide Range of Scaffolding Materials on Rent:</h2>

          {[
            ["Adjustable Telescopic Prop on Rent/Hire", "Adjustable Telescopic Prop is a versatile scaffolding material to hire that support tool widely used in construction to temporarily hold up beams, slabs, and other horizontal structures. The prop consists of two steel tubes, with one sliding inside the other, allowing for height adjustments to meet the specific requirements of various construction projects. For those in need of reliable support equipment, Adjustable Telescopic Props on rent or hire in Delhi offer a cost-effective solution, ensuring flexibility and stability across various building sites."],
            ["Cuplock System on Rent/Hire", "The Cuplock System is a flexible and fairly green scaffolding material widely utilized in creation due to its ease of meeting, strength, and versatility. It's designed to aid heavy hundreds and is ideal for an extensive range of tasks, from small residential jobs to massive-scale industrial and industrial production. For those in need of reliable support equipment, the Cuplock System on rent or hire in Delhi offers a cost-effective solution, ensuring flexibility across various building sites."],
            ["Acro Spans on Rent/Hire", "Acro Spans, also referred to as Adjustable Spans, are specialized scaffolding components designed to provide a brief guide for slabs, beams, and ceilings for the duration of production. Their strong production and adjustable features make them perfect for ensuring the stability of horizontal systems until everlasting help is in location. For those in need of reliable support equipment, Acro Spans on rent or hire in Delhi offers a cost-effective solution, ensuring stability across various building sites."],
            ["Adjustable Base Jacks on Rent/Hire", "Adjustable Base Jacks are crucial materials in scaffolding structures, designed to provide a solid base for scaffolding structures. These jacks are important for ensuring precise levelling and height adjustments, in particular when working on uneven or sloping surfaces. Their capability to keep balance and stability complements each the protection and performance of production projects. For those in need of reliable support equipment, Adjustable Base Jacks on rent or hire in Delhi offer a cost-effective solution, ensuring stability across various building sites."],
            ["MS Shuttering Plates on Rent/Hire", "MS Shuttering Plates are integral components used in the construction of formwork systems for concrete structures. They are essential for shaping and supporting concrete while it sets and hardens. For those in need of reliable support equipment, MS Shuttering Plates on rent or hire in Delhi offer a cost-effective solution, ensuring stability across various building sites."],
            ["Steel Challi on Rent/Hire", "Steel Challi is a vital component used in scaffolding and construction for providing reliable support for vertical loads. Also known as Steel Props or Vertical Supports, Steel Challis are designed to handle significant weight and stress, ensuring the stability and safety of scaffolding structures and other temporary supports. For those in need of reliable support equipment, Steel Challi on rent or hire in Delhi offers a cost-effective solution, ensuring stability across various building sites."],
            ["Vertical Standards on Rent/Hire", "Vertical Standards, additionally known as Vertical Posts or Vertical Tubes, are critical components in scaffolding structures. They are accountable for transferring the masses from the scaffold shape down to the ground, presenting vital stability and support. For those in need of reliable support equipment, Vertical Standards on rent or hire in Delhi offers a cost-effective solution, ensuring stability across various building sites."],
            ["Horizontal Ledgers on Rent/Hire", "Horizontal Ledgers are important components in scaffolding structures, offering vital horizontal support and bracing. They play a key role in preserving the stability and protection of the scaffold structure. For those in need of reliable support equipment, Horizontal Ledgers on rent or hire in Delhi offer a cost-effective solution, ensuring stability across various building sites."],
            ["Pop Jack Teka on Rent/Hire", "Looking to rent Pop Jack Teka in Delhi? Pop Jack Teka is a versatile and essential scaffolding tool to rent for construction projects in Delhi, ensuring stability and safety during formwork and scaffolding tasks. Renting Prop Jack Teka from trusted providers like ABS SCAFFOLDING SOLUTIONS offers a cost-effective and reliable solution tailored to your specific project needs. Known for their commitment to quality and safety, ABS SCAFFOLDING SOLUTIONS provides sturdy, adjustable equipment that adheres to industry standards, ensuring efficient and secure construction processes. For more details, visit ABS SCAFFOLDING SOLUTIONS."],
            ["Spigot Pins on Rent/Hire", "Spigot Pins are important additives in scaffolding structures used to connect and steady vertical scaffolding tubes, ensuring the structural integrity and balance of the scaffold. They play a key role in assembling and maintaining the electricity of the scaffolding shape. For those in need of reliable support equipment, Spigot Pins on rent or hire in Delhi offers a cost-effective solution, ensuring stability across various building sites."],
            ["U Head Jack on Rent/Hire", "A U Head Jack or Adjustable U Jack for scaffolding is an adjustable support used to secure and stabilize beams or formwork in construction. Its U-shaped head holds horizontal structures in place, preventing movement. The jack's adjustable height provides flexibility, while its robust steel design ensures strong load-bearing capacity, making it essential for stable and secure scaffolding setups. For those in need of reliable support equipment, Adjustable U Jack/U Head Jack on rent or hire in Delhi offers a cost-effective solution, ensuring stability across various building sites."]
          ].map(([title, desc], idx) => (
            <div key={idx}>
              <h3 className="text-xl font-semibold">{title} on Rent/Hire</h3>
              <p>{desc}</p>
            </div>
          ))}
        </section>

        {/* Why Choose Section */}
        <section className="mt-10">
          <h1 className="text-2xl font-semibold mb-2">WHY CHOOSE ABS SCAFFOLDING SOLUTIONS?</h1>
          <p>
            <strong>Unmatched Safety and Quality:</strong> ABS SCAFFOLDING SOLUTIONS prioritizes safety, adhering to the highest industry standards in manufacturing and installation. Every scaffolding product or shuttering materials on hire is made with the use of high-quality materials, ensuring sturdiness and stability on construction sites. Their precise, high-quality control approach ensures that the scaffolding no longer only supports the structure securely but also protects workers. The awareness of safety reduces the danger of accidents, imparting ease of thought for contractors and project supervisors alike.
          </p>
          <p>
            <strong>Comprehensive, Custom Solutions:</strong> With a sizeable range of scaffolding alternatives, ABS SCAFFOLDING SOLUTIONS is equipped to deal with various project necessities. Whether it is conventional scaffolding, mobile towers, or customized structures, they provide tailored answers that suit the specific wishes of every construction venture. Their skilled group works carefully with clients to lay out, deploy, and preserve scaffolding structures that maximize efficiency and safety on-site, all while staying within budget.
          </p>
        </section>

        {/* Conclusion */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
          <p>
          For all your scaffolding and shuttering material on hire in Delhi needs, ABS SCAFFOLDING SOLUTIONS is your one-stop solution. We are committed to providing you with safe, dependable and excellent scaffolding rental/hiring solutions, backed by years of know-how and pleasant materials. Whether you want adjustable props, Cuplock structures, or U Head Jacks, our wide range of merchandise and custom solutions are designed to fulfil the particular demands of your mission. Your safety and delight are our pinnacle priorities, and we stay up to support you with dependable scaffolding that guarantees an easy and secure construction manner. Feel free to reach out to our team for any further inquiries! Contact us +91-7984099038 |+91-9811883941 | +91-9718736975 or absscaffoldingsolutions@gmail.com to hire/rent scaffolding or shuttering materials in Delhi.
          </p>
        </section>
      </div>

      <Footer />
    </main>
  )
}
