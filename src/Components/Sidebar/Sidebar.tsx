import styles from './Sidebar.module.sass';
import data from '../../data/step.json';

interface SidebarInterface {
    current: number
}

export default function Sidebar(props: SidebarInterface){

    return(
        <aside className={styles.container}>
            <div className={styles.container__steps}>
                {
                    data.steps.map((element) => {
                        return(
                            <div className={styles.container__steps_div} key={element.number}>
                                <span className={props.current === element.number ? `${styles.container__steps_div_number_current} ${styles.container__steps_div_number}` : styles.container__steps_div_number}>{element.number}</span>
                                <div className={styles.container__steps_div_description}>
                                    <span className={styles.container__steps_div_description_step}>STEP {element.number}</span>
                                    <h2 className={styles.container__steps_div_number_description_name}>{element.name.toUpperCase()}</h2>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </aside>
    )
}