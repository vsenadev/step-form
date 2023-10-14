import styles from './ThirdStep.module.sass';
import TitleAndDescription from "../../../Components/TitleAndDescription/TitleAndDescription";
import data from '../../../data/addons.json';
import React, { useEffect, useState } from "react";

export interface AddonsInterface {
    "id": number
    "name": string
    "selected": boolean
    "description": string
    "monthly": number
    "yearly": number
}

interface ThirdStepInterface {
    addons: AddonsInterface[]
    setAddons: React.Dispatch<React.SetStateAction<AddonsInterface[]>>
    setCurrent: React.Dispatch<React.SetStateAction<number>>
    type: boolean
}

export default function ThirdStep(props: ThirdStepInterface) {


    function generateAddonsList() {
        const addonsObject: AddonsInterface[] = data.addons.map((element, index) => ({
            id: index,
            name: element.name,
            selected: false,
            description: element.description,
            monthly: element.monthly,
            yearly: element.yearly
        }));

        props.setAddons(addonsObject);
    }

    const toggleSelection = (itemId: number) => {
        props.setAddons((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId ? { ...item, selected: !item.selected } : item
            )
        );
    };

    useEffect(() => {
        generateAddonsList();
    }, []);

    return (
        <section className={styles.container}>
            <TitleAndDescription
                title="Pick add-ons"
                description="Add-ons help enhance your gaming experience."
            />
            <div className={styles.container__options}>
                {props.addons.map((element) => {
                    return (
                        <div key={element.name} className={element.selected ? `${styles.container__options_card_selected} ${styles.container__options_card}` : styles.container__options_card}>
                            <input
                                type="checkbox"
                                checked={element.selected}
                                onChange={() => toggleSelection(element.id)}
                                className={styles.container__options_card_input}
                            />
                            <div className={styles.container__options_card_div}>
                                <h4 className={styles.container__options_card_div_name}>{element.name}</h4>
                                <p className={styles.container__options_card_div_description}>
                                    {element.description}
                                </p>
                            </div>
                            <span className={styles.container__options_card_div_price}>{!props.type ? `+${element.yearly}/yr`:`+${element.monthly}/mo`} </span>
                        </div>
                    );
                })}
            </div>
            <div className={styles.container__buttons}>
                <div className={styles.container__buttons_div}>
                    <span className={styles.container__buttons_div_back} onClick={() => props.setCurrent(2)}>Go Back</span>
                    <button className={styles.container__buttons_div_next} onClick={() => props.setCurrent(4)}>Next Step</button>
                </div>
            </div>
        </section>
    );
}
