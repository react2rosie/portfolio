import React from "react";

import { getImageUrl } from "../../utils";

import styles from "./Hero.module.css";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.note}>
                <h1 className={styles.title}>Hi, I'm Roselin</h1>
                <p className={styles.para}>
                    I'm a front-end web developer with 2 years of experience using <b>React</b>. Reach out if you're interested in hiring my services!
                </p>
                <a href="mailto:react2rosie@gmail.com" className={styles.link}>Email me</a>
            </div>
            <img src={getImageUrl("hero/hero.png")} alt="Hero" className={styles.img} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};