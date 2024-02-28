import React from 'react'

import { getImageUrl } from "../../utils";

import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
    project: { title, imageSrc, description, skills, demo }
}) => {
    return (
        <div className={styles.container}>
            <img src={getImageUrl(imageSrc)} alt={`image of ${title}`} />
            <h3>{title}</h3>
            <p>{description}</p>
            <div className={styles.highlights}>
                <ul>
                    {skills.map((skill, id) => {
                        return (
                            <li key={id}>{skill}</li>)
                    })}
                </ul>
                <div className={styles.demo}>
                    <a href={demo} >Demo</a>
                    <a href={demo} >Source code</a>
                </div>
            </div>
        </div>
    )
}
