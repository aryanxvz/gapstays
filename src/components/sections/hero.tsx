"use client"
import { ChevronDown } from "lucide-react";
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
          viewport={{ once: true }}
          className="mt-28 mb-4 bg-gradient-to-br from-slate-100 to-slate-300 bg-clip-text text-center text-4xl tracking-tight text-transparent font-extrabold md:text-7xl">
            Welcome to <span className="text-orange-500">GAPSTAYS</span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.8,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className="text-center space-y-3">
          <motion.div 
            initial={{ y: 30 }}
            whileInView={{ y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="text-4xl text-gray-200 font-bold">
            Experience Comfort Without Compromise
          </motion.div>
          
          <motion.div 
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="text-gray-300 text-2xl font-normal px-4">
            Your perfect stay awaits in the heart of the city
          </motion.div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a href="" className="bg-[#FF6B35] hover:bg-[#ff8557] text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2"><span>Book Your Stay</span></a>
            <a href="" className="bg-transparent border-2 border-white text-white hover:border-[#FF6B35] hover:text-[#FF6B35] font-bold py-4 px-8 rounded-full transition-all duration-300">Explore Gallery</a>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hover:cursor-pointer"><ChevronDown/></div>
      </LampContainer>
    </section>
  )
}