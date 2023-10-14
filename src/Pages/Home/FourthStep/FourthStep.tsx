import TitleAndDescription from "../../../Components/TitleAndDescription/TitleAndDescription";
import styles from "./FourthStep.module.sass"
import React from "react";
import {AddonsInterface} from "../ThirdStep/ThirdStep";
import plans from "../../../data/plan.json"

interface FourthStepInterface {
    plan: string
    addons: AddonsInterface[]
    setCurrent: React.Dispatch<React.SetStateAction<number>>
    type: boolean
}

export default function FourthStep(props: FourthStepInterface){
    return(
        <section>
            <TitleAndDescription
                title="Finishing up"
                description="Double-check everything looks OK before confirming"
            />
            <div>
                <div>
                    <div>
                        <span>{props.plan}{props.type ? "(Monthly)" : "(Yearly)"}</span>
                        <span></span>
                    </div>
                    <span></span>
                </div>
                <div>
                    <div>

                    </div>
                </div>
            </div>
            <div>
                <span></span>
                <span></span>
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