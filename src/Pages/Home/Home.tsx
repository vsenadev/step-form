import styles from './Home.module.sass'
import Sidebar from "../../Components/Sidebar/Sidebar";
import {useState} from "react";
import FirtsStep from "./FirstStep/FirstStep";
import SecondStep from "./SecondStep/SecondStep";
import ThirdStep, {AddonsInterface} from "./ThirdStep/ThirdStep";
import FourthStep from "./FourthStep/FourthStep";

export default function Home(){

    const [current, setCurrent] = useState(1);
    const [mouseHover, setMouseHover] = useState(false)
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [type, setType] = useState(false)
    const [plan, setPlan] = useState('Arcade')
    const [addons, setAddons] = useState<AddonsInterface[]>([]);

    return(
        <main className={styles.container}>
            <Sidebar
                current={current}
            />
            {
                current === 1 ?
                    <FirtsStep
                        setCurrent={setCurrent}
                        mail={mail}
                        mouseHover={mouseHover}
                        name={name}
                        phoneNumber={phoneNumber}
                        setMail={setMail}
                        setMouseHover={setMouseHover}
                        setName={setName}
                        setPhoneNumber={setPhoneNumber}
                    />
                    :
                    current === 2 ?
                        <SecondStep
                            setCurrent={setCurrent}
                            setType={setType}
                            type={type}
                            plan={plan}
                            setPlan={setPlan}
                        />
                        :
                        current === 3 ?
                            <ThirdStep
                                addons={addons}
                                setAddons={setAddons}                                setCurrent={setCurrent}

                                type={type}
                            />
                            :
                            <FourthStep
                             addons={addons}
                             plan={plan}
                             setCurrent={setCurrent}
                             type={type}
                            />
            }
        </main>
    )
}