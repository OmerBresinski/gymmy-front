import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Feed = () => {
  return (
    <div className="w-full h-full flex flex-col items-center mt-10 gap-3">
      <motion.h1
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 35 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeInOut" }}
        className="text-4xl font-extrabold tracking-tighter italic text-primary text-pink-500"
      >
        Gymmy
      </motion.h1>
      <Link to="/profile">Profile</Link>
    </div>
  );
};
