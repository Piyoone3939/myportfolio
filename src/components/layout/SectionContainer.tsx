"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  noBorderBottom?: boolean;
}

export default function SectionContainer({ children, className, id, noBorderBottom = false }: SectionContainerProps) {
  return (
    <section 
      id={id} 
      className={cn(
        "w-full max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-24",
        !noBorderBottom && "border-b border-gray-200 dark:border-gray-800",
        className
      )}
    >
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-10%" }}
        className={cn(
          className
        )}
      >
        {children}
      </motion.div>
    </section>
  );
}
