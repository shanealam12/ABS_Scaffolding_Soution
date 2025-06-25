import Header from "./header"

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover op-[50px]"
      >
        <source src="/home_bannar2.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>


      {/* Dark Overlay for Contrast */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Centered Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        <h2 className="mt-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-wide gradient-mask">
          ABS<br />
          SCAFFOLDING SOLUTIONS
        </h2>
        <p className="mt-10 max-w-xl text-white text-base sm:text-lg md:text-xl drop-shadow-lg">
          Having achieved a respectable place in the construction industry through unmatched services for over 5 years.<br />
          ABS Scaffolding Solution continues to set the standard for quality and reliability.
        </p>

        <button className="mt-10 px-6 py-3 bg-amber-400 hover:bg-amber-500 text-black font-semibold rounded-lg shadow-lg transition"
          onClick={() => window.location.href = '/contact'}>
          Get In Touch
        </button>
      </div>

      {/* Inline Styles for Gradient Mask */}
      <style jsx>{`
        .gradient-mask {
          background: linear-gradient(90deg, #fef3c7, #fbbf24, #f59e0b, #fbbf24, #fef3c7);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: shine 6s linear infinite;
        }

        @keyframes shine {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        }
      `}</style>
    </section>
  )
}
