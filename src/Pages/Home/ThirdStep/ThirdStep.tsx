import styles from './ThirdStep.module.sass';
import TitleAndDescription from "../../../Components/TitleAndDescription/TitleAndDescription";
import data from '../../../data/addons.json';
import React, { useEffect, useState } from "react";

interface AddonsInterface {
    "id": number,
    "name": string,
    "selected": boolean,
    "description": string,
    "monthly": number,
    "yearly": number
}

export default function ThirdStep() {
    const [addons, setAddons] = useState<AddonsInterface[]>([]); // Inicialize addons como um array vazio

    function generateAddonsList() {
        const addonsObject: AddonsInterface[] = data.addons.map((element, index) => ({
            id: index,
            name: element.name,
            selected: false,
            description: element.description,
            monthly: element.monthly,
            yearly: element.yearly
        }));

        setAddons(addonsObject);
    }

    const toggleSelection = (itemId: number) => {
        setAddons((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId ? { ...item, selected: !item.selected } : item
            )
        );
    };

    useEffect(() => {
        generateAddonsList();
    }, []);
    console.log(addons)
    return (
        <section className={styles.container}>
            <TitleAndDescription
                title="Pick add-ons"
                description="Add-ons help enhance your gaming experience."
            />
            <div className={styles.container__options}>
                {addons.map((element) => {
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
                            <span className={styles.container__options_card_div_price}>+${element.yearly}/yr</span>
                        </div>
                    );
                })}
            </div>
            <div className={styles.container__buttons}>
                <div className={styles.container__buttons_div}>
                    <span className={styles.container__buttons_div_back}>Go Back</span>
                    <button className={styles.container__buttons_div_next}>Next Step</button>
                </div>
            </div>
        </section>
    );
}
