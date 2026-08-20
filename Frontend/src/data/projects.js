// Add new projects here. Each object renders as a ProjectCard automatically.
// liveUrl / githubUrl: leave as null if not publicly available — the card
// will simply hide that button rather than showing a broken/fake link.

const projects = [
  {
    id: "movers-packers",
    name: "Movers & Packers logistics platform",
    category: "Internship project",
    isInternship: true,
    company: "Ypsilon IT Solutions Pvt Ltd",
    description:
      "A real-world logistics and relocation web application built during my internship — covering booking workflows, role-based access, admin tooling and partner-side functionality.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    liveUrl: "https://movers-packers-platform.vercel.app/",
    githubUrl: "https://github.com/nandanmaliofficial/movers-packers-platform",
    caseStudy: {
      overview:
        "A booking and operations platform for a movers-and-packers business, connecting customers, partners and admins in one system.",
      problem:
        "The business needed a way to take bookings online, assign them to partners and vehicles, and give admins visibility into every stage of a move.",
      role:
        "I worked as part of the development team on the React frontend and Node/Express backend, building features under senior guidance rather than owning the product independently.",
      tech: "React.js, Node.js, Express.js, MongoDB, REST APIs",
      features: [
        "Customer booking flow with service and vehicle selection",
        "Role-based views for customers, partners and admins",
        "Admin dashboard for managing bookings and drivers",
        "Partner-side screens for accepting and tracking jobs",
      ],
      approach:
        "Features were scoped from real business requirements, built with reusable React components on the frontend and REST endpoints backed by MongoDB on the backend.",
      challenges:
        "Coordinating state across three different user roles, and keeping booking data consistent as it moved between customer, partner and admin views.",
      learned:
        "How production role-based systems are structured, how to design REST APIs around real workflows, and how to work inside an existing codebase and team process.",
      outcome:
        "Delivered working booking, role-based and admin functionality as part of the internship team's larger application.",
    },
  },
 ];

export default projects;
