"use client"
import { LampContainer } from "../lamp"
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen mt-12 bg-neutral-900 flex items-center justify-center">
      <LampContainer className="">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-28 bg-gradient-to-br from-slate-100 to-slate-300 bg-clip-text text-center text-4xl tracking-tight text-transparent font-bold md:text-7xl">
            Welcome to <span className="text-orange-500">GAPSTAYS</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }} className=" text-center">
          <div className="text-4xl text-gray-200 font-bold mt-3">Experience Comfort Without Compromise</div>
          <div className="text-gray-300 text-2xl font-medium mt-1">Your perfect stay awaits in the heart of the city</div>
        </motion.div>
    </LampContainer>
    </section>
  )
}