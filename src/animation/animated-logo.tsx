import { AnimatePresence, Variants, motion } from "framer-motion";

export default function AnimatedLogo() {
  const iconVariant: Variants = {
    hidden: {
      pathLength: 0,
      fill: "rgba(0, 0, 0, 0)",
    },
    visible: {
      pathLength: 1,
      // Set fill as per your theme
      fill: "#156165",
    },
  };

  return (
    <AnimatePresence>
      <motion.svg
        viewBox="0 0 450 450"
        xmlns="https://www.svgrepo.com/show/535119/a.svg"
        className="h-full w-full fill-accent stroke-accent transform rotate-180"
      >
        <motion.path
          d={"https://www.svgrepo.com/show/535119/a.svg"}
          variants={iconVariant}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 3, ease: "easeInOut" },
            fill: { duration: 3, ease: [1, 0, 0.8, 1] },
          }}
        />
      </motion.svg>
    </AnimatePresence>
  );
}
