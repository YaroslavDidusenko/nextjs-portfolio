import Link from "next/link";
import css from "./projects.module.css";

const teamProjects = [
  {
    title: "CodeVibe Social Platform",
    description:
      "Team project: social platform with separated frontend and backend architecture.",
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
];

const personalProjects = [
  {
    title: "NoteHub",
    description:
      "Personal project: note management app with clean interface, search and organized notes experience.",
    links: [{ label: "Live Page", href: "https://06-notehub-nextjs-rho-lime.vercel.app/" }],
  },
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

      <div className={css.columns}>
        <section className={css.column}>
          <h2 className={css.sectionTitle}>Team projects</h2>
          {teamProjects.map((project) => (
            <article key={project.title} className={css.card}>
              <h3 className={css.cardTitle}>{project.title}</h3>
              <p className={css.cardText}>{project.description}</p>
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
    </section>
  );
};

export default Projects;
