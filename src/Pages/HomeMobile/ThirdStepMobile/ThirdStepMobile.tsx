import styles from "./ThirdStepMobile.module.sass";
import TitleAndDescription from "../../../Components/TitleAndDescription/TitleAndDescription";
import React, {useEffect} from "react";
import data from "../../../data/addons.json";
import {AddonsInterface, ThirdStepInterface} from "../../Home/ThirdStep/ThirdStep";

export default function ThirdStepMobile(props: ThirdStepInterface){
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

    return(
        <>
            <section className={styles.container__mobile}>
                <TitleAndDescription
                    title="Pick add-ons"
                    description="Add-ons help enhance your gaming experience."
                />
                <div className={styles.container__mobile__options}>
                    {props.addons.map((element) => {
                        return (
                            <div key={element.name} className={element.selected ? `${styles.container__mobile__options_card_selected} ${styles.container__mobile__options_card}` : styles.container__mobile__options_card}>
                                <input
                                    type="checkbox"
                                    checked={element.selected}
                                    onChange={() => toggleSelection(element.id)}
                                    className={styles.container__mobile__options_card_input}
                                />
                                <div className={styles.container__mobile__options_card_div}>
                                    <h4 className={styles.container__mobile__options_card_div_name}>{element.name}</h4>
                                    <p className={styles.container__mobile__options_card_div_description}>
                                        {element.description}
                                    </p>
                                </div>
                                <span className={styles.container__mobile__options_card_div_price}>{!props.type ? `+${element.yearly}/yr`:`+${element.monthly}/mo`} </span>
                            </div>
                        );
                    })}
                </div>
            </section>
            <div className={styles.container__mobile__buttons}>
                <div className={styles.container__mobile__buttons_div}>
                    <span className={styles.container__mobile__buttons_div_back} onClick={() => props.setCurrent(2)}>Go Back</span>
                    <button className={styles.container__mobile__buttons_div_next} onClick={() => props.setCurrent(4)}>Next Step</button>
                </div>
            </div>
        </>
    )
}