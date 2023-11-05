import React from "react";
import {styled, Switch} from "@mui/material";
import TitleAndDescription from "../../../Components/TitleAndDescription/TitleAndDescription";
import styles from "./SecondStepMobile.module.sass";
import data from "../../../data/plan.json";
import Stack from "@mui/material/Stack";

interface SecondStepInterface {
    setCurrent: React.Dispatch<React.SetStateAction<number>>
    type: boolean
    setType: React.Dispatch<React.SetStateAction<boolean>>
    plan: string
    setPlan: React.Dispatch<React.SetStateAction<string>>
}

const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
        '& .MuiSwitch-thumb': {
            width: 15,
        },
        '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(9px)',
        },
    },
    '& .MuiSwitch-switchBase': {
        padding: 2,
        '&.Mui-checked': {
            transform: 'translateX(12px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? 'hsl(213, 96%, 18%)' : 'hsl(213, 96%, 18%)',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
        width: 12,
        height: 12,
        borderRadius: 6,
        transition: theme.transitions.create(['width'], {
            duration: 200,
        }),
    },
    '& .MuiSwitch-track': {
        borderRadius: 16 / 2,
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? 'hsl(213, 96%, 18%)' : 'hsl(213, 96%, 18%)',
        boxSizing: 'border-box',
    },
}));
export default function SecondStepMobile(props: SecondStepInterface){
    return(
        <>
            <section className={styles.container_mobile}>
                <TitleAndDescription
                    title="Select your plan"
                    description="You have the option of monthly or yearly billing."
                />
                <div className={styles.container_mobile__cards_mobile}>
                    {
                        data.plans.map((element) => {
                            return(
                                <div className={props.plan === element.name ? `${styles.container_mobile__cards_mobile_div_mobile} ${styles.container_mobile__cards_mobile_selected}` : styles.container_mobile__cards_mobile_div_mobile} onClick={() => props.setPlan(element.name)} key={element.name}>
                                    <img src={element.image} alt="icon" className={styles.container_mobile__cards_mobile_div_mobile_image_mobile}/>
                                    <div className={styles.container_mobile__cards_mobile_informations}>
                                        <h3 className={styles.container_mobile__cards_mobile_informations_title}>{element.name}</h3>
                                        <span className={styles.container_mobile__cards_mobile_informations_price}>{props.type ? `${element.monthly}/mo` : `${element.yearly}/yr`}</span>
                                        <span className={styles.container_mobile__cards_mobile_informations_free}>{ props.type ? '': `${element.free} months free`}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={styles.container_mobile__toggle}>
                    <Stack direction="row" spacing={3} alignItems="center">
                        <span className={props.type ? styles.container__toggle_name : styles.container__toggle_opacity}>Monthly</span>
                        <AntSwitch checked={!props.type}
                                   onClick={() => props.setType(!props.type)}
                                   inputProps={{ 'aria-label': 'ant design' }}/>
                        <span className={props.type ? styles.container__toggle_name : styles.container__toggle_opacity}>Yearly</span>
                    </Stack>
                </div>
            </section>
            <div className={styles.container_mobile__buttons}>
                <div className={styles.container_mobile__buttons_div}>
                    <span className={styles.container_mobile__buttons_div_back} onClick={() => props.setCurrent(1)}>Go Back</span>
                    <button className={styles.container_mobile__buttons_div_next} onClick={() => props.setCurrent(3)}>Next Step</button>
                </div>
            </div>
        </>

    )
}