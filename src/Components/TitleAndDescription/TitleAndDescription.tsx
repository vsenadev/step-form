import styles from "../../Pages/Home/FirstStep/FirstStep.module.sass";
import React from "react";

interface TitleAndDescriptionInterface {
    title: string
    description: string
}

export default function TitleAndDescription(props: TitleAndDescriptionInterface){
    return(
        <div className={styles.container__header}>
            <h1 className={styles.container__header_title}>{props.title}</h1>
            <p className={styles.container__header_text}>{props.description}</p>
        </div>
    )
}