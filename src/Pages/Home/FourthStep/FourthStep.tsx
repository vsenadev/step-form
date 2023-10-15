import TitleAndDescription from "../../../Components/TitleAndDescription/TitleAndDescription";
import styles from "./FourthStep.module.sass"
import React, {useEffect} from "react";
import {AddonsInterface} from "../ThirdStep/ThirdStep";
import plans from "../../../data/plan.json"

interface FourthStepInterface {
    plan: string
    addons: AddonsInterface[]
    setCurrent: React.Dispatch<React.SetStateAction<number>>
    type: boolean
}

export default function FourthStep(props: FourthStepInterface){

    const selectedPlan = plans.plans.find(planObj => planObj.name === props.plan);
    let total = 0

    function calculateTotal() {
       if(props.type && selectedPlan !== undefined){
           total += selectedPlan.monthly
           props.addons.forEach((element) => {
               if(element.selected){
                   total += element.monthly
               }
           })

       }else if(!props.type && selectedPlan !== undefined){
           total += selectedPlan.yearly
           props.addons.forEach((element) => {
               if(element.selected){
                   total += element.yearly
               }
           })
       }
    }
    console.log(selectedPlan?.monthly)
    useEffect(() => {
        calculateTotal()
    }, [selectedPlan])
    console.log(total)
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
                        <span>{props.type ? selectedPlan?.monthly : selectedPlan?.yearly}</span>
                    </div>
                    <span>Change</span>
                </div>
                <div>
                        {
                            props.addons.map((element) => {
                                if(element.selected){
                                    return(
                                        <div key={element.name}>
                                            <span>{element.name}</span>
                                            <span>{props.type ? element.monthly : element.yearly}</span>
                                        </div>
                                    )
                                }

                            })
                        }
                </div>
            </div>
            <div>
                <span>Total {props.type ? "(per month)" : "(per year)"}</span>
                <span>{total}</span>
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