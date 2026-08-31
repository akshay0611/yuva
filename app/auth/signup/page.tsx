"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/confirm`,
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    setSuccess(true);
    setLoading(false);
  };

  if (success) {
    return (
      <div className="min-h-[100dvh] bg-brand-bg flex items-center justify-center px-4">
        <div className="w-full max-w-md p-8 rounded-xl bg-brand-bg-sec/30 border border-border-color glass-panel text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-emerald-green/10 border border-emerald-green/30 text-emerald-green flex items-center justify-center mx-auto text-2xl">
            ✓
          </div>
          <h1 className="text-xl font-display font-bold uppercase text-text-primary">
            Check Your Email
          </h1>
          <p className="text-sm text-secondary-text">
            We sent a confirmation link to <span className="text-neon-blue font-mono">{email}</span>. Click the link to activate your account.
          </p>
          <Link
            href="/auth/signin"
            className="inline-block mt-4 px-6 py-2.5 bg-[#1E90FF]/20 backdrop-blur-xl border border-[#1E90FF]/40 text-white text-xs font-mono font-bold uppercase tracking-widest rounded-lg hover:bg-[#1E90FF]/30 transition-all"
          >
            Go to Sign In
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh] bg-brand-bg flex items-center justify-center px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-display font-bold uppercase tracking-tight text-text-primary">
            Create Account
          </h1>
          <p className="text-sm text-secondary-text">
            Join the Tech Yuva developer community
          </p>
        </div>

        <form onSubmit={handleSignUp} className="space-y-4 p-8 rounded-xl bg-brand-bg-sec/30 border border-border-color glass-panel">
          {error && (
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono">
              {error}
            </div>
          )}

          <div>
            <label htmlFor="signup-email" className="sr-only">Email</label>
            <input
              id="signup-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="w-full bg-[#111827] py-3.5 px-4 text-sm text-white rounded-lg border border-white/[0.08] focus:outline-none focus:border-[#1E90FF]/50 placeholder:text-[#9CA3AF]/60 font-mono transition-all"
            />
          </div>

          <div>
            <label htmlFor="signup-password" className="sr-only">Password</label>
            <input
              id="signup-password"
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password (min 6 characters)"
              className="w-full bg-[#111827] py-3.5 px-4 text-sm text-white rounded-lg border border-white/[0.08] focus:outline-none focus:border-[#1E90FF]/50 placeholder:text-[#9CA3AF]/60 font-mono transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full h-12 bg-[#1E90FF]/20 backdrop-blur-xl border border-[#1E90FF]/40 text-white text-xs font-mono font-bold uppercase rounded-lg shadow-[0_0_20px_rgba(30,144,255,0.3)] flex items-center justify-center gap-2 transition-all hover:bg-[#1E90FF]/30 active:scale-[0.98] cursor-pointer select-none disabled:opacity-50"
          >
            {loading ? "CREATING ACCOUNT..." : "SIGN UP"}
          </button>

          <p className="text-center text-xs text-secondary-text">
            Already have an account?{" "}
            <Link href="/auth/signin" className="text-neon-blue hover:underline font-mono">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
