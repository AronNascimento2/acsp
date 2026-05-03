import { motion } from "framer-motion";
import { CalendarDays, MapPin } from "lucide-react";
import { fadeUp } from "./animations";

export const EventSection = () => {
  const cards = [
    { icon: CalendarDays, title: "Duração", text: "60 minutos" },
    { icon: MapPin, title: "Ambiente", text: "Espaços culturais de São Paulo" },
  ];

  return (
    <motion.section
      id="evento"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={fadeUp}
      transition={{ duration: 0.8 }}
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#c9a45c]">
              O concerto
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-5xl">
              Música de câmara em sua forma mais próxima do público.
            </h2>

            <p className="mt-6 leading-8 text-white/65">
              Um concerto contextualizado, dinâmico e acessível, preservando a
              excelência artística sem perder a leveza da experiência ao vivo.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {cards.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 transition hover:-translate-y-1 hover:border-[#c9a45c]/40"
                >
                  <item.icon className="mb-4 text-[#c9a45c]" />
                  <p className="font-semibold">{item.title}</p>
                  <p className="mt-1 text-sm text-white/50">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#120e0a] shadow-2xl">
            <img
              src="/Quarteto.jpg"
              alt="Quarteto de Cordas ACSP"
              className="h-[380px] w-full object-cover"
            />

            <div className="p-8">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#c9a45c]">
                Programa
              </p>

              <div className="space-y-4 text-white/75">
                <p>T. Albinoni — Sinfonia a 4</p>
                <p>W. A. Mozart — Quarteto nº 3 em Sol Maior, K.156</p>
                <p>J. Haydn — Quarteto Op. 33 nº 2 “The Joke”</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
