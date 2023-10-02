import styles from './Sidebar.module.sass';
import data from '../../data/step.json';

export default function Sidebar(){
    return(
        <aside className={styles.container}>
            <div className={styles.container__steps}>
                {
                    data.steps.map((element) => {
                        return(
                            <div key={element.number}>
                                <div>
                                    <span>{element.number}</span>
                                </div>
                                <div>
                                    <span>STEP {element.number}</span>
                                    <h2>{element.name.toUpperCase()}</h2>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </aside>
    )
}