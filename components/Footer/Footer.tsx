import css from "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <ul className={css.root}>
        <li>
          <p className={css.content}>
            Designed and built by Yaroslav Didusenko
          </p>
        </li>
        <li>
          <span className={css.content}>Open to frontend and fullstack roles</span>
        </li>
        <li>
          <span className={css.content}>Copyright © 2026</span>
        </li>
      </ul>
    </footer>
  );
}
