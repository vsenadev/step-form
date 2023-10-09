import styles from './Home.module.sass'
import Sidebar from "../../Components/Sidebar/Sidebar";
import {useState} from "react";
import FirtsStep from "./FirstStep/FirstStep";
import SecondStep from "./SecondStep/SecondStep";
import ThirdStep from "./ThirdStep/ThirdStep";
import FourthStep from "./FourthStep/FourthStep";

export default function Home(){

    const [current, setCurrent] = useState(1);

    return(
        <main className={styles.container}>
            <Sidebar
                current={current}
            />
            {
                current === 1 ?
                    <FirtsStep
                        setCurrent={setCurrent}
                    />
                    :
                    current === 2 ?
                        <SecondStep />
                        :
                        current === 3 ?
                            <ThirdStep />
                            :
                            <FourthStep/>
            }
        </main>
    )
}