import React from 'react';
import imgOracle from '../Free_Soda_Cans_Mockup_1.png';
import {Link} from "react-router-dom";

function PortfolioHome() {
    return (
        <div className={"portfolioHomeContainer"}>
            <div className={"leftImgPortfolio"}>
                <img src={imgOracle}/>
                <div style={{width:"45%"}}>
                    <h3>Oracle</h3>
                    <p>Oracle est une marque de bière artisanale produite dans la région
                    nord
                    dont l'ensemble de l'identité visuelle est inspiré de l'esthétique de l'atrologie et des signes du
                    zodiaque. On y retrouve donc différents produits à l'image de votre signe astrologique.</p>
                    <Link>Voir le projet</Link>
                </div>
            </div>
            <div className={"leftImgPortfolio"}>
                <div style={{width: "45%"}}>
                    <h3>Studio Fugu</h3>
                    <p>Le Studio Fugu est studio de localisation spécialisé dans les industries crétives et
                        audiovisuelles. L'envie était ici de matérialiser les services que le studio propose par un
                        personnage inspirant la sympathie et pouvant être un symbole reconnaissable de manière globale :
                        le poisson Fugu.</p>
                    <Link>Voir le projet</Link>
                </div>
                <img src={imgOracle}/>
            </div>
            <Link className={"portfolioLink"}>-> Portfolio</Link>
        </div>
    )
        ;
}

export default PortfolioHome;
