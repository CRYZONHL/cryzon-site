"use client";

import { motion } from "framer-motion";

/**
 * Reusable animated lava-gradient text.
 * Usage: <LavaText className="text-3xl md:text-5xl font-extrabold">Title</LavaText>
 */
function LavaText({ as: Tag = "span", className = "", children }) {
  return (
    <motion.span
      className={className}
      style={{
        backgroundImage:
          "linear-gradient(270deg, #ff5e00, #b91c1c, #000000, #b91c1c, #ff5e00)",
        backgroundSize: "400% 400%",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
        display: "inline-block",
      }}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.span>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen text-zinc-100 relative overflow-hidden">
      {/* Background (size/position controlled in globals.css via .lava-bg) */}
      <div
        className="absolute inset-0 -z-10 bg-black lava-bg"
        style={{ backgroundImage: "url(/lava-bg.png)" }}
      />

      {/* Subtle global lava pulse */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{ opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(60rem 60rem at 60% 55%, rgba(255,80,0,0.15), transparent 60%)",
        }}
      />
{/* ================= HEADER ================= */}
<header className="relative z-[2] px-6 md:px-10 pt-6 pb-4 flex items-center justify-center">
  {/* Left spinning icon (bigger + pushed left) */}
  <motion.img
    src="/cryzon-logo.png"
    alt="Cryzon Icon"
    className="h-20 w-auto absolute left-1 md:left-3 top-3"
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
  />

  {/* Soft pulsing glow behind the word logo */}
  <motion.div
    className="absolute"
    style={{
      top: "0.25rem",
      left: "50%",
      transform: "translateX(-50%)",
      width: "28rem",
      height: "9rem",
      background:
        "radial-gradient(circle, rgba(255,80,0,0.35) 0%, transparent 70%)",
      borderRadius: "9999px",
      filter: "blur(44px)",
      zIndex: -1,
    }}
    animate={{ opacity: [0.3, 0.6, 0.3] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
  />

  {/* Centered word logo + shimmer sweep */}
  <div className="relative">
    <img
      src="/cryzon-word-logo.png"
      alt="Cryzon"
      className="h-20 md:h-45 w-auto relative z-[2]"
    />
    <motion.div
      className="absolute inset-0 pointer-events-none rounded"
      style={{
        background:
          "linear-gradient(110deg, rgba(0,0,0,0) 0%, rgba(255,160,80,0.0) 35%, rgba(255,120,0,0.35) 50%, rgba(255,160,80,0.0) 65%, rgba(0,0,0,0) 100%)",
        backgroundSize: "200% 100%",
        mixBlendMode: "screen",
      }}
      animate={{ backgroundPosition: ["-100% 0%", "100% 0%"] }}
      transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
    />
  </div>
</header>

{/* ================= HERO ================= */}
<section className="relative mx-auto max-w-6xl px-4 md:px-8 pt-6">
  <div className="relative">
    {/* glow behind headline */}
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
      <span className="text-white">Enter the crystal realm...</span>
      <br />
      <span className="text-white">outcomes are unknown.</span>
      <br />
      <LavaText>Every shard tells a different story.</LavaText>
    </h1>

    <p className="relative z-10 mt-3 max-w-xl text-zinc-300/90 text-sm md:text-base">
      Ghostly crystal visages forged for the XRP Ledger. Connect, explore, and
      see what unfolds....
    </p>

    {/* Mint CTA — coming soon */}
    <div className="relative z-10 mt-6">
      <div
        className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold opacity-70 pointer-events-none select-none"
        title="Mint opens soon on xrp.cafe"
      >
        <span className="mr-2">🔥</span>
        <span>Coming Soon on </span>
        &nbsp;<span className="underline">xrp.cafe</span>&nbsp;
        <span> </span>
      </div>
    </div>
  </div>
</section>

      {/* Floating / tilting cards */}
      <CardsCluster />

      {/* ABOUT */}
      <section id="about" className="relative mx-auto max-w-6xl px-4 md:px-8 py-16 md:py-24">
  <div className="grid md:grid-cols-2 gap-10 items-start">
    {/* Left: copy */}
    <div>
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
        <LavaText>About Cryzon</LavaText>
      </h2>

      <p className="text-zinc-300/90 leading-relaxed mb-4">
        Forged in the void between realms, Cryzon are
        <span className="text-orange-400"> crystal‑bound echoes</span> of forgotten souls.
        Each holds a fragment of story, frozen in light and shadow. Owning a Cryzon
        means holding a shard of mystery — some whisper, some scream, all waiting to be uncovered.
      </p>

      <p className="text-zinc-300/90 leading-relaxed mb-4">
        Cryzon is more than art... it’s a living collection that blends
        <span className="text-orange-400"> NFTs</span>, on‑chain lore, and an upcoming game on the
        <span className="font-semibold"> XRP Ledger</span>. Explore, evolve traits, and discover what lies within the shards.
      </p>

      {/* Quick facts */}
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
        <Fact title={<LavaText>Chain</LavaText>} value="XRP Ledger" />
        <Fact title={<LavaText>Focus</LavaText>} value="Lore & Play" />
        <Fact title={<LavaText>Utility</LavaText>} value="$CRYZ & Items" />
        <Fact title={<LavaText>Community</LavaText>} value="Events & Drops" />
      </div>

      {/* Features */}
      <ul className="mt-6 space-y-3 text-zinc-300/90">
        <li><LavaText>Explore:</LavaText> uncover stories hidden in the shards.</li>
        <li><LavaText>Progress:</LavaText> earn items and unlock traits over time.</li>
        <li><LavaText>Connect:</LavaText> use Cryzon as your badge across apps.</li>
      </ul>
    </div>

    {/* Right: art (floating) */}
    <div className="relative">
      <motion.div
        className="relative rounded-3xl border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.6)] overflow-hidden"
        style={{ willChange: "transform" }}
        animate={{ rotateZ: [-3, 3, -3], y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <img src="/about-art.png" alt="About Cryzon" className="w-full h-full object-cover" />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10 rounded-3xl" />
      </motion.div>
    </div>
  </div>
</section>
      {/* $CRYZ Token */}
      <section id="token" className="relative mx-auto max-w-6xl px-4 md:px-8 py-16 md:py-24">
  {/* soft background glow */}
  <div
    className="pointer-events-none absolute -inset-x-10 -top-6 h-"
    style={{
      background:
        "radial-gradient(48rem 20rem at 30% 0%, rgba(255,90,0,0.22), transparent 65%)",
    }}
  />
  <div className="relative">
    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
      <LavaText>The $CRYZ Token</LavaText>
    </h2>

    <p className="text-zinc-300/90 leading-relaxed max-w-3xl">
      <span className="font-semibold">$CRYZ</span> is the utility token that connects the
      collection, the community, and the upcoming game. It powers progression, access,
      and future drops within the Cryzon universe.
    </p>

    {/* facts grid */}
    <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
      <TokenFact title={<LavaText>Engage</LavaText>} value="Earn by participating" />
      <TokenFact title={<LavaText>Use</LavaText>} value="Upgrades & unlocks in‑game" />
      <TokenFact title={<LavaText>Discover</LavaText>} value="Traits, artifacts & lore" />
      <TokenFact title={<LavaText>Trade</LavaText>} value="XRP Ledger DEX (soon)" />
    </div>

    {/* disclaimer card */}
    <div className="mt-6 rounded-xl bg-white/5 border border-white/10 px-5 py-4">
      <div className="text-sm md:text-base text-zinc-200">
        $CRYZ launches after the collection is live. Timelines and features may evolve as we
        build...no guarantees, just steady development.
      </div>
    </div>
  </div>
</section>
      {/* Roadmap */}
      <section id="roadmap" className="relative mx-auto max-w-6xl px-4 md:px-8 py-16 md:py-24">
  <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8">
    <LavaText>Roadmap</LavaText>
  </h2>

  <div className="grid gap-4 md:grid-cols-3">
    <RoadmapCard
      step={<LavaText>Phase I — Mint</LavaText>}
      detail="Cryzon collection launches exclusively on xrp.cafe."
    />
    <RoadmapCard
      step={<LavaText>Phase II — Game</LavaText>}
      detail="Playable Cryzon experience begins explore, quest, and unlock lore."
    />
    <RoadmapCard
      step={<LavaText>Phase III — $CRYZ</LavaText>}
      detail="$CRYZ connects shards, in‑game progression, and marketplace activity."
    />
  </div>
</section>
      {/* FAQ */}
      <section id="faq" className="relative mx-auto max-w-4xl px-4 md:px-8 pb-20">
  <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8">
    <LavaText>FAQ</LavaText>
  </h2>

  <div className="space-y-3">
    <FaqItem
      q={<LavaText>What is Cryzon?</LavaText>}
      a="A collection of crystal‑bound souls on the XRP Ledger, tied to an upcoming playable experience. Own a shard, explore the story, and see what unfolds."
    />

    <FaqItem
      q={<LavaText>How do I mint?</LavaText>}
      a="Mint will open on xrp.cafe. We’ll share the exact date and link on our socials and site. Watch for the official announcement."
    />

    <FaqItem
      q={<LavaText>Do I need a special wallet?</LavaText>}
      a="Use an XRP Ledger–compatible wallet that supports NFTs (e.g., Xaman). Fund it with a small amount of XRP for fees."
    />

    <FaqItem
      q={<LavaText>When is the game?</LavaText>}
      a="Game features roll out after mint. Timelines can shift as we build no guarantees expect prototypes first, then more depth over time."
    />

    <FaqItem
      q={<LavaText>What does $CRYZ do?</LavaText>}
      a="$CRYZ is the utility token that connects the collection, the game, and future drops. It’s planned to power access, upgrades, and redeemables. Launch follows the collection going live."
    />

    <FaqItem
      q={<LavaText>Are there rewards or earnings?</LavaText>}
      a="Cryzon is about art, collection, and play. There are no financial promises or performance guarantees just progression, items, and lore as the world expands."
    />

    <FaqItem
      q={<LavaText>Can traits change?</LavaText>}
      a="Some traits and visuals may evolve through gameplay or events. Exact mechanics will be revealed gradually."
    />

    <FaqItem
      q={<LavaText>Is there a whitelist/allowlist?</LavaText>}
      a="If we run allowlist spots, we’ll announce criteria on Twitter/X and Discord. Nothing is final until posted on our official channels."
    />

    <FaqItem
      q={<LavaText>Where do I trade?</LavaText>}
      a="After mint, secondary trading will be available on XRP‑compatible marketplaces. We’ll share verified links to avoid fakes."
    />

    <FaqItem
      q={<LavaText>Where do I get updates?</LavaText>}
      a="Follow the official X/Twitter and Discord linked in the footer. We’ll post build progress, drops, and game notes there."
    />
  </div>
</section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 md:px-8 py-8 flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <div className="text-sm text-zinc-400">Cryzon © 2025 — Every shard holds a soul</div>
          <div className="md:ml-auto flex items-center gap-4 text-sm">
            <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:underline">
              <LavaText>Twitter / X</LavaText>
            </a>
            <a href="https://discord.com" target="_blank" rel="noreferrer" className="hover:underline">
              <LavaText>Discord</LavaText>
            </a>
            <a href="https://xrp.cafe" target="_blank" rel="noreferrer" className="hover:underline">
              <LavaText>xrp.cafe</LavaText>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* --- Small components --- */

function Fact({ title, value }) {
  return (
    <div className="rounded-xl bg-white/5 border border-white/10 px-4 py-3">
      <div className="text-xs uppercase tracking-wider">{title}</div>
      <div className="font-semibold">{value}</div>
    </div>
  );
}

function TokenFact({ title, value }) {
  return (
    <div className="rounded-xl bg-white/5 border border-white/10 px-4 py-3">
      <div className="text-xs uppercase tracking-wider">{title}</div>
      <div className="font-semibold">{value}</div>
    </div>
  );
}

function RoadmapCard({ step, detail }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="text-base md:text-lg font-semibold mb-1">{step}</div>
      <div className="text-zinc-300/90">{detail}</div>
    </div>
  );
}

function FaqItem({ q, a }) {
  return (
    <details className="group rounded-2xl border border-white/10 bg-white/5 p-5">
      <summary className="list-none cursor-pointer flex items-center justify-between">
        <div className="text-base md:text-lg font-semibold">{q}</div>
        <span className="ml-4 text-zinc-400 transition-transform group-open:rotate-45">+</span>
      </summary>
      <div className="mt-3 text-zinc-300/90">{a}</div>
    </details>
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
      style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.5), 0 0 60px rgba(255,80,0,0.15)" }}
      animate={animate}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/8 via-transparent to-black/40 pointer-events-none" />
      <img src={src} alt="Cryzon NFT" className="w-full h-full object-cover" draggable={false} />
      <div className="absolute inset-0 ring-1 ring-white/10 rounded-2xl pointer-events-none" />
    </motion.div>
  );
}