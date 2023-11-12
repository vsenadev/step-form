import {useState} from "react";
import {AddonsInterface} from "../Home/ThirdStep/ThirdStep";
import HeaderMobile from "../../Components/HeaderMobile/HeaderMobile";
import styles from "./HomeMobile.module.sass";
import FirtsStep from "./FirstStepMobile/FirstStepMobile";
import SecondStepMobile from "./SecondStepMobile/SecondStepMobile";
import ThirdStepMobile from "./ThirdStepMobile/ThirdStepMobile";
import FourthStepMobile from "../HomeMobile/FourthStepMobile/FourthStepMobile";
import FinalStepMobile from "../HomeMobile/FinalStepMobile/FinalStepMobile";

export default function HomeMobile(){
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
            <HeaderMobile
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
                        <SecondStepMobile
                            setCurrent={setCurrent}
                            setType={setType}
                            type={type}
                            plan={plan}
                            setPlan={setPlan}
                        />
                        :
                        current === 3 ?
                            <ThirdStepMobile
                                addons={addons}
                                setAddons={setAddons}
                                setCurrent={setCurrent}
                                type={type}
                            />
                            :
                            current === 4 ?
                                <FourthStepMobile
                                    addons={addons}
                                    plan={plan}
                                    setCurrent={setCurrent}
                                    type={type}
                                />
                                :current === 5 ?
                                    <FinalStepMobile
                                    />
                                    :
                                    ''

            }

        </main>
    )
}