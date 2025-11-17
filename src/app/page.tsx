"use client";

import { useCallback } from "react";

export default function Home() {
  const saveContact = useCallback(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 256;

    const ctx = canvas.getContext("2d");

    if (ctx) {
      ctx.fillStyle = "#050505";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = "bold 138px 'Arial'";
      ctx.fillStyle = "#f5f5f5";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("JC", canvas.width / 2, canvas.height / 2 + 10);
    }

    const photoData = canvas.toDataURL("image/png").split(",")[1] ?? "";

    const contactCard = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      "FN:James Corso",
      "N:Corso;James;;;",
      "ORG:Tri-K Development",
      "TITLE:Principal Builder - Design/Build",
      "TEL;TYPE=CELL,VOICE:17089328857",
      "EMAIL;TYPE=INTERNET:corsojames1@gmail.com",
      "URL:https://tri-kdev.com",
      photoData ? `PHOTO;ENCODING=b;TYPE=PNG:${photoData}` : null,
      "NOTE:Let's make it happen",
      "END:VCARD",
    ]
      .filter((line): line is string => Boolean(line))
      .join("\n");

    const blob = new Blob([contactCard], {
      type: "text/vcard;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);

    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "james-corso-ark.vcf";
    anchor.rel = "noopener";
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();

    setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 1000);
  }, []);

  return (
    <main className="relative flex min-h-screen items-center justify-center bg-transparent px-4 py-10 font-sans">
      <div className="relative w-full max-w-xs text-white sm:max-w-sm">
        <div
          className="pointer-events-none absolute inset-4 rounded-[36px] bg-[#39ff14]/20 blur-[65px]"
          aria-hidden
        />
        <div className="absolute inset-0 rounded-[36px] border border-white/5 opacity-60 blur-2xl" />

        <div className="relative overflow-hidden rounded-[36px] border border-white/15 bg-gradient-to-b from-[#0c1e10] via-[#061209] to-[#030803] p-7 shadow-[0_25px_70px_rgba(0,0,0,0.85)]">
          <div
            className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#39ff14]/30 blur-[60px]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute bottom-10 left-20 h-20 w-20 rounded-full border border-white/15"
            aria-hidden
          />
          <div className="relative space-y-6">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-[0.7rem] font-semibold tracking-[0.35em] text-white/70">
                Tri-K
                <span className="h-1 w-1 rounded-full bg-[#39ff14]" aria-hidden />
                Development
              </div>
              <h1 className="text-4xl font-semibold leading-tight">
                James{" "}
                <span className="text-white/70">
                  Corso
                </span>
              </h1>
              <p className="text-base text-white/80">Principal Builder · Design/Build</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-inner shadow-black/40">
              <div className="text-sm uppercase tracking-[0.35em] text-white/50">
                Builder Line
              </div>
              <div className="mt-1 text-2xl font-bold text-[#39ff14]">
                1.708.932.8857
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-inner shadow-black/40">
              <div className="text-sm uppercase tracking-[0.35em] text-white/50">
                Email
              </div>
              <a
                href="mailto:corsojames1@gmail.com"
                className="mt-1 inline-flex items-center gap-2 text-lg font-semibold text-[#72ff72] transition-colors hover:text-white"
              >
                corsojames1@gmail.com
              </a>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#0a160c]/70 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-white/45">
                <span>Build Scope</span>
                <span>In-house</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2 text-sm font-semibold text-white">
                {["Custom Homes", "Multi-Family", "Spec Builds", "Adaptive Reuse"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/20 px-3 py-1 text-[0.7rem] text-white/70"
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>

            <button
              type="button"
              onClick={saveContact}
              className="animate-callout group relative mt-4 flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl border border-[#39ff14] bg-gradient-to-r from-[#39ff14] via-[#7dff5c] to-[#c6ff00] px-6 py-3 text-base font-semibold text-[#091b0b] shadow-[0_20px_35px_rgba(57,255,20,0.35)] transition-transform duration-300 hover:translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#9cff6a] focus-visible:ring-offset-[#202225]"
            >
              <span className="relative z-10">Save Builder Contact</span>
              <span
                className="relative z-10 text-lg leading-none"
                aria-hidden
              >
                ↗
              </span>
              <span className="absolute inset-0 scale-125 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.45),_transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-70" />
            </button>

            <div className="space-y-1 pt-2 text-center text-xs uppercase tracking-[0.3em] text-white/50">
              <p className="text-[0.6rem] text-white/70">
                Built in America, on Earth
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
