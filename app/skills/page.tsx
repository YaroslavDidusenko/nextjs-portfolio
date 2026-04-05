import css from "./skills.module.css";

const skillGroups = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript"],
  },
  {
    title: "Backend",
    items: ["Node.js", "REST API", "Express basics", "Authentication basics"],
  },
  {
    title: "Tools & Workflow",
    items: ["Git", "GitHub", "Vercel", "Figma", "Responsive design", "Teamwork"],
  },
];

const Skills = () => {
  return (
    <section className={css.page}>
      <header className={css.header}>
        <p className={css.kicker}>Professional skillset</p>
        <h1 className={css.title}>Technology stack and workflow</h1>
        <p className={css.text}>
          I build responsive interfaces, connect frontend with APIs and deliver clean
          user experience with reliable code quality.
        </p>
      </header>

      <div className={css.grid}>
        {skillGroups.map((group) => (
          <article key={group.title} className={css.card}>
            <h2 className={css.cardTitle}>{group.title}</h2>
            <ul className={css.list}>
              {group.items.map((item) => (
                <li key={item} className={css.item}>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
