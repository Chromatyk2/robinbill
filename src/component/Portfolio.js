import React, {useEffect, useState} from 'react';
import imgIa from '../Ia Horizon - 1.png';
import imgOracle from '../Oracle - 1.png';
import imgRobin from '../Robin Bill - 1.png';
import imgFugu from '../Studio Fugu - 1.png';
import imgYokai from '../Yokai Expo - 1.png';
import pictoFleche from '../Flèche 2.png';
import {Link} from "react-router-dom";
import PictoFleche from "../Flèche 1.png";

function Portfolio() {
    const [isDone, setIsDone] = useState(false)
    const [firstProject, setFirstProject] = useState(null)
    const [secondProject, setSecondProject] = useState(null)
    const [projects] = useState(
        [
            { name:'IA Horizon', image: imgIa, text: 'IA Horizon est un événement professionnel dont l’objectif est de traiter des questions de l’utilisation des intelligences artificielles actuelles et futures dans les entreprises, notamment créatives. Un salon permet aux professionnel·les s’intéressant au sujet de rencontrer les entreprises et start-up innovantes dans ce domaine.\n' },
            { name:'Yokai Expo', image: imgYokai, text: 'Yokai Expo est une exposition destiné aux familles afin de découvrir le folklore et la mythologie japonaise en mêlant art traditionnels et pop culture. Les Yokai sont des créatures fantastiques tout autant présentes dans l’histoire de l’archipel que dans la culture populaire contemporaine.' },
            { name:'Robin Bill', image: imgRobin, text: 'Depuis début 2023, je stream régulièrement sur ma chaîne Twitch personnel pour partager ma passion pour les jeux vidéos indépendants. Libéré de toutes contraintes, j’ai pu explorer une identité visuelle atmosphérique et nostalgique accompagné d’un logotype inspiré du début des années 2000.' },
            { name: 'Oracle', image: imgOracle, text: 'Oracle est une marque de bière artisanale produite dans la région nord dont l’ensemble de l’identité visuelle est inspiré de l’esthétique de l’astrologie et des signes du zodiaque. On y retrouve donc différents produits à l’image de votre signe astrologique.'},
            { name: 'Studio Fugu', image: imgFugu, text: 'Le Studio Fugu est studio de localisation spécialisé dans les industries créatives et audiovisuelles. \n' + 'L\'envie était ici de matérialiser les services que le studio propose par un personnage inspirant la sympathie et pouvant être un symbole reconnaissable de manière globale : le poisson Fugu.\n'},
        ]
    )
    const [shuffleArray, setShuffleArray] = useState([])
    useEffect(() => {
        setShuffleArray(projects.sort((a, b) => 0.5 - Math.random()))
    }, []);

    return (
        <>
            {shuffleArray.length > 0 &&
                <>
                    <div className={"home"}>
                        <div className={"homeHeader"}>
                            <h1>Portfolio</h1>
                            <img style={{width: "90px"}} src={PictoFleche}/>
                        </div>
                    </div>
                    {projects.map((val, key) => {
                            return (
                                <div className={"portfolioHomeContainer"}>
                                    <div className={key % 2 ? "leftImgPortfolio" : "rightImgPortfolio"}>
                                        { key % 2 ? <img src={val.image}/> : "" }
                                        <div style={{width: "29%"}}>
                                            <h3>{val.name}</h3>
                                            <p>{val.text}</p>
                                            <Link>Voir le projet <img style={{width: "16px"}} src={pictoFleche}/></Link>
                                        </div>
                                        { key == 0 || key == 2 || key == 4 ? <img src={val.image}/> : "" }
                                    </div>
                                </div>
                            )
                    })
                    }
                </>
            }
        </>
    );
}

export default Portfolio;