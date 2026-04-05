import css from "./about.module.css";

const About = () => {
  return (
    <section className={css.page} aria-labelledby="about-heading">
      <div className={css.header}>
        <p className={css.kicker}>About me</p>
        <h1 id="about-heading" className={css.title}>
          Frontend-focused developer growing into fullstack
        </h1>
        <p className={css.text}>
          I started with HTML, CSS and JavaScript and later moved into React,
          Next.js and Node.js ecosystem. I like creating interfaces that feel good
          to use and codebases that are easy to scale.
        </p>
      </div>

      <div className={css.grid}>
        <article className={css.card}>
          <h2 className={css.sectionTitle}>What I do</h2>
          <ul className={css.list}>
            <li className={css.listItem}>
              Build responsive interfaces with component-driven architecture
            </li>
            <li className={css.listItem}>
              Integrate frontend with REST APIs and improve UX quality
            </li>
            <li className={css.listItem}>
              Collaborate with teams and ship production-ready features
            </li>
          </ul>
        </article>

        <article className={css.card}>
          <h2 className={css.sectionTitle}>Focus now</h2>
          <ul className={css.list}>
            <li className={css.listItem}>
              Strengthening backend fundamentals with Node.js
            </li>
            <li className={css.listItem}>
              Improving architecture thinking and clean code practices
            </li>
            <li className={css.listItem}>
              Delivering a professional portfolio and real case studies
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default About;
