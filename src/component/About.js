import React from 'react';
import PhotoPerso from '../Photo perso.png'

function About() {
    return (
        <>
            <div className={"aboutContent"}>
                <div style={{ width:"550px"}}>
                    <img className={"photoPerso"} src={PhotoPerso}/>
                </div>
                <div style={{ width:"580px"}} className={"aboutTextContainer"}>
                    <h1>À propos</h1>
                    <p>Ma passion pour le design graphique est née à l'adolescence, inspirée par la communication visuelle de mes groupes de musique préférés. J'ai rapidement commencé à expérimenter sur des logiciels de PAO, me familiarisant avec les bases du métier.</p>
                    <p>Durant mes études, j'ai approfondi ma maîtrise du design, en intégrant une veille graphique rigoureuse et des connaissances en histoire de l'art, essentielles à la création pertinente.</p>
                    <p>Depuis plus de dix ans, j'accompagne des agences, entreprises et indépendants dans la conception graphique, avec une spécialisation en brand design. Soucieux d'élargir mes compétences, j'ai progressivement intégré la stratégie de communication, le motion design et le montage vidéo à mes services.</p>
                    <p>Si vous avez un projet ou des questions, n’hésitez pas à me contacter.</p>
                </div>
            </div>
        </>
    );
}

export default About;
