import styles from './ThirdStep.module.sass';
import TitleAndDescription from "../../../Components/TitleAndDescription/TitleAndDescription";
import data from '../../../data/addons.json';
import React from "react";

export default function ThirdStep(){
    return(
        <section className={styles.container}>
            <TitleAndDescription
                title="Pick add-ons"
                description="Add-ons help enhance your gaming experience."
            />
            <div className={styles.container__options}>
                {
                    data.addons.map((element) => {
                        return(
                            <div key={element.name} className={styles.container__options_card}>
                                <input type={"checkbox"} className={styles.container__options_card_input}/>
                                <div className={styles.container__options_card_div}>
                                    <h4 className={styles.container__options_card_div_name}>{element.name}</h4>
                                    <p className={styles.container__options_card_div_description}>{element.description}</p>
                                </div>
                                <span className={styles.container__options_card_div_price}>+${element.yearly}/yr</span>
                            </div>
                        )
                    })
                }
            </div>
            <div className={styles.container__buttons}>
                <div className={styles.container__buttons_div}>
                    <span className={styles.container__buttons_div_back}>Go Back</span>
                    <button className={styles.container__buttons_div_next}>Next Step</button>
                </div>
            </div>
        </section>
    )
}