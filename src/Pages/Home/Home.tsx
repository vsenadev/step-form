import styles from './Home.module.sass'
import Sidebar from "../../Components/Sidebar/Sidebar";
import {useState} from "react";
import FirtsStep from "./FirstStep/FirstStep";

export default function Home(){

    const [current, setCurrent] = useState(1);

    return(
        <main className={styles.container}>
            <Sidebar
                current={current}
            />
            <FirtsStep/>
        </main>
    )
}