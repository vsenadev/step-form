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
            <div className={styles.container__cards}>
                {
                    data.plans.map((element) => {
                        return(
                            <div className={styles.container__cards_div}>
                                <img src={element.image} alt="icon" className={styles.container__cards_div_image}/>
                                <div className={styles.container__cards_informations}>
                                    <h3 className={styles.container__cards_informations_title}>{element.name}</h3>
                                    <span className={styles.container__cards_informations_price}>${element.monthly}/mo</span>
                                </div>
                            </div>
                            )
                    })
                }
            </div>

        </section>
    )
}