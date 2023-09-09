import Hero from "../components/hero";
import { motion } from "framer-motion";

const HomeScreen = () => {
  return (
    <motion.div
      className="home-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
      <Hero />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, qui. Hic animi distinctio et maiores, ab
        nostrum at neque. Iusto minus perspiciatis vitae unde? In quibusdam nulla perspiciatis laboriosam ex.
      </p>
    </motion.div>
  );
};
export default HomeScreen;
