// import Link from "next/link"
// import Image from "next/image"

// export default function Logo() {
//   return (
//     <Link href="/" className="flex items-center space-x-3">
//       {/* Logo Image */}
//       <Image
//         src="/abs_logo-removebg-preview.png" // ✅ Move this image to your /public folder
//         alt="ABS Logo"
//         width={200}   // Adjusted for your tall image
//         height={200}
//       />

//       {/* Text Next to Logo */}
//       {/* <div className="text-amber-300 font-serif">
//         <span className="text-2xl md:text-3xl font-bold">ABS</span>
//         <div className="text-sm md:text-base tracking-wider">SCAFFOLDING</div>
//         <div className="text-xs text-amber-200 italic">SINCE 1990 EXCELLENCE</div>
//       </div> */}
//     </Link>
//   )
// }


// import Link from "next/link"
// import Image from "next/image"

// export default function Logo() {
//   return (
//     <Link href="/" className="flex items-center space-x-3 h-20"> {/* Increased header height */}
//       <div className="relative w-[100px] h-[100px]"> {/* ✅ Custom size */}
//         <Image
//           // src="/abs_logo2.png"
//           src="/abs_logo2-removebg-preview.png"
//           alt="ABS Logo"
//           fill
//           className="object-contain"
//         />
//       </div>
//     </Link>
//   )
// }


import Link from "next/link"
import Image from "next/image"

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-3 h-20">
      <div className="relative w-[80px] h-[80px] bg-white rounded-full p-2 shadow-md"> {/* 🎯 Background color here */}
        <Image
          src="/abs_logo2-removebg-preview.webp"
          alt="ABS Logo"
          fill
          className="object-contain"
        />
      </div>
    </Link>
  )
}


