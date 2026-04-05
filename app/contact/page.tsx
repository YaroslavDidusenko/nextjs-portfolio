import Link from "next/link";
import css from "./contact.module.css";

const contactLinks = [
  { label: "GitHub", href: "https://github.com/YaroslavDidusenko" },
  { label: "Telegram", href: "https://t.me/DeveloperYaroslav" },
  {
    label: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=itprogergoit@gmail.com",
  },
];

const Contact = () => {
  return (
    <section className={css.page}>
      <div className={css.card}>
        <p className={css.kicker}>Contact</p>
        <h1 className={css.title}>
          Let&apos;s build something strong together
        </h1>
        <p className={css.text}>
          I am open to team collaboration, frontend and fullstack roles, and
          interesting product tasks.
        </p>

        <ul className={css.links}>
          {contactLinks.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                className={css.link}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Contact;
