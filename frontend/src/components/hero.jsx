import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      className="hero-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
      Hero
    </motion.div>
  );
};
export default Hero;
