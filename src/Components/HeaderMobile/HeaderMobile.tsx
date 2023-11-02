import styles from './HeaderMobile.module.sass'
import data from "../../data/step.json";

interface HeaderInterface {
    current: number
}

export default function HeaderMobile(props: HeaderInterface){
    return(
        <header className={styles.container}>
            <div className={styles.container__steps}>
                {
                    data.steps.map((element) => {
                        return(
                            <div className={styles.container__steps_div} key={element.number}>
                                <span className={props.current === element.number ? `${styles.container__steps_div_number_current} ${styles.container__steps_div_number}` : styles.container__steps_div_number}>{element.number}</span>
                            </div>
                        )
                    })
                }
            </div>
        </header>
    )
}