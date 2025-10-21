"use client";
import { motion } from "motion/react";
import { LineChart, Line, BarChart, Bar, AreaChart, Area, ResponsiveContainer } from "recharts";
import { TrendingUp, Activity, Database, Zap } from "lucide-react";

const lineData = [{ value: 30 }, { value: 45 }, { value: 35 }, { value: 60 }, { value: 50 }, { value: 70 }, { value: 65 }];
const barData = [{ value: 40 }, { value: 65 }, { value: 45 }, { value: 80 }, { value: 60 }, { value: 90 }];
const areaData = [{ value: 20 }, { value: 40 }, { value: 30 }, { value: 50 }, { value: 45 }, { value: 65 }, { value: 60 }, { value: 75 }];

function MetricCard({ title, value, change, delay }: { title: string; value: string; change: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className="bg-gradient-to-br from-cyan-500/10 to-teal-500/5 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-4"
    >
      <div className="text-cyan-400/70 text-xs mb-2">{title}</div>
      <div className="text-white text-2xl mb-1">{value}</div>
      <div className="text-emerald-400 text-xs">{change}</div>
    </motion.div>
  );
}

function ChartPanel({ delay, rotation, position, children }: { delay: number; rotation: string; position: string; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotateX: 45, rotateZ: -10 }}
      animate={{ opacity: 1, scale: 1, rotateX: 45, rotateZ: -10, y: [0, -10, 0] }}
      transition={{ duration: 1.2, delay, y: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
      className={`absolute ${position} ${rotation}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );
}

export function DataVisualizationBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      {/* soft color orbs */}
      <div className="absolute top-1/5 left-[55%] w-[28rem] h-[28rem] bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/6 right-[10%] w-[26rem] h-[26rem] bg-teal-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      {/* 3D panels (nudged toward center-right on desktop) */}
      <div className="absolute inset-0 flex items-center justify-center md:justify-end pr-0 md:pr-[10%]" style={{ perspective: "1000px" }}>
        <ChartPanel delay={0.2} rotation="" position="z-10">
          <div className="w-48 h-48 bg-gradient-to-br from-cyan-500/20 to-teal-600/20 backdrop-blur-md border-2 border-cyan-400/40 rounded-2xl flex items-center justify-center shadow-2xl shadow-cyan-500/50">
            <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-teal-400 rounded-full flex items-center justify-center">
              <Database className="w-12 h-12 text-slate-900" />
            </div>
          </div>
        </ChartPanel>

        <ChartPanel delay={0.4} rotation="-rotate-6" position="top-1/4 left-1/4 -translate-x-32 -translate-y-20">
          <div className="w-64 h-40 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-md border border-cyan-500/30 rounded-xl p-4 shadow-2xl shadow-cyan-500/30">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400/80 text-xs">REVENUE</span>
            </div>
            <ResponsiveContainer width="100%" height="70%">
              <LineChart data={lineData}>
                <Line type="monotone" dataKey="value" stroke="#22d3ee" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </ChartPanel>

        <ChartPanel delay={0.6} rotation="rotate-3" position="top-1/4 right-1/4 translate-x-32 -translate-y-16">
          <div className="w-56 h-36 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-md border border-cyan-500/30 rounded-xl p-4 shadow-2xl shadow-teal-500/30">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="w-4 h-4 text-teal-400" />
              <span className="text-teal-400/80 text-xs">ANALYTICS</span>
            </div>
            <ResponsiveContainer width="100%" height="65%">
              <BarChart data={barData}>
                <Bar dataKey="value" fill="#14b8a6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartPanel>

        <ChartPanel delay={0.8} rotation="-rotate-3" position="bottom-1/4 left-1/3 -translate-x-24 translate-y-12">
          <div className="w-72 h-44 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-md border border-cyan-500/30 rounded-xl p-4 shadow-2xl shadow-cyan-500/30">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400/80 text-xs">PERFORMANCE</span>
            </div>
            <ResponsiveContainer width="100%" height="70%">
              <AreaChart data={areaData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="value" stroke="#06b6d4" strokeWidth={2} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </ChartPanel>

        <ChartPanel delay={1.0} rotation="rotate-6" position="bottom-1/4 right-1/3 translate-x-20 translate-y-8">
          <div className="w-64 h-52 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-md border border-cyan-500/30 rounded-xl p-4 shadow-2xl shadow-teal-500/30">
            <div className="text-cyan-400/80 text-xs mb-3">KEY METRICS</div>
            <div className="space-y-2">
              <MetricCard title="USERS" value="12.5K" change="+23.4%" delay={1.2} />
              <MetricCard title="SESSIONS" value="48.2K" change="+15.8%" delay={1.3} />
            </div>
          </div>
        </ChartPanel>

        <ChartPanel delay={0.5} rotation="-rotate-12" position="left-1/4 top-1/2 -translate-x-12">
          <div className="w-32 h-32 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-md border border-cyan-500/30 rounded-xl p-3 shadow-2xl shadow-cyan-500/30 flex flex-col justify-center items-center">
            <div className="text-cyan-400/70 text-xs mb-1">DATA</div>
            <div className="flex gap-1">
              {[40, 60, 45, 70, 55].map((height, i) => (
                <motion.div key={i} className="w-3 bg-gradient-to-t from-cyan-500 to-teal-400 rounded-sm" initial={{ height: 0 }} animate={{ height: `${height}%` }} transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }} />
              ))}
            </div>
          </div>
        </ChartPanel>

        <ChartPanel delay={0.7} rotation="rotate-8" position="right-1/4 top-1/2 translate-x-16">
          <div className="w-40 h-28 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-md border border-teal-500/30 rounded-xl p-3 shadow-2xl shadow-teal-500/30">
            <div className="text-teal-400/70 text-xs mb-2">STATUS</div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <div className="text-white/80 text-xs">Active</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
                <div className="text-white/80 text-xs">Processing</div>
              </div>
            </div>
          </div>
        </ChartPanel>
      </div>

      {/* grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]" />
    </div>
  );
}


