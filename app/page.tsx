import css from "./page.module.css";
import Link from "next/link";

const Home = () => {
  const previewSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "TypeScript",
    "Next.js",
  ];

  return (
    <section className={css.home}>
      <div className={css.heroGrid}>
        <div className={css.heroContent}>
          <p className={css.kicker}>Frontend / Fullstack Developer</p>
          <h1 className={css.title}>
            Building modern web products with clean UX and reliable architecture.
          </h1>
          <p className={css.text}>
            Hi, I&apos;m <span className={css.span}>Yaroslav</span>. I create web
            applications with focus on performance, maintainable code and a polished
            user interface.
          </p>
          <div className={css.actions}>
            <Link href="/projects" className={css.primaryAction}>
              View projects
            </Link>
            <Link href="/contact" className={css.secondaryAction}>
              Contact me
            </Link>
          </div>
        </div>
        <aside className={css.heroCard}>
          <h2 className={css.cardTitle}>Core stack</h2>
          <ul className={css.skillPreviewList}>
            {previewSkills.map((skill) => (
              <li key={skill} className={css.skillPreviewItem}>
                {skill}
              </li>
            ))}
          </ul>
          <p className={css.cardText}>
            Production-minded development from UI to API, with focus on teamwork and
            delivery quality.
          </p>
        </aside>
      </div>

      <div className={css.about}>
        <h2 className={css.aboutTitle}>Who I am</h2>
        <p className={css.aboutText}>
          I build modern frontend applications with focus on performance, clean code,
          and user experience.
        </p>
        <p className={css.aboutText}>
          I specialize in creating responsive interfaces, integrating APIs, and
          improving existing projects.
        </p>
        <p className={css.aboutText}>
          I&apos;m continuously improving my skills and working on real-world
          projects.{" "}
          <Link href="/about" className={css.link}>
            Learn more about my experience
          </Link>
          .
        </p>
      </div>
    </section>
  );
};
export default Home;
