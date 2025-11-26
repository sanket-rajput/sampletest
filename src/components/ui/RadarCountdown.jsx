import { useEffect, useState } from "react";

const COUNTDOWN_TO = "2026-03-20T23:59:00+05:30";

const RadarCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const end = new Date(COUNTDOWN_TO);
      const diff = end - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-60 h-60 rounded-xl border border-cyan-300/40 bg-black/40 backdrop-blur-md flex items-center justify-center shadow-[0_0_25px_rgba(0,255,255,0.20)]">

      {/* Corner brackets */}
      <span className="absolute w-6 h-6 border-l-2 border-t-2 border-cyan-300/70 top-0 left-0" />
      <span className="absolute w-6 h-6 border-r-2 border-t-2 border-cyan-300/70 top-0 right-0" />
      <span className="absolute w-6 h-6 border-l-2 border-b-2 border-cyan-300/70 bottom-0 left-0" />
      <span className="absolute w-6 h-6 border-r-2 border-b-2 border-cyan-300/70 bottom-0 right-0" />

      {/* Radar rings */}
      <div className="absolute inset-0 rounded-full border border-cyan-300/55" />
      <div className="absolute inset-[18%] rounded-full border border-cyan-300/35" />
      <div className="absolute inset-[36%] rounded-full border border-cyan-300/25" />

      {/* Crosshair */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-1/2 h-[1px] bg-cyan-300/40" />
        <div className="absolute inset-y-0 left-1/2 w-[1px] bg-cyan-300/40" />
      </div>

      {/* Sweep */}
      <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_270deg,rgba(20,241,255,0.9),transparent_55%)] blur-sm mix-blend-screen animate-radarSpin" />

      {/* Time text + labels */}
      <div className="relative text-center z-10 space-y-1">
        <p className="text-[11px] tracking-[0.18em] text-cyan-100/80 uppercase">
          Countdown
        </p>

        <div className="flex justify-center gap-1 text-[22px] font-extrabold leading-none text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]">
          <span>{timeLeft.days}</span>:
          <span>{timeLeft.hours}</span>:
          <span>{timeLeft.minutes}</span>:
          <span>{timeLeft.seconds}</span>
        </div>

        {/* LABELS */}
        <div className="flex justify-center gap-5 text-[9px] tracking-[0.18em] text-white-200/70 uppercase mt-2">
          <span>Days</span>
          <span>Hrs</span>
          <span>Min</span>
          <span>Sec</span>
        </div>
      </div>

      <style>{`
        @keyframes radarSpin {
          0% { transform: rotate(0deg); opacity: 0.7; }
          100% { transform: rotate(360deg); opacity: 0.7; }
        }
        .animate-radarSpin {
          animation: radarSpin 3.6s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default RadarCountdown;
