"use client";

import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export function SectionArrow() {
  return (
    <div className="w-full flex justify-center pb-6 md:hidden relative z-20">
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="flex flex-col items-center gap-1 text-primary/70"
      >
        <ArrowDown className="w-5 h-5" />
      </motion.div>
    </div>
  );
}
