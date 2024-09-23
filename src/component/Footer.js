import React, {useState} from 'react';
import { NavLink } from 'react-router-dom'
import logoBehance from '../behance.png';
import logoLinkedin from '../logo-linkedin.png';
import logoInsta from '../instagram.png';

function Footer() {
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }
    return (
        <div className={"footerContainer"}>
            <div className={"footerHeader"}>
                <div>
                    <p style={{textAlign:"left",fontSize:"40px",textTransform:"uppercase",fontWeight:"bolder"}}>Besoin d'aide pour un projet ?</p>
                    <p style={{textAlign:"left",fontSize:"20px"}}>N'hésitez pas à me contacter</p>
                </div>
                <div className={"footerLink"}>
                    <div className={"logoRs"}>
                        <img src={logoBehance}/>
                        <img src={logoInsta}/>
                        <img src={logoLinkedin}/>
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
                </form>
            </div>
        </div>
    );
}

export default Footer;
