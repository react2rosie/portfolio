import React from "react";

import { getImageUrl } from "../../utils";

import styles from "./About.module.css";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>ABOUT</h2>
            <div className={styles.content}>
                <img src={getImageUrl("hero/img1.png")} alt="img1" className={styles.img} />
                <div className={styles.note}>
                    <h3>Front-end Developer</h3>
                    <p>I am a front-end developer with experience in creating user-friendly and visually appealing websites, which are also responsive, ensuring an optimal user experience across all screen sizes.</p>
                </div>
            </div>
        </section>
    );
};