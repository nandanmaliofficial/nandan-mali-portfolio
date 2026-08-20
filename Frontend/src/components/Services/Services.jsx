import { HiOutlineArrowRight } from "react-icons/hi";
import {
  HiOutlineCode,
  HiOutlineViewGrid,
  HiOutlineTemplate,
  HiOutlineServer,
  HiOutlineCreditCard,
  HiOutlineLink,
  HiOutlineRefresh,
  HiOutlineCog,
} from "react-icons/hi";
import { motion } from "framer-motion";
import services from "../../data/services.js";
import Reveal from "../Reveal.jsx";


const iconMap = {
  code: HiOutlineCode,
  stack: HiOutlineViewGrid,
  layout: HiOutlineTemplate,
  server: HiOutlineServer,
  "credit-card": HiOutlineCreditCard,
  link: HiOutlineLink,
  landing: HiOutlineTemplate,
  refresh: HiOutlineRefresh,
  tool: HiOutlineCog,
  wordpress: HiOutlineCode,
};

export default function Services() {
  return (
    <section id="services" className="section bg-parchment scroll-mt-20 md:scroll-mt-24">
      <div className="section-inner">
        <Reveal>
          <p className="eyebrow">services</p>
          <h2 className="text-3xl md:text-[42px] text-ink mb-14 leading-tight max-w-xl">
            How I can help your business
          </h2>
        </Reveal>

        <div className="flex flex-col divide-y divide-line border-t border-b border-line">
          {services.map((service, i) => {
             const Icon = iconMap[service.icon];
             return(
            <Reveal key={service.title} delay={i * 0.06} as="div">
              <motion.div
                whileHover={{ x: 8 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 py-7 group"
              >
                {/* Icon */}
                  <span className="service-icon">
                    {Icon && <Icon />}
                  </span>
                <h3 className="text-xl md:text-2xl font-display text-ink sm:w-72 shrink-0">
                  {service.title}
                </h3>
                <p className="text-ink/60 text-sm md:text-base font-light">{service.description}</p>
              </motion.div>
            </Reveal>
          )})}
        </div>

        <Reveal delay={0.2}>
          <a href="#contact" className="btn-ghost mt-10">
            Have a project in mind? Let's discuss it <HiOutlineArrowRight />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
