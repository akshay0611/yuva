"use client";

import { use, useEffect } from "react";
import { useRouter } from "next/navigation";
import EventDetailPage from "@/components/EventDetailPage";
import { UPCOMING_EVENTS, PAST_EVENTS } from "@/lib/data";

export default function EventDetailRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const router = useRouter();

  const allEvents = [...UPCOMING_EVENTS, ...PAST_EVENTS];
  const event = allEvents.find(
    (e) => e.metadata?.slug === slug || e.id === slug
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!event) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center px-4">
        <div className="text-center space-y-4">
          <p className="text-xs font-mono text-[#00BFFF] uppercase tracking-widest">
            Event not found
          </p>
          <h1 className="text-2xl font-display uppercase font-bold">
            Expedition unavailable
          </h1>
          <button
            type="button"
            onClick={() => router.push("/")}
            className="px-5 py-2.5 bg-[#1E90FF]/20 border border-[#1E90FF]/40 text-white text-xs font-mono uppercase font-bold tracking-widest rounded-lg hover:bg-[#1E90FF]/30 transition-all cursor-pointer"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <EventDetailPage
      event={event}
      onBack={() => {
        router.push("/#upcoming-events-section");
      }}
    />
  );
}
