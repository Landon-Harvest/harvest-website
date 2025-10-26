"use client";
import { motion } from 'motion/react';
import ServiceCard from '@/components/ServiceCard';
import { ShoppingCart, DollarSign, Cloud, Heart, Building2, Factory, GraduationCap, Briefcase } from 'lucide-react';

export default function IndustriesPage() {
  const industries = [
    {
      title: "Retail & E-commerce",
      description: "Demand forecasting, personalization, and inventory analytics to optimize your supply chain and customer experience.",
      icon: <ShoppingCart className="w-6 h-6 text-cyan-400" />,
      delay: 0.2
    },
    {
      title: "FinTech",
      description: "Risk analytics, fraud detection, and regulatory reporting to protect assets and ensure compliance.",
      icon: <DollarSign className="w-6 h-6 text-teal-400" />,
      delay: 0.3
    },
    {
      title: "SaaS / B2B",
      description: "Product analytics, funnels, and monetization metrics to drive growth and reduce churn.",
      icon: <Cloud className="w-6 h-6 text-cyan-400" />,
      delay: 0.4
    },
    {
      title: "Healthcare",
      description: "Operational analytics and patient flow optimization to improve outcomes and efficiency.",
      icon: <Heart className="w-6 h-6 text-teal-400" />,
      delay: 0.5
    },
    {
      title: "Real Estate",
      description: "Market analysis, property valuation, and portfolio optimization for strategic investment decisions.",
      icon: <Building2 className="w-6 h-6 text-cyan-400" />,
      delay: 0.6
    },
    {
      title: "Manufacturing",
      description: "Production optimization, quality control analytics, and supply chain visibility for operational excellence.",
      icon: <Factory className="w-6 h-6 text-teal-400" />,
      delay: 0.7
    },
    {
      title: "Education",
      description: "Student performance analytics, enrollment forecasting, and resource allocation optimization.",
      icon: <GraduationCap className="w-6 h-6 text-cyan-400" />,
      delay: 0.8
    },
    {
      title: "Professional Services",
      description: "Project analytics, resource utilization, and client insights to maximize profitability and delivery.",
      icon: <Briefcase className="w-6 h-6 text-teal-400" />,
      delay: 0.9
    },
  ];

  return (
    <div className="w-screen relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] -mt-10 md:-mt-16 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900">
      {/* Main Content */}
      <div className="relative overflow-hidden min-h-screen">
        {/* Background atmospheric effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Content Container */}
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          {/* Header Section */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-teal-400 mb-6 rounded-full" />
            
            <h1 className="text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-teal-300 mb-4" style={{ fontFamily: "var(--font-sora)" }}>
              Industries & Use Cases
            </h1>
            
            <p className="text-cyan-100/70 text-lg max-w-3xl">
              Problem → Approach → Outcomes. We tailor solutions per industry while keeping core analytics craftsmanship consistent across verticals.
            </p>
          </motion.div>

          {/* Industries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industries.map((industry) => (
              <ServiceCard
                key={industry.title}
                title={industry.title}
                description={industry.description}
                icon={industry.icon}
                delay={industry.delay}
                showLearnMore={false}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


