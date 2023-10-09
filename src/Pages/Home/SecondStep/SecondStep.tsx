import styles from './SecondStep.module.sass'
import TitleAndDescription from "../../../Components/TitleAndDescription/TitleAndDescription";
import data from '../../../data/plan.json'

export default function SecondStep(){
    return(
        <section className={styles.container}>
            <TitleAndDescription
                title="Select your plan"
                description="You have the option of monthly or yearly billing."
            />
            <div>
                {
                    data.plans.map((element) => {
                        console.log(element.image)
                        return(
                            <div>
                                <img src={element.image} alt="icon"/>
                            </div>
                            )
                    })
                }
            </div>

        </section>
    )
}