"use client";
import styles from "./styles.module.scss";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.text}>
        <h3 className={styles.textH3}>
          Отзывы и пожелания о данном приложении пишите:
        </h3>
        <div className={styles.icon}>
          <a className="icon" href="https://t.me/elektrikcss">
            <i
              className={styles.faGithub}
              aria-hidden="true"
              title="Andrei Bartsevich, Telegram"
            >
              <FontAwesomeIcon icon={faTelegram} />
            </i>
          </a>
          <a
            className="icon"
            href="https://www.linkedin.com/in/андрей-барцевич-935588260"
          >
            <i
              className="fa-brands fa-linkedin"
              aria-hidden="true"
              title="Andrei Bartsevich, LinkedIn Profile"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </i>
          </a>
          <a className="icon" href="#">
            <i
              className="fa-brands fa-instagram"
              aria-hidden="true"
              title="Prime99, WhatApp"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </i>
          </a>
          <a className="icon" href="https://t.me/elektrikcss">
            <i
              className={styles.faGithub}
              aria-hidden="true"
              title="Prime99, Telegram"
            >
              <FontAwesomeIcon icon={faGithub} />
            </i>
          </a>
        </div>
      </section>
    </div>
  );
}
