import TitleAndDescription from "../../../Components/TitleAndDescription/TitleAndDescription";
import styles from "./FourthStep.module.sass"
import React, {useEffect, useState} from "react";
import {AddonsInterface} from "../ThirdStep/ThirdStep";
import plans from "../../../data/plan.json"

export interface FourthStepInterface {
    plan: string
    addons: AddonsInterface[]
    setCurrent: React.Dispatch<React.SetStateAction<number>>
    type: boolean
}

export default function FourthStep(props: FourthStepInterface){

    const selectedPlan = plans.plans.find(planObj => planObj.name === props.plan);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        function calculateTotal() {
            let newTotal = 0;

            if (props.type && selectedPlan !== undefined) {
                newTotal += selectedPlan.monthly;
                props.addons.forEach((element) => {
                    if (element.selected) {
                        newTotal += element.monthly;
                    }
                });
            } else if (!props.type && selectedPlan !== undefined) {
                newTotal += selectedPlan.yearly;
                props.addons.forEach((element) => {
                    if (element.selected) {
                        newTotal += element.yearly;
                    }
                });
            }

            setTotal(newTotal);
        }

        calculateTotal();
    }, [props.type, selectedPlan, props.addons]);

    return(
        <section className={styles.container}>
            <TitleAndDescription
                title="Finishing up"
                description="Double-check everything looks OK before confirming"
            />
            <div className={styles.container__box}>
                <div className={styles.container__box_plan}>
                    <div className={styles.container__box_plan_desc}>
                        <span className={styles.container__box_plan_desc_span}>{props.plan} {props.type ? "(Monthly)" : "(Yearly)"}</span>
                        <span onClick={() => props.setCurrent(2)} className={styles.container__box_plan_desc_change}>Change</span>
                    </div>
                    <span className={styles.container__box_plan_price}>${props.type ? selectedPlan?.monthly : selectedPlan?.yearly}{props.type ? "/mo" : "/yr"}</span>
                </div>
                <hr/>
                <div className={styles.container__box_addons}>
                        {
                            props.addons.map((element: AddonsInterface) => {
                                if(element.selected){
                                    return(
                                        <div key={element.name} className={styles.container__box_addons_div}>
                                            <span className={styles.container__box_addons_div_desc}>{element.name}</span>
                                            <span className={styles.container__box_addons_div_price}>+${props.type ? element.monthly : element.yearly}{props.type ? "/mo" : "/yr"}</span>
                                        </div>
                                    )
                                }

                            })
                        }
                </div>
            </div>
            <div className={styles.container__total}>
                <span>Total {props.type ? "(per month)" : "(per year)"}</span>
                <span className={styles.container__total_price}>${total}{props.type ? "/mo" : "/yr"}</span>
            </div>
            <div className={styles.container__buttons}>
                <div className={styles.container__buttons_div}>
                    <span className={styles.container__buttons_div_back} onClick={() => props.setCurrent(3)}>Go Back</span>
                    <button className={styles.container__buttons_div_next} onClick={() => props.setCurrent(5)}>Confirm</button>
                </div>
            </div>
        </section>
    )
}