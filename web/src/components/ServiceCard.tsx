"use client";
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  delay?: number;
  wide?: boolean;
  icon?: ReactNode;
  showLearnMore?: boolean;
}

export default function ServiceCard({ title, description, delay = 0, wide = false, icon, showLearnMore = true }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={`group relative ${wide ? 'md:col-span-2' : ''}`}
    >
      {/* Glow effect on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition duration-500" />
      
      {/* Card */}
      <div className="relative h-full bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-6 transition-all duration-300 group-hover:border-cyan-400/50 group-hover:shadow-xl group-hover:shadow-cyan-500/20 group-hover:-translate-y-1">
        
        {/* Animated corner accent */}
        <motion.div
          className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-bl-3xl rounded-tr-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: delay + 0.2 }}
        />

        {/* Icon if provided */}
        {icon && (
          <div className="mb-4 w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-lg flex items-center justify-center border border-cyan-500/30">
            {icon}
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl font-semibold text-cyan-100 mb-3 relative z-10" style={{ fontFamily: "var(--font-sora)" }}>
          {title}
        </h3>

        {/* Description */}
        <p className={`text-cyan-100/60 relative z-10 leading-relaxed ${showLearnMore ? 'mb-4' : ''}`}>
          {description}
        </p>

        {/* Learn more link */}
        {showLearnMore && (
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors relative z-10 text-sm"
            whileHover={{ x: 5 }}
          >
            <span className="border-b border-cyan-400/50 group-hover:border-cyan-300/50 transition-colors">
              Learn more
            </span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.a>
        )}

        {/* Animated data particles */}
        <div className="absolute bottom-4 right-4 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1 h-1 bg-gradient-to-br from-cyan-400 to-teal-400 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Scanning line effect on hover */}
        <motion.div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100"
          animate={{
            top: ['0%', '100%']
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </motion.div>
  );
}

