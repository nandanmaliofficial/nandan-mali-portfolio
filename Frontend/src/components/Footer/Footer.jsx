import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink px-6 md:px-10 py-14 border-t border-parchment/10">
      <div className="section-inner flex flex-col md:flex-row md:items-center md:justify-between gap-9">
        <div>
          <p className="font-display text-parchment text-lg font-semibold">Nandan Mali</p>
          <p className="text-[11px] font-mono text-copper uppercase tracking-[0.2em] mt-1.5">
            MERN stack developer
          </p>
          <p className="text-sm text-parchment/45 mt-3 max-w-xs font-light">
            Building responsive and practical web experiences.
          </p>
        </div>

        <ul className="flex flex-wrap gap-x-7 gap-y-2">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm text-parchment/55 hover:text-copper transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-5">
          <a
            href="https://github.com/nandanmaliofficial"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-parchment/55 hover:text-copper transition-colors text-xl"
          >
            <SiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/nandan-mali/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-parchment/55 hover:text-copper transition-colors text-xl"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      <p className="text-xs text-parchment/25 text-center mt-12">
        © {new Date().getFullYear()} Nandan Mali. All rights reserved.
      </p>
    </footer>
  );
}
