import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";

import scrollToTop from "../utils/scrollToTop";
import { IncCanvas } from "./canvas";
import RadarCountdown from "./ui/RadarCountdown";
import { impetus_b, concepts_b, pradnya_b, pict, logo } from "../assets";
import { navItems } from "../constants";

const Hero = () => {
  const navigate = useNavigate();

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-[#020712] text-white overflow-hidden">

      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(248,113,22,0.18),transparent_65%)]" />

      {/* Soft grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(148, 163, 184, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(148, 163, 184, 0.10) 1px, transparent 1px)
          `,
          backgroundSize: "46px 46px",
        }}
      />

      {/* Main container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-20 lg:py-24 flex flex-col gap-10 lg:flex-row lg:gap-8">

        {/* LEFT NAV PANEL */}
<motion.aside
  initial={{ opacity: 0, x: -35 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  className="w-full lg:w-[320px] max-w-[330px] mx-auto lg:mx-0"
>
  <div className="relative bg-[#051017]/70 backdrop-blur-xl
      border-y border-cyan-400/35
      shadow-[0_0_25px_rgba(0,255,255,0.25)]
      rounded-xl pt-3 pb-4"
  >
    {/* GLOW CORNERS */}
    <div className="absolute -top-[2px] left-0 w-[45px] h-[3px] bg-cyan-300 drop-shadow-[0_0_10px_cyan]"></div>
    <div className="absolute -top-[2px] right-0 w-[45px] h-[3px] bg-cyan-300 drop-shadow-[0_0_10px_cyan]"></div>

    {/* HEADER */}
    <div className="px-5 mb-4">
      <p className="text-[11px] tracking-[0.32em] text-cyan-200/90 uppercase font-semibold">
        CODE OPS • INC 2K26
      </p>
      <p className="text-[10px] text-cyan-100/45 tracking-wider mt-1">
        Mission: Deploy innovation. Secure the future.
      </p>
    </div>

    {/* NAV ITEMS */}
    <div className="flex flex-col gap-2 px-4">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => navigate(item.isHome ? `/#${item.id}` : `/${item.id}`)}
          className="
            group relative flex items-center justify-between
            px-5 py-3
            border border-cyan-300/10 bg-[#06131d]/50
            hover:bg-cyan-400/10 hover:border-cyan-300/50
            transition-all duration-300
          "
        >

          {/* ORANGE ACTIVE BAR - replace `item.active` with your condition */}
          {item.active && (
            <motion.span
              layoutId="active-nav"
              className="absolute left-0 top-0 h-full w-[3px] bg-orange-400 shadow-[0_0_12px_orange]"
            />
          )}

          <p
            className={`text-[12px] uppercase tracking-[0.24em] font-medium ${
              item.active ? "text-orange-300" : "text-cyan-100"
            }`}
          >
            {item.title}
          </p>

          <motion.div
            initial={{ x: 0 }}
            animate={item.active ? { x: [0, 4, 0] } : { x: 0 }}
            transition={{
              duration: 1,
              repeat: item.active ? Infinity : 0,
              ease: "easeInOut",
            }}
            className={`
              w-[22px] h-[22px] flex items-center justify-center
              border ${item.active ? "border-orange-400" : "border-cyan-300/50"}
              text-[11px] ${item.active ? "text-orange-300" : "text-cyan-200"}
            `}
          >
            ▶
          </motion.div>

        </button>
      ))}
    </div>

    {/* BOTTOM GLOW CORNERS */}
    <div className="absolute -bottom-[2px] left-0 w-[45px] h-[3px] bg-cyan-300 drop-shadow-[0_0_10px_cyan]"></div>
    <div className="absolute -bottom-[2px] right-0 w-[45px] h-[3px] bg-cyan-300 drop-shadow-[0_0_10px_cyan]"></div>
  </div>
</motion.aside>




        {/* CENTER HOLOGRAM PANEL */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex flex-col items-center gap-6"
        >

          {/* Header Section */}
          <div className="flex flex-col items-center justify-center gap-2 mb-6">
            <p className="text-[11px] tracking-[0.28em] text-cyan-100/80 uppercase mt-1">
              SCTR'S PUNE INSTITUTE OF COMPUTER TECHNOLOGY
            </p>

            <div className="flex items-center justify-center gap-4">
              <a href="https://pict.edu" target="_blank" rel="noopener noreferrer">
                <img src={pict} alt="PICT" className="w-12 h-12 object-contain" />
              </a>

              <span className="h-10 w-[2px] bg-white/60 rounded-full"></span>

              <Link to="/" className="flex items-center gap-3 hover:opacity-90">
                <img
                  src={logo}
                  alt="INC Logo"
                  className="w-12 h-12 drop-shadow-[0_0_14px_rgba(56,189,248,0.6)]"
                />
                <h1 className="font-bold tracking-[0.22em] text-[26px] sm:text-[32px] uppercase">
                  PICT INC 2026
                </h1>
              </Link>
            </div>
          </div>

          {/* Hologram Preview */}
          <div className="relative w-full max-w-xl aspect-[16/10] rounded-2xl border border-slate-500/60 bg-black/55 overflow-hidden shadow-[0_0_45px_rgba(15,23,42,0.9)]">

            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-sky-400/40 via-slate-200/60 to-orange-400/40" />
            <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen"
              style={{
                backgroundImage: "linear-gradient(to bottom, rgba(148,163,184,0.16) 1px, transparent 1px)",
                backgroundSize: "100% 9px",
              }}
            />

            <div className="absolute left-4 top-3 text-[10px] tracking-[0.2em] uppercase text-slate-200/80">
              LIVE HOLOGRAM • INC CORE
            </div>

            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute w-[62%] h-[62%] rounded-full bg-[radial-gradient(circle,_rgba(56,189,248,0.5),transparent_60%)] blur-3xl opacity-80" />
              <div className="relative w-[56%] h-[56%]">
                <IncCanvas />
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 px-4 py-2 border-t border-slate-500/50 bg-black/70 flex items-center justify-between text-[10px]">
              <p className="uppercase tracking-[0.22em] text-slate-200/80">
                STATUS: ONLINE • LINKED TO COMMAND
              </p>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/90 animate-pulse" />
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-300/70" />
              </div>
            </div>
          </div>

          {/* CTA + Logos */}
          <div className="flex flex-col items-center gap-5 mt-1">
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate("/register")}
                className="px-8 py-2.5 rounded-lg border border-sky-400/70 bg-sky-500/10 backdrop-blur-xl shadow-[0_0_18px_rgba(56,189,248,0.45)]
                  text-[11px] sm:text-xs tracking-[0.28em] uppercase hover:bg-sky-500/20 transition-colors"
              >
                Initialize Deployment
              </button>

              <button
                onClick={() => navigate("/events/impetus")}
                className="px-8 py-2.5 rounded-lg border border-slate-400/70 bg-black/60 backdrop-blur-xl
                  text-[11px] sm:text-xs tracking-[0.28em] uppercase hover:border-orange-400/80 hover:bg-orange-500/10 transition-colors"
              >
                View Mission Tracks
              </button>
            </div>

            {/* Tracks Icons */}
            <div className="flex items-center gap-6 opacity-90">
              <img src={impetus_b} alt="Impetus" className="w-8 sm:w-10 cursor-pointer hover:scale-110"
                onClick={() => navigate("/events/impetus")} />

              <img src={pradnya_b} alt="Pradnya" className="w-8 sm:w-10 cursor-pointer hover:scale-110"
                onClick={() => navigate("/events/pradnya")} />

              <img src={concepts_b} alt="Concepts" className="w-7 sm:w-9 cursor-pointer hover:scale-110"
                onClick={() => navigate("/events/concepts")} />
            </div>
          </div>
        </motion.div>

        {/* RIGHT PANEL — 3D Virtual assistant */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-[330px] flex flex-col items-center"
        >
          <p className="text-[11px] tracking-[0.24em] text-slate-100/85 uppercase mb-2 text-center">
            VIRTUAL ASSISTANT
          </p>

          <div className="relative w-[330px] h-[520px] flex items-center justify-center">
            <model-viewer
              src="/videos/newmodel2.glb"
              auto-rotate
              camera-controls
              disable-pan
              disable-tap
              camera-orbit="0deg 80deg 100%"
              min-camera-orbit="0deg 65deg 100%"
              max-camera-orbit="0deg 95deg 100%"
              field-of-view="35deg"
              exposure="1"
              shadow-intensity="1"
              style={{ width: "90%", height: "90%" }}
            />

            {/* hologram floor */}
            <div className="absolute bottom-2 w-[220px] h-[60px] rounded-full
            bg-[radial-gradient(circle,_rgba(56,189,248,0.40),transparent_70%)] blur-xl" />
          </div>

          <p className="text-[11px] text-slate-300/80 mt-3 text-center px-3 leading-relaxed">
            Need help? <span className="text-sky-400 font-semibold">Ask our Virtual Assistant</span>
            for schedule, tracks & registrations.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
