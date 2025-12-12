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
        "w-full bg-white dark:bg-black text-gray-900 dark:text-gray-50",
        !noBorderBottom && "border-b border-gray-900 dark:border-gray-100"
      )}
    >
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-10%" }}
        className={cn(
          "container mx-auto border-x border-gray-900 dark:border-gray-100", 
          className
        )}
      >
        {children}
      </motion.div>
    </section>
  );
}
