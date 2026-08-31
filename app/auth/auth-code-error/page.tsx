import Link from "next/link";

export default function AuthCodeErrorPage() {
  return (
    <div className="min-h-[100dvh] bg-brand-bg flex items-center justify-center px-4">
      <div className="w-full max-w-md p-8 rounded-xl bg-brand-bg-sec/30 border border-border-color glass-panel text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 flex items-center justify-center mx-auto text-2xl">
          ✕
        </div>
        <h1 className="text-xl font-display font-bold uppercase text-text-primary">
          Auth Code Error
        </h1>
        <p className="text-sm text-secondary-text">
          The confirmation link is invalid or has expired. Please try signing up again.
        </p>
        <Link
          href="/auth/signup"
          className="inline-block mt-4 px-6 py-2.5 bg-[#1E90FF]/20 backdrop-blur-xl border border-[#1E90FF]/40 text-white text-xs font-mono font-bold uppercase tracking-widest rounded-lg hover:bg-[#1E90FF]/30 transition-all"
        >
          Sign Up Again
        </Link>
      </div>
    </div>
  );
}
