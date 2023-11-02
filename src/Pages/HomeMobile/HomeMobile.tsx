import Sidebar from "../../Components/Sidebar/Sidebar";
import {useState} from "react";
import {AddonsInterface} from "../Home/ThirdStep/ThirdStep";
import HeaderMobile from "../../Components/HeaderMobile/HeaderMobile";

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
        <section>
            <HeaderMobile current={current}/>
        </section>
    )
}