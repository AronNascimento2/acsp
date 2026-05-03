import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import {
  ArrowUp,
  CalendarDays,
  MapPin,
  Send,
  Sparkles,
  Ticket,
} from "lucide-react";

export const OrchestraLandingPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [showButton, setShowButton] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !subject || !message) {
      toast.error("Por favor, preencha todos os campos!");
      return;
    }

    setIsButtonDisabled(true);

    emailjs
      .send(
        "service_nsccokl",
        "template_s0ujjdn",
        { from_name: name, from_email: email, subject, message },
        "vOFphkyds17Mdtkhn",
      )
      .then(() => {
        toast.success("E-mail enviado com sucesso!");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch(() => toast.error("Não foi possível enviar o e-mail."))
      .finally(() => setTimeout(() => setIsButtonDisabled(false), 3000));
  };

  const members = [
    { name: "Rodrigo Leite", image: "/Rodrigo.jpg", role: "Violino" },
    { name: "Ligia Machado", image: "/ligia.jpg", role: "Violino" },
    { name: "Aron Nascimento", image: "/Aron.jpg", role: "Viola" },
    { name: "Cassiano", image: "/Cassiano.jpg", role: "Violoncelo" },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#080706] text-[#f8f1e7]">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/35 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <img
              src="/acsplogo.jpg"
              alt="Academia de Cordas de São Paulo"
              className="h-12 w-12 rounded-full border border-[#c9a45c]/50 object-cover shadow-[0_0_30px_rgba(201,164,92,0.25)]"
            />

            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#c9a45c]">
                ACSP
              </p>
              <h1 className="text-sm font-semibold md:text-base">
                Academia de Cordas de São Paulo
              </h1>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-white/65 md:flex">
            {[
              ["Concerto", "#evento"],
              ["Quarteto", "#quarteto"],
              ["Contato", "#contato"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="relative transition hover:text-[#c9a45c] after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-[#c9a45c] after:transition-all hover:after:w-full"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {showButton && (
        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[#c9a45c]/40 bg-[#15100c] text-[#c9a45c] shadow-2xl transition hover:bg-[#c9a45c] hover:text-black"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}

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
              clássico interpretado pelo quarteto de cordas da Academia de
              Cordas de São Paulo.
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
                {[
                  { icon: CalendarDays, title: "Duração", text: "60 minutos" },
                  {
                    icon: MapPin,
                    title: "Ambiente",
                    text: "Espaços culturais de São Paulo",
                  },
                ].map((item) => (
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

      <section id="quarteto" className="bg-[#0d0a08] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="mb-14 text-center"
          >
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#c9a45c]">
              Formação
            </p>
            <h2 className="text-4xl font-bold md:text-5xl">
              Quarteto de Cordas
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-4">
            {members.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] shadow-xl transition hover:-translate-y-2 hover:border-[#c9a45c]/40"
              >
                <div className="overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-5">
                  <p className="text-lg font-semibold">{member.name}</p>
                  <p className="mt-1 text-sm text-[#c9a45c]">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#c9a45c]">
              Contato
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-5xl">
              Leve a música da ACSP para seu evento.
            </h2>

            <p className="mt-6 leading-8 text-white/60">
              Entre em contato para apresentações, eventos culturais,
              cerimônias, concertos privados ou projetos especiais.
            </p>
          </motion.div>

          <motion.form
            onSubmit={sendEmail}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-2xl md:p-8"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu nome"
                className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 outline-none transition focus:border-[#c9a45c]"
              />

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu e-mail"
                type="email"
                className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 outline-none transition focus:border-[#c9a45c]"
              />

              <input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Assunto"
                className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 outline-none transition focus:border-[#c9a45c] md:col-span-2"
              />

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Conte um pouco sobre o evento ou apresentação desejada"
                className="min-h-40 resize-none rounded-2xl border border-white/10 bg-black/30 px-5 py-4 outline-none transition focus:border-[#c9a45c] md:col-span-2"
              />
            </div>

            <button
              disabled={isButtonDisabled}
              className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-[#c9a45c] px-6 py-4 font-bold text-black shadow-[0_20px_60px_rgba(201,164,92,0.18)] transition hover:-translate-y-0.5 hover:bg-[#e8c879] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send size={18} />
              {isButtonDisabled ? "Enviando..." : "Enviar mensagem"}
            </button>
          </motion.form>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/45">
        © {new Date().getFullYear()} Academia de Cordas de São Paulo. Todos os
        direitos reservados.
      </footer>
    </main>
  );
};
