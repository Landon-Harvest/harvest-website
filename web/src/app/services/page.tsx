"use client";
import { motion } from 'motion/react';
import ServiceCard from '@/components/ServiceCard';
import { Layers, Cpu, Brain, Sparkles, Map, Zap, Bell } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      title: 'BI Modernization',
      description: 'From legacy dashboards to a governed, scalable analytics platform.',
      icon: <Layers className="w-6 h-6 text-cyan-400" />,
      delay: 0.2
    },
    {
      title: 'Analytics Engineering',
      description: 'Model reliable metrics and ship performant datasets for the business.',
      icon: <Cpu className="w-6 h-6 text-teal-400" />,
      delay: 0.3
    },
    {
      title: 'Data Science & ML',
      description: 'Predictive models and experimentation aligned to business outcomes.',
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      delay: 0.4
    },
    {
      title: 'GenAI & LLMs',
      description: 'Pragmatic GenAI integrations where they drive measurable ROI.',
      icon: <Sparkles className="w-6 h-6 text-teal-400" />,
      delay: 0.5
    },
    {
      title: 'Data Strategy',
      description: 'Roadmaps, governance, and operating models that scale with your needs.',
      icon: <Map className="w-6 h-6 text-cyan-400" />,
      delay: 0.6
    },
    {
      title: 'Real-Time Alerts',
      description: 'Intelligent messaging and alerting systems triggered by data events and thresholds.',
      icon: <Bell className="w-6 h-6 text-teal-400" />,
      delay: 0.7
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
              Services
            </h1>
            
            <p className="text-cyan-100/70 text-lg max-w-3xl">
              Strategy to implementation: architecture, pipelines, dashboards, and models. We focus on fast value and maintainability.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                delay={service.delay}
              />
            ))}
          </div>

          {/* Delivery Model - Wide Card */}
          <ServiceCard
            title="Delivery Model"
            description="Engagements run in 2-6 week increments with weekly demos, written status, and measurable outcomes. We partner closely with your team for knowledge transfer."
            icon={<Zap className="w-6 h-6 text-teal-400" />}
            delay={0.8}
            wide
          />
        </div>
      </div>
    </div>
  );
}


