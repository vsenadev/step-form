import styles from './FinalStep.module.sass'
import { ReactComponent as Okay } from '../../../assets/images/icon-thank-you.svg';

export default function FinalStep(){
    return(
        <section className={styles.container}>
            <div className={styles.container__div}>
                <Okay/>
                <h2 className={styles.container__div_title}>Thank you!</h2>
                <p className={styles.container__div_text}>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
            </div>
        </section>
    )
}