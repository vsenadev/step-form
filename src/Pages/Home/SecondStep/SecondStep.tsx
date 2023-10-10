import styles from './SecondStep.module.sass'
import TitleAndDescription from "../../../Components/TitleAndDescription/TitleAndDescription";
import data from '../../../data/plan.json'
import Stack from '@mui/material/Stack';
import {styled, Switch} from "@mui/material";
import React from "react";

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


export default function SecondStep(props: SecondStepInterface){

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
                            <div className={props.plan === element.name ? `${styles.container__cards_div} ${styles.container__cards_selected}` : styles.container__cards_div} onClick={() => props.setPlan(element.name)} key={element.name}>
                                <img src={element.image} alt="icon" className={styles.container__cards_div_image}/>
                                <div className={styles.container__cards_informations}>
                                    <h3 className={styles.container__cards_informations_title}>{element.name}</h3>
                                    <span className={styles.container__cards_informations_price}>{props.type ? `${element.monthly}/mo` : `${element.yearly}/yr`}</span>
                                    <span className={styles.container__cards_informations_free}>{ props.type ? '': `${element.free} months free`}</span>
                                </div>
                            </div>
                            )
                    })
                }
            </div>
            <div className={styles.container__toggle}>
                <Stack direction="row" spacing={3} alignItems="center">
                    <span className={props.type ? styles.container__toggle_name : styles.container__toggle_opacity}>Monthly</span>
                    <AntSwitch defaultChecked
                               onClick={() => props.setType(!props.type)}
                               inputProps={{ 'aria-label': 'ant design' }}/>
                    <span className={!props.type ? styles.container__toggle_name : styles.container__toggle_opacity}>Yearly</span>
                </Stack>
            </div>
            <div className={styles.container__buttons}>
                <div className={styles.container__buttons_div}>
                    <span className={styles.container__buttons_div_back} onClick={() => props.setCurrent(1)}>Go Back</span>
                    <button className={styles.container__buttons_div_next} onClick={() => props.setCurrent(3)}>Next Step</button>
                </div>
            </div>
        </section>
    )
}