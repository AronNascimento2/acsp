import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { fadeUp } from "./animations";

export const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

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

  return (
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
            Entre em contato para apresentações, eventos culturais, cerimônias,
            concertos privados ou projetos especiais.
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
  );
};
