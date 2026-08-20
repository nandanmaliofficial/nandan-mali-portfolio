import { useState } from "react";
import { HiOutlineMail, HiOutlineExternalLink } from "react-icons/hi";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { submitContactForm } from "../../services/contactService.js";
import Reveal from "../Reveal.jsx";

const projectTypes = [
  "Business website",
  "Web application",
  "MERN stack application",
  "React development",
  "Backend/API development",
  "Website improvement",
  "Bug fixing",
  "Other",
];

const budgets = [
  "Under ₹10,000",
  "₹10,000 – ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000+",
  "Not sure yet",
];

const initialForm = { name: "", email: "", projectType: "", budget: "", message: "" };

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Name is required.";
  if (!form.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!form.message.trim()) errors.message = "Tell me a bit about the project.";
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("loading");
    setErrorMessage("");
    try {
      await submitContactForm(form);
      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="section bg-paper">
      <div className="section-inner grid lg:grid-cols-[0.85fr_1.15fr] gap-14">
        <Reveal>
          <p className="eyebrow">contact</p>
          <h2 className="text-3xl md:text-[42px] text-ink mb-6 leading-tight">
            Let's build something together.
          </h2>
          <p className="text-ink/60 leading-relaxed mb-9 max-w-sm font-light">
            Share a bit about what you're trying to build, and I'll get back
            to you to discuss next steps.
          </p>

          <div className="flex flex-col gap-4">
            <a
              href="mailto:nandanmaliofficial@gmail.com"
              className="flex items-center gap-3 text-sm text-ink/70 hover:text-copper transition-colors"
            >
              <HiOutlineMail className="text-lg" /> nandanmaliofficial@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/nandan-mali/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-ink/70 hover:text-copper transition-colors"
            >
              <FaLinkedin className="text-lg" /> LinkedIn <HiOutlineExternalLink className="text-xs" />
            </a>
            <a
              href="https://github.com/nandanmaliofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-ink/70 hover:text-copper transition-colors"
            >
              <SiGithub className="text-lg" /> GitHub <HiOutlineExternalLink className="text-xs" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name" name="name" value={form.name} onChange={handleChange} error={errors.name} required />
              <Field
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                error={errors.email}
                required
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <SelectField label="Project type" name="projectType" value={form.projectType} onChange={handleChange} options={projectTypes} />
              <SelectField label="Budget range" name="budget" value={form.budget} onChange={handleChange} options={budgets} />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-ink mb-1.5">
                Message <span className="text-copper">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                className="w-full border border-line rounded-xl px-4 py-3 text-sm bg-paper focus:border-copper"
              />
              {errors.message && (
                <p id="message-error" className="text-xs text-red-600 mt-1.5">
                  {errors.message}
                </p>
              )}
            </div>

            <motion.button
              whileTap={{ scale: 0.97 }}
              disabled={status === "loading"}
              className="btn-primary w-fit"
            >
              {status === "loading" ? "Sending…" : "Send project inquiry"}
            </motion.button>

            {status === "success" && (
              <p role="status" className="text-sm text-emerald-700">
                Thanks — your inquiry has been sent. I'll be in touch soon.
              </p>
            )}
            {status === "error" && (
              <p role="alert" className="text-sm text-red-600">
                {errorMessage}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", value, onChange, error, required }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-ink mb-1.5">
        {label} {required && <span className="text-copper">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className="w-full border border-line rounded-xl px-4 py-3 text-sm bg-paper focus:border-copper"
      />
      {error && (
        <p id={`${name}-error`} className="text-xs text-red-600 mt-1.5">
          {error}
        </p>
      )}
    </div>
  );
}

function SelectField({ label, name, value, onChange, options }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-ink mb-1.5">
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border border-line rounded-xl px-4 py-3 text-sm bg-paper focus:border-copper"
      >
        <option value="">Select an option</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
