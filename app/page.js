"use client";

import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="min-h-screen text-zinc-100 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 -z-10 bg-black"
        style={{
          backgroundImage: "url(/lava-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Global lava pulse (subtle) */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{ opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(60rem 60rem at 60% 55%, rgba(255,80,0,0.15), transparent 60%)",
        }}
      />

      {/* Header (right side free for your menu) */}
      <header className="relative z-[2] px-6 md:px-10 py-4 flex items-center">
        <motion.img
          src="/cryzon-logo.png"  // transparent PNG/SVG
          alt="Cryzon"
          className="h-23 w-auto"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          style={{ marginLeft: 10 }}
        />
      </header>

     {/* HERO — white first lines, animated orange third line */}
<section className="relative mx-auto max-w-6xl px-4 md:px-8 pt-8">
  <div className="relative">
    {/* soft orange glow anchored to the headline block */}
    <motion.div
      className="absolute z-0 pointer-events-none"
      style={{
        left: "-2rem",
        top: "-0.75rem",
        width: "46rem",
        height: "14rem",
        background:
          "radial-gradient(38rem 16rem at 16rem 5rem, rgba(255,90,0,0.34), transparent 65%)",
      }}
      animate={{ opacity: [0.18, 0.46, 0.18] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    />

    <h1 className="relative z-10 text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
      <span className="text-white">Souls trapped in crystal.</span>
      <br />
      <span className="text-white">Send them on quests.</span>
      <br />
      {/* animated lava shimmer ONLY on this line */}
      <motion.span
        style={{
          backgroundImage:
            "linear-gradient(270deg, #ff5e00, #b91c1c, #000000, #b91c1c, #ff5e00)",
          backgroundSize: "400% 400%",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          color: "transparent",
          display: "inline-block",
        }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        Return with rewards… or never return at all.
      </motion.span>
    </h1>

    <p className="relative z-10 mt-3 max-w-xl text-zinc-300/90 text-sm md:text-base">
      Ghostly crystal visages forged for Hyperliquid. Connect and enter the realm.
    </p>
  </div>
</section>


      {/* Floating / tilting cards */}
      <CardsCluster />

      {/* ABOUT — Cryzon Collection (flame accents + floating art) */}
      <section
        id="about"
        className="relative mx-auto max-w-6xl px-4 md:px-8 py-16 md:py-24"
      >
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left: Copy */}
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
              About{" "}
              <span className="lava-title">Cryzon</span>
            </h2>

            <p className="text-zinc-300/90 leading-relaxed mb-4">
              <span className="font-semibold">Cryzon</span> is a collection of
              ghostly visages—souls sealed inside living crystal—built for the
              Hyperliquid ecosystem. Each Cryzon is a playable identity you can
              send on <span className="font-semibold">quests</span>, bind to
              relics, and evolve through on‑chain decisions.
            </p>

            <p className="text-zinc-300/90 leading-relaxed mb-4">
              The loop is simple: <span className="font-semibold">send</span> a
              soul, face the unknown, and{" "}
              <span className="font-semibold">
                return with rewards… or never return at all.
              </span>{" "}
              Risk creates story. Story creates value.
            </p>

            {/* Quick facts */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <Fact title="Chain" value="Hyperliquid" />
              <Fact title="Mechanic" value="Quest & Risk" />
              <Fact title="Utility" value="Rewards & Progression" />
              <Fact title="Community" value="Leaderboard & Lore" />
            </div>

            {/* Features list (orange accents) */}
            <ul className="mt-6 space-y-3 text-zinc-300/90">
              <li>
                <span className="font-semibold text-orange-300">Quests:</span>{" "}
                choose risk tiers and destinations; outcomes alter your Cryzon’s
                story.
              </li>
              <li>
                <span className="font-semibold text-orange-300">Rewards:</span>{" "}
                successful returns grant items, titles, or on‑chain points.
              </li>
              <li>
                <span className="font-semibold text-orange-300">Evolution:</span>{" "}
                traits can awaken; scars and halos mark pivotal runs.
              </li>
              <li>
                <span className="font-semibold text-orange-300">Identity:</span>{" "}
                hold a Cryzon as your badge across apps built on Hyperliquid.
              </li>
            </ul>
          </div>

          {/* Right: Artwork (floating like the cards) */}
          <div className="relative">
            <motion.div
              className="relative rounded-3xl border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.6)] overflow-hidden"
              style={{ willChange: "transform" }}
              animate={{ rotateZ: [-3, 3, -3], y: [0, -10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src="/about-art.png"  // put your image in /public/about-art.png
                alt="About Cryzon"
                className="w-full h-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10 rounded-3xl" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* --- Small components --- */

function Fact({ title, value }) {
  return (
    <div className="rounded-xl bg-white/5 border border-white/10 px-4 py-3">
      <div className="text-xs uppercase tracking-wider text-orange-400">
        {title}
      </div>
      <div className="font-semibold">{value}</div>
    </div>
  );
}

function CardsCluster() {
  const tilt = (degStart, degEnd, delay = 0) => ({
    rotateZ: [degStart, degEnd, degStart],
    y: [0, -10, 0],
    transition: { duration: 7.2, repeat: Infinity, ease: "easeInOut", delay },
  });

  return (
    <div className="relative mx-auto max-w-6xl h-[420px] md:h-[520px]">
      {/* Left pair */}
      <FloatingCard
        src="/nft1.png"
        className="left-[4%] top-[10%] md:left-[8%] md:top-[6%] rotate-[-10deg]"
        animate={tilt(-10, -2, 0.2)}
      />
      <FloatingCard
        src="/nft2.png"
        className="left-[16%] bottom-[8%] md:left-[20%] md:bottom-[6%] rotate-[6deg]"
        animate={tilt(6, 14, 0.4)}
      />
      {/* Right pair */}
      <FloatingCard
        src="/nft3.png"
        className="right-[16%] top-[6%] md:right-[20%] md:top-[2%] rotate-[10deg]"
        animate={tilt(10, 18, 0.1)}
      />
      <FloatingCard
        src="/nft4.png"
        className="right-[6%] bottom-[12%] md:right-[10%] md:bottom-[8%] rotate-[-6deg]"
        animate={tilt(-6, -14, 0.5)}
      />
    </div>
  );
}

function FloatingCard({ src, className = "", animate }) {
  return (
    <motion.div
      className={
        "absolute w-[38vw] max-w-[260px] aspect-[4/5] rounded-2xl " +
        "border border-white/15 bg-black/40 backdrop-blur-sm shadow-xl overflow-hidden " +
        className
      }
      style={{
        boxShadow:
          "0 12px 40px rgba(0,0,0,0.5), 0 0 60px rgba(255,80,0,0.15)",
      }}
      animate={animate}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/8 via-transparent to-black/40 pointer-events-none" />
      <img
        src={src}
        alt="Cryzon NFT"
        className="w-full h-full object-cover"
        draggable={false}
      />
      <div className="absolute inset-0 ring-1 ring-white/10 rounded-2xl pointer-events-none" />
    </motion.div>
  );
}
