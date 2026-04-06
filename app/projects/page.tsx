import Link from "next/link";
import css from "./projects.module.css";

const teamProjects = [
  {
    title: "CodeVibe Social Platform",
    description:
      "Social platform with clean UI and scalable frontend architecture.",
    highlights: [
      "Built responsive interface with React",
      "Integrated REST API",
      "Improved user experience and performance",
    ],
    links: [
      {
        label: "Backend Repository",
        href: "https://github.com/Diamond-FoxUA/codev1be-social-api",
      },
      {
        label: "Frontend Repository",
        href: "https://github.com/Diamond-FoxUA/codev1be-social-web",
      },
      {
        label: "Live Page",
        href: "https://codev1be-social-web.vercel.app/",
      },
    ],
  },
  {
    title: "ArtistsHub (WebTune)",
    description:
      "Music discovery platform focused on artist browsing and user-friendly interface.",
    highlights: [
      "Built as a team collaboration project",
      "Implemented responsive UI and filtering flow",
      "Improved discovery experience for music lovers",
    ],
    links: [
      {
        label: "Live Page",
        href: "https://t1mofii.github.io/WebTune/",
      },
    ],
  },
];

const personalProjects = [
  {
    title: "NoteHub",
    description:
      "Note management app focused on usability and clean UX.",
    highlights: [
      "Built full interface and functionality",
      "Implemented search and structured notes",
      "Optimized for responsive layout",
    ],
    links: [{ label: "Live Page", href: "https://09-auth-yy2f.vercel.app/" }],
  },
];

const services = [
  "Build responsive landing pages",
  "Create modern UI with React / Next.js",
  "Fix bugs and improve existing frontend",
  "Convert Figma design to code",
  "Improve performance and UX",
];

const Projects = () => {
  return (
    <section className={css.page}>
      <header className={css.header}>
        <p className={css.kicker}>Portfolio projects</p>
        <h1 className={css.title}>Team and personal work</h1>
        <p className={css.text}>
          A selected set of projects that show my teamwork, frontend and fullstack
          delivery skills.
        </p>
      </header>

      <section className={css.services}>
        <h2 className={css.sectionTitle}>What I can help you with</h2>
        <ul className={css.serviceList}>
          {services.map((service) => (
            <li key={service} className={css.serviceItem}>
              {service}
            </li>
          ))}
        </ul>
      </section>

      <div className={css.columns}>
        <section className={css.column}>
          <h2 className={css.sectionTitle}>Team projects</h2>
          {teamProjects.map((project) => (
            <article key={project.title} className={css.card}>
              <h3 className={css.cardTitle}>{project.title}</h3>
              <p className={css.cardText}>{project.description}</p>
              <ul className={css.pointList}>
                {project.highlights.map((point) => (
                  <li key={point} className={css.pointItem}>
                    {point}
                  </li>
                ))}
              </ul>
              <ul className={css.links}>
                {project.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className={css.link}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className={css.column}>
          <h2 className={css.sectionTitle}>Personal projects</h2>
          {personalProjects.map((project) => (
            <article key={project.title} className={css.card}>
              <h3 className={css.cardTitle}>{project.title}</h3>
              <p className={css.cardText}>{project.description}</p>
              <ul className={css.pointList}>
                {project.highlights.map((point) => (
                  <li key={point} className={css.pointItem}>
                    {point}
                  </li>
                ))}
              </ul>
              <ul className={css.links}>
                {project.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className={css.link}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      </div>

      <section className={css.cta}>
        <p className={css.ctaLead}>Looking for a frontend developer?</p>
        <p className={css.ctaText}>Available for freelance projects. Let&apos;s work together.</p>
      </section>
    </section>
  );
};

export default Projects;
