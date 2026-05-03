import { motion } from "framer-motion";
import { Sparkles, Ticket } from "lucide-react";
import { fadeUp } from "./animations";

export const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <motion.video
        autoPlay
        muted
        loop
        playsInline
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
        className="absolute inset-0 h-full w-full object-cover opacity-45"
      >
        <source src="/acspvideo.mp4" type="video/mp4" />
      </motion.video>

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,164,92,0.24),transparent_34%)]" />
      <div className="absolute bottom-0 left-0 h-48 w-full bg-gradient-to-t from-[#080706] to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#c9a45c]/30 bg-[#c9a45c]/10 px-4 py-2 text-sm text-[#e8c879] shadow-[0_0_40px_rgba(201,164,92,0.12)]">
            <Sparkles size={16} />
            Concerto camerístico em São Paulo
          </div>

          <h2 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Chamber Concerts{" "}
            <span className="block bg-gradient-to-r from-[#c9a45c] via-[#f0d28a] to-[#8b6a32] bg-clip-text text-transparent">
              Series
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Uma experiência intimista, elegante e envolvente com repertório
            clássico interpretado pelo quarteto de cordas da Academia de Cordas
            de São Paulo.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://www.sympla.com.br/evento/chamber-concerts-series/2272449?referrer=www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-[#c9a45c] px-7 py-4 font-semibold text-black shadow-[0_20px_60px_rgba(201,164,92,0.25)] transition hover:-translate-y-0.5 hover:bg-[#e8c879]"
            >
              <Ticket size={20} />
              Comprar ingressos
            </a>

            <a
              href="#evento"
              className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-7 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:border-[#c9a45c] hover:text-[#c9a45c]"
            >
              Ver programa
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
