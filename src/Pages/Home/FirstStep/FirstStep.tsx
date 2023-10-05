import styles from './FirstStep.module.sass'

export default function FirtsStep(){
    return(
        <section className={styles.container}>
            <div className={styles.container__header}>
                <h1 className={styles.container__header_title}>Personal info</h1>
                <p className={styles.container__header_text}>Please provide your name, email address and phone number.</p>
            </div>
            <div className={styles.container__form}>
                <div className={styles.container__form_div}>
                    <label className={styles.container__form_div_label}>Name</label>
                    <input
                        type="text"
                        className={styles.container__form_div_input}
                        placeholder="e.g. Stephen King"
                    />
                </div>
                <div className={styles.container__form_div}>
                    <label className={styles.container__form_div_label}>Email Address</label>
                    <input
                        type="text"
                        className={styles.container__form_div_input}
                        placeholder="e.g. stephenking@lorem.com"
                    />
                </div>
                <div className={styles.container__form_div}>
                    <label className={styles.container__form_div_label}>Phone Number</label>
                    <input
                        type="text"
                        className={styles.container__form_div_input}
                        placeholder="e.g. +1 234 567 890"
                    />
                </div>
            </div>
            <div className={styles.container__div}>
                <button className={styles.container__div_button}>Next Step</button>
            </div>
        </section>
    )
}