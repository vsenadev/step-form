import styles from './Home.module.sass'
import Sidebar from "../../Components/Sidebar/Sidebar";

export default function Home(){
    return(
        <main className={styles.container}>
            <Sidebar/>
        </main>
    )
}