import { HiOutlineExternalLink } from "react-icons/hi";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { SiGithub } from "react-icons/si";
import { motion } from "framer-motion";
const PROJECT_IMAGE = "/images/movers&packers.png";

export default function ProjectCard({ project, onOpenCaseStudy }) {
  return (
    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }} className="card overflow-hidden flex flex-col">
      <div className="h-52 bg-ink flex items-center justify-center relative overflow-hidden" aria-hidden="true">
        <span className="font-display text-6xl text-parchment/10 select-none">
          <img src={PROJECT_IMAGE} alt=""/>
        </span>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
      </div>

      <div className="p-7 flex flex-col flex-1">
        {project.isInternship && (
          <span className="text-xs font-mono text-copper-deep bg-copper-soft rounded-full px-3 py-1 w-fit mb-3">
            Internship project
          </span>
        )}

        <h3 className="text-xl font-display text-ink mb-1">{project.name}</h3>
        <p className="text-sm text-stone mb-4">{project.category}</p>

        <p className="text-sm text-ink/70 leading-relaxed mb-5 flex-1 font-light">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="text-xs font-mono text-ink/50 border border-line rounded px-2 py-1">
              {t}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-5 mt-auto pt-5 border-t border-line">
          <button
            onClick={() => onOpenCaseStudy(project)}
            className="flex items-center gap-1 text-sm font-medium text-ink hover:text-copper transition-colors"
          >
            View case study <HiOutlineArrowUpRight />
          </button>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-ink/50 hover:text-copper transition-colors"
            >
              <HiOutlineExternalLink /> Live demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-ink/50 hover:text-copper transition-colors"
            >
              <SiGithub /> GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
