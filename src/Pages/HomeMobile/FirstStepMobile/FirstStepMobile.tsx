import styles from './FirstStepMobile.module.sass'
import React from "react";
import TitleAndDescription from "../../../Components/TitleAndDescription/TitleAndDescription";

interface FirstStepInterface {
    setCurrent: React.Dispatch<React.SetStateAction<number>>
    name: string
    setName: React.Dispatch<React.SetStateAction<string>>
    mail: string
    setMail: React.Dispatch<React.SetStateAction<string>>
    phoneNumber: string
    setPhoneNumber: React.Dispatch<React.SetStateAction<string>>
    mouseHover: boolean
    setMouseHover: React.Dispatch<React.SetStateAction<boolean>>
}

export default function FirtsStep(props: FirstStepInterface){

    function changeMouseEvent(){
        props.mouseHover ? props.setMouseHover(false) : props.setMouseHover(true)
    }

    function nextStep(){
        if(props.name !== '' && props.mail !== '' && props.phoneNumber !== ''){
            props.setCurrent(2)
        }
    }

    return(
        <>
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
                                props.mouseHover && props.name === '' ?
                                    <span className={styles.container__form_div_active_error}>This field is required</span>
                                    :
                                    ''
                            }
                        </div>
                        <input
                            type="text"
                            className={styles.container__form_div_input}
                            placeholder="e.g. Stephen King"
                            value={props.name}
                            onChange={(event) => props.setName(event.target.value)}
                        />
                    </div>
                    <div className={styles.container__form_div}>
                        <div className={styles.container__form_div_active}>
                            <label className={styles.container__form_div_active_label}>Email Address</label>
                            {
                                props.mouseHover && props.mail === '' ?
                                    <span className={styles.container__form_div_active_error}>This field is required</span>
                                    :
                                    ''
                            }
                        </div>
                        <input
                            type="text"
                            className={styles.container__form_div_input}
                            placeholder="e.g. stephenking@lorem.com"
                            value={props.mail}
                            onChange={(event) => props.setMail(event.target.value)}
                        />
                    </div>
                    <div className={styles.container__form_div}>
                        <div className={styles.container__form_div_active}>
                            <label className={styles.container__form_div_active_label}>Phone Number</label>
                            {
                                props.mouseHover && props.phoneNumber === '' ?
                                    <span className={styles.container__form_div_active_error}>This field is required</span>
                                    :
                                    ''
                            }                    </div>
                        <input
                            type="text"
                            className={styles.container__form_div_input}
                            placeholder="e.g. +1 234 567 890"
                            value={props.phoneNumber}
                            onChange={(event) => props.setPhoneNumber(event.target.value)}
                        />
                    </div>
                </div>
            </section>
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
        </>

    )
}