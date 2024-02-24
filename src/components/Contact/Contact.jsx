import React from 'react';

import styles from "./Contact.module.css";

import { getImageUrl } from "../../utils";

export const Contact = () => {
    return (
        <footer id='contact'>
            <div className={styles.container}>
                <div className={styles.links}>
                    <ul>
                        <li>
                            <a href="mailto:react2rosie@gmail.com" className={styles.image}><img src={getImageUrl("contact/emailIcon.png")} alt="Email" /></a>
                            <a href="mailto:react2rosie@gmail.com" className={styles.link}>react2rosie@gmail.com</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/react2rosie" className={styles.image}><img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin" /></a>
                            <a href="https://www.linkedin.com/react2rosie" className={styles.link}>linkedin.com/react2rosie</a>
                        </li>
                        <li>
                            <a href="https://www.github.com/react2rosie" className={styles.image}><img src={getImageUrl("contact/githubIcon.png")} alt="Github" /></a>
                            <a href="https://www.github.com/react2rosie" className={styles.link}>github.com/react2rosie</a>
                        </li>
                    </ul>
                </div>
            </div>
            <h4 className={styles.copy}>Copyright &copy; react2rosie 2024. All Rights Reserved.</h4>
        </footer>
    )
}
