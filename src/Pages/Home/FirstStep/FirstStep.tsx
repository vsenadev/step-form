import styles from './FirstStep.module.sass'
import React, {useState} from "react";
import TitleAndDescription from "../../../Components/TitleAndDescription/TitleAndDescription";

interface FirstStepInterface {
    setCurrent: React.Dispatch<React.SetStateAction<number>>
}

export default function FirtsStep(props: FirstStepInterface){

    const [mouseHover, setMouseHover] = useState(false)
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    function changeMouseEvent(){
        mouseHover ? setMouseHover(false) : setMouseHover(true)
    }

    function nextStep(){
        if(name !== '' && mail !== '' && phoneNumber !== ''){
            props.setCurrent(2)
        }
    }

    return(
        <section className={styles.container}>
            <TitleAndDescription
                title="Personal info"
                description="Please provide your name, email address and phone number."
            />
            <div className={styles.container__form}>
                <div className={styles.container__form_div}>
                    <div className={styles.container__form_div_active}>
                        <label className={styles.container__form_div_active_label}>Name</label>
                        {
                            mouseHover && name === '' ?
                                <span className={styles.container__form_div_active_error}>This field is required</span>
                                :
                                ''
                        }
                    </div>
                    <input
                        type="text"
                        className={styles.container__form_div_input}
                        placeholder="e.g. Stephen King"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div className={styles.container__form_div}>
                    <div className={styles.container__form_div_active}>
                        <label className={styles.container__form_div_active_label}>Email Address</label>
                        {
                            mouseHover && mail === '' ?
                                <span className={styles.container__form_div_active_error}>This field is required</span>
                                :
                                ''
                        }
                    </div>
                    <input
                        type="text"
                        className={styles.container__form_div_input}
                        placeholder="e.g. stephenking@lorem.com"
                        value={mail}
                        onChange={(event) => setMail(event.target.value)}
                    />
                </div>
                <div className={styles.container__form_div}>
                    <div className={styles.container__form_div_active}>
                        <label className={styles.container__form_div_active_label}>Phone Number</label>
                        {
                            mouseHover && phoneNumber === '' ?
                                <span className={styles.container__form_div_active_error}>This field is required</span>
                                :
                                ''
                        }                    </div>
                    <input
                        type="text"
                        className={styles.container__form_div_input}
                        placeholder="e.g. +1 234 567 890"
                        value={phoneNumber}
                        onChange={(event) => setPhoneNumber(event.target.value)}
                    />
                </div>
            </div>
            <div className={styles.container__div}>
                <button
                    className={styles.container__div_button}
                    onMouseEnter={() => changeMouseEvent()}
                    onMouseLeave={() => changeMouseEvent()}
                    onClick={() => nextStep()}
                >
                    Next Step
                </button>
            </div>
        </section>
    )
}