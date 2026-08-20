import { motion, useReducedMotion } from "framer-motion";
import { HiOutlineArrowRight, HiOutlineDownload } from "react-icons/hi";
import Hero3D from "./Hero3D.jsx";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const Motion = shouldReduceMotion ? "div" : motion.div;

  return (
    <section id="home" className="relative bg-ink pt-32 pb-28 md:pt-48 md:pb-40 px-6 md:px-10 overflow-hidden scroll-mt-20 md:scroll-mt-24">
      <div className="section-inner relative grid lg:grid-cols-[0.85fr_1.15fr] gap-10 items-center">
        <Motion
          variants={shouldReduceMotion ? undefined : container}
          initial={shouldReduceMotion ? undefined : "hidden"}
          animate={shouldReduceMotion ? undefined : "show"}
        >
          <motion.div
            variants={shouldReduceMotion ? undefined : item}
            className="inline-flex items-center gap-2 text-xs font-mono text-parchment/70 border border-parchment/15 rounded-full px-3.5 py-1.5 mb-7"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-copper" />
            Available for freelance projects
          </motion.div>

          <motion.h1
            variants={shouldReduceMotion ? undefined : item}
            className="text-4xl md:text-5xl lg:text-[56px] text-parchment leading-[1.1] mb-7"
          >
            Building modern web experiences that turn ideas into reality.
          </motion.h1>

          <motion.p
            variants={shouldReduceMotion ? undefined : item}
            className="text-parchment/60 text-base md:text-lg max-w-lg mb-9 font-light"
          >
            MERN stack developer specializing in responsive websites, full-stack
            web applications and custom web solutions.
          </motion.p>

          <motion.div variants={shouldReduceMotion ? undefined : item} className="flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary-light">
              Start a project <HiOutlineArrowRight />
            </a>
            <a href="#projects" className="btn-secondary-light">
              View my work
            </a>
            <a href="/images/resume.pdf" download className="btn-secondary-light">
              Download resume <HiOutlineDownload />
            </a>
          </motion.div>
        </Motion>

<div className="relative h-80 md:h-[460px] overflow-hidden pointer-events-none">
          <Hero3D />
        </div>
      </div>
    </section>
  );
}
