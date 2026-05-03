import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

type Props = {
  show: boolean;
};

export const BackToTopButton = ({ show }: Props) => {
  if (!show) return null;

  return (
    <motion.button
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[#c9a45c]/40 bg-[#15100c] text-[#c9a45c] shadow-2xl transition hover:bg-[#c9a45c] hover:text-black"
    >
      <ArrowUp size={20} />
    </motion.button>
  );
};
