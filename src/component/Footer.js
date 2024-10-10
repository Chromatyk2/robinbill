import React, {useState} from 'react';
import { NavLink } from 'react-router-dom'
import logoBehance from '../Behance.svg';
import logoLinkedin from '../Linkedin.svg';
import logoInsta from '../Instagram.svg';

function Footer() {
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }
    return (
        <div id={"footerAnchor"} className={"footerContainer"}>
            <div className={"footerHeader"}>
                <div>
                    <p style={{textAlign:"left",fontSize:"43px",textTransform:"uppercase",fontWeight:"600"}}>Besoin d'aide pour un projet ?</p>
                    <p style={{marginTop:"-20px",filter:"opacity(75%)",textAlign:"left",fontSize:"20px"}}>N'hésitez pas à me contacter</p>
                </div>
                <div className={"footerLink"}>
                    <div className={"logoRs"}>
                        <a target={"_blank"} href={"https://www.behance.net/robinbillaudel"}><img src={logoBehance}/></a>
                        <a target={"_blank"} href={"https://www.linkedin.com/in/robin-billaudel-97b065149/"}><img src={logoLinkedin}/></a>
                        <a target={"_blank"} href={"https://www.instagram.com/robinbill_"}><img src={logoInsta}/></a>
                    </div>
                    <a target={"_blank"} href="mailto:billaudelrobin@gmail.com"> billaudelrobin@gmail.com</a>
                    <a target={"_blank"} href="tel:0607179630">06.07.17.96.30</a>
                </div>
            </div>
            <div className={"footerForm"}>
                <form>
                    <input className={"inputText"} type={"text"} placeholder={"Entrez votre nom"}/>
                    <input className={"inputText"} type={"text"} placeholder={"Entrez votre adresse mail"}/>
                    <textarea className={"inputTextArea"} placeholder={"Entrez votre message"}/>
                    <input className={"inputSubmit"} type={"submit"}/>
                </form>
            </div>
        </div>
    );
}

export default Footer;
