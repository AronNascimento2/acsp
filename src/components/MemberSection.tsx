import { motion } from "framer-motion";
import { fadeUp } from "./animations";

const members = [
  { name: "Rodrigo Leite", image: "/Rodrigo.jpg", role: "Violino" },
  { name: "Ligia Machado", image: "/ligia.jpg", role: "Violino" },
  { name: "Aron Nascimento", image: "/Aron.jpg", role: "Viola" },
  { name: "Cassiano", image: "/Cassiano.jpg", role: "Violoncelo" },
];

export const MembersSection = () => {
  return (
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
          <h2 className="text-4xl font-bold md:text-5xl">Quarteto de Cordas</h2>
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
  );
};
