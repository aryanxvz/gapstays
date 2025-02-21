"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-neutral-900 w-full rounded-md z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.5, width: "8rem" }}
          whileInView={{ opacity: 1, width: "15rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-full sm:w-64 md:w-96 lg:w-[30rem] bg-gradient-conic from-orange-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
          viewport={{ once: true }}
        >
          <div className="absolute w-[100%] left-0 bg-neutral-900 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-[100%] left-0 bg-neutral-900 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "8rem" }}
          whileInView={{ opacity: 1, width: "15rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-full sm:w-64 md:w-96 lg:w-[30rem] bg-gradient-conic from-transparent via-transparent to-orange-500 text-white [--conic-position:from_290deg_at_center_top]"
          viewport={{ once: true }}
        >
          <div className="absolute w-40 h-[100%] right-0 bg-neutral-900 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-neutral-900 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-neutral-900 blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-64 sm:w-80 md:w-96 lg:w-[28rem] -translate-y-1/2 rounded-full bg-orange-600 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "6rem" }}
          whileInView={{ width: "8rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-32 sm:w-40 md:w-56 lg:w-64 -translate-y-[6rem] rounded-full bg-orange-400 blur-2xl"
          viewport={{ once: true }}
        ></motion.div>
        <motion.div
          initial={{ width: "10rem" }}
          whileInView={{ width: "15rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-64 sm:w-80 md:w-96 lg:w-[30rem] -translate-y-[7rem] bg-orange-400"
          viewport={{ once: true }}
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-neutral-900"></div>
      </div>

      <div className="relative top-4 lg:top-32 z-50 flex -translate-y-60 sm:-translate-y-72 md:-translate-y-80 flex-col items-center px-4 sm:px-5">
        {children}
      </div>
    </div>
  );
};