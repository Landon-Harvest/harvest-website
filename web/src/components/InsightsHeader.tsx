import { motion } from 'motion/react';
import { TrendingUp, BarChart3, PieChart, LineChart } from 'lucide-react';

export default function InsightsHeader() {
  const floatingIcons = [
    { Icon: TrendingUp, delay: 0, x: '10%', y: '20%', duration: 4 },
    { Icon: BarChart3, delay: 0.5, x: '85%', y: '30%', duration: 5 },
    { Icon: PieChart, delay: 1, x: '20%', y: '70%', duration: 4.5 },
    { Icon: LineChart, delay: 1.5, x: '90%', y: '65%', duration: 5.5 },
  ];

  return (
    <div className="relative w-full bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 overflow-hidden py-16 px-6 md:py-20 mb-12">
      {/* Animated background gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Floating data visualization icons */}
      {floatingIcons.map(({ Icon, delay, x, y, duration }, index) => (
        <motion.div
          key={index}
          className="absolute opacity-10"
          style={{ left: x, top: y }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Icon className="w-12 h-12 text-cyan-400" />
        </motion.div>
      ))}

      {/* Grid overlay for tech aesthetic */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]" />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Animated accent line above title */}
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-400 mx-auto mb-6 rounded-full"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 96, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Main Title with Glow Effect */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-200 to-teal-300 mb-6"
          style={{ fontFamily: "var(--font-sora)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Real-Time Business Insights
        </motion.h1>

        {/* Subtitle/Description */}
        <motion.p
          className="text-cyan-100/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Explore interactive analytics powered by live data. Track your key performance indicators and business metrics to uncover trends, track KPIs, and make data-driven decisions with confidence.
        </motion.p>

        {/* Animated decorative data particles */}
        <div className="mt-8 flex justify-center gap-3">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-2 bg-gradient-to-br from-cyan-400 to-teal-400 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                delay: index * 0.3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Bottom accent glow */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        />
      </div>

      {/* Additional atmospheric elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Scanning line effect */}
        <motion.div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
          animate={{
            top: ['0%', '100%']
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </div>
  );
}

