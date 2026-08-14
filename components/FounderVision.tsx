"use client";

import { useState, useEffect } from "react";
import { Mic, Volume2 } from "lucide-react";

const SUBTITLES = [
  `🚀 "My goal was clear: to build the bridge I never had as a student..."`,
  `💡 "Education shouldn't live standardly in outdated slides and passive exams."`,
  `🛠️ "It must live in direct, hard-hitting deployment, actual client structures, and sleepless grand hackathons!"`,
  `✨ "Tech Yuva is built by students, for students. Together, we scale ideas into Silicon Valley realities."`,
];

export default function FounderVision() {
  const [isVisualizerPlaying, setIsVisualizerPlaying] = useState(false);
  const [subtitleIdx, setSubtitleIdx] = useState(0);

  useEffect(() => {
    if (!isVisualizerPlaying) return;

    const interval = setInterval(() => {
      setSubtitleIdx((prev) => (prev + 1) % SUBTITLES.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isVisualizerPlaying]);

  return (
    <div className="py-12 relative px-4" id="founders-vision-section">
      <div className="max-w-5xl mx-auto rounded-xl border border-white/5 bg-brand-bg-sec/30 p-8 lg:p-12 glass-panel relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-saffron/10 filter blur-[90px] -z-10" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-primary-blue/10 filter blur-[90px] -z-10" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="md:col-span-5 flex justify-center">
            <div
              className="relative w-72 h-72 rounded-xl overflow-hidden group border border-white/10 shadow-2xl cursor-pointer bg-brand-bg select-none"
              onMouseEnter={() => setIsVisualizerPlaying(true)}
              onMouseLeave={() => {
                setIsVisualizerPlaying(false);
                setSubtitleIdx(0);
              }}
              onTouchStart={() => setIsVisualizerPlaying(!isVisualizerPlaying)}
            >
              <div
                style={{ backgroundImage: "url(/founder-photo.jpg)" }}
                className={`w-full h-full bg-cover bg-top bg-no-repeat grayscale brightness-90 transition-all duration-700 ${
                  isVisualizerPlaying
                    ? "scale-105 opacity-20 blur-sm brightness-50"
                    : "group-hover:grayscale-0 group-hover:brightness-100"
                }`}
              />

              {isVisualizerPlaying && (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-black/40 animate-fade-in">
                  <div className="flex items-end gap-1.5 h-16 mb-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((bar) => {
                      const randDurations = [
                        "1s",
                        "1.4s",
                        "0.8s",
                        "1.2s",
                        "1.6s",
                        "0.9s",
                        "1.1s",
                        "1.5s",
                        "0.7s",
                        "1.3s",
                      ];
                      return (
                        <span
                          key={bar}
                          style={{ animationDuration: randDurations[bar - 1] }}
                          className="w-1.5 h-12 bg-gradient-to-t from-[#1E90FF] via-[#00BFFF] to-[#FF7A00] rounded bg-opacity-85 animate-pulse"
                        />
                      );
                    })}
                  </div>

                  <div className="flex items-center gap-2 px-3 py-1 bg-[#FF7A00]/20 border border-[#FF7A00]/40 rounded-full animate-pulse">
                    <Mic className="w-3.5 h-3.5 text-[#FF7A00]" />
                    <span className="text-[10px] font-mono text-[#FF7A00] font-bold uppercase tracking-widest">
                      Vision Stream Live
                    </span>
                  </div>
                </div>
              )}

              {!isVisualizerPlaying && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent flex flex-col justify-end p-6 transition-all duration-300">
                  <span className="text-[9px] font-mono text-[#00BFFF] uppercase tracking-widest flex items-center gap-1">
                    <Volume2 className="w-3 h-3 text-[#00BFFF] animate-pulse" /> HOVER CARD TO READ VISION
                  </span>
                  <h4 className="text-sm font-display font-bold uppercase text-white mt-1">
                    Lakshay Soni
                  </h4>
                  <p className="text-[10px] font-mono text-gray-400">Visionary, Founder Tech Yuva</p>
                </div>
              )}
            </div>
          </div>

          <div className="md:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-[#FF7A00] uppercase tracking-widest font-semibold block">
                FOUNDER&apos;S VISION
              </span>
              <h3 className="text-2xl md:text-3xl font-display uppercase tracking-tight text-white line-clamp-2">
                FROM HELLO-WORLD TO SYSTEM ARCHITECTS
              </h3>
            </div>

            <div className="min-h-[140px] flex flex-col justify-center">
              {isVisualizerPlaying ? (
                <div className="space-y-4 animate-fade-in">
                  <p className="text-xl md:text-2xl font-sans text-white font-medium italic leading-relaxed">
                    {SUBTITLES[subtitleIdx]}
                  </p>
                  <p className="text-xs font-mono text-[#9CA3AF] flex items-center gap-1.5">
                    <span>Active Transcript Node</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00BFFF] animate-pulse" />
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-base text-secondary-text leading-relaxed font-sans font-light italic">
                    &quot;I observed hundreds of brilliant young developers stuck in tutorial hell,
                    spending hours building identical generic todo apps with zero actual production
                    launch exposure. Tech Yuva was created to smash those constraints. We don&apos;t
                    teach. We deploy alongside you.&quot;
                  </p>
                  <blockquote className="border-l-2 border-neon-blue pl-4">
                    <p className="text-sm text-white font-mono font-medium">Lakshay Soni</p>
                    <p className="text-xs text-[#9CA3AF] font-sans">Visionary, Founder Tech Yuva</p>
                  </blockquote>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-brand-bg flex items-center justify-center border border-white/5 shrink-0 text-neon-blue">
                ✦
              </div>
              <p className="text-[11px] text-[#9CA3AF] font-mono max-w-md">
                Hover the founder&apos;s grid card with your pointer on Desktop or tap on Tablet/Mobile to
                activate the live vision visualizer stream.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}