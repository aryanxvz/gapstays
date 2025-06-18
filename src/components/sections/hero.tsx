"use client"
import { ChevronDown } from "lucide-react";
import { LampContainer } from "../lamp"
import { motion } from "framer-motion";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-neutral-900 flex items-center justify-center relative">
      <LampContainer className="pt-52 2xl:pt-8 px-4 sm:px-6">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className="mb-4 bg-gradient-to-br from-slate-100 to-slate-300 bg-clip-text text-center text-5xl tracking-tight text-transparent font-extrabold md:text-7xl">
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
            className="text-2xl md:text-4xl text-gray-200 font-bold">
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
            className="text-gray-300 text-xl md:text-2xl font-normal px-4">
            Your perfect stay awaits in the heart of the city
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.6,
            duration: 0.8,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <motion.div 
            onClick={() => scrollToSection('booking')}
            className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 hover:scale-105 duration-300 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer">
            <span>Book Your Stay</span>
          </motion.div>
          <motion.div 
            onClick={() => scrollToSection('gallery')}
            className="w-full sm:w-auto bg-transparent border-2 hover:scale-105 duration-300 border-white hover:border-orange-500 text-white hover:text-orange-500 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all cursor-pointer text-center">
            Explore Gallery
          </motion.div>
        </motion.div>
      </LampContainer>
      
      <motion.div 
        className="absolute bottom-8 lg:bottom-4 left-1/2 transform -translate-x-1/2 text-white cursor-pointer z-10"
        onClick={() => scrollToSection('about')}
        animate={{ 
          y: [0, -10, 0]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop"
        }}
        whileHover={{ scale: 1.2 }}>
        <ChevronDown size={28} />
      </motion.div>
    </section>
  )
}