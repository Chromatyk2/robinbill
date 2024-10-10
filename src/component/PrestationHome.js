import React from 'react';
import imgOracle from '../Free_Soda_Cans_Mockup_1.png';
import {Link} from "react-router-dom";

function PrestationHome() {
    return (
        <>
            <div className={"prestationsHomeContainer"}>
                <div className={"allPrestation"}>
                    <div className={"uniquePrestation"}>
                        <p className={"prestationTitle"}>Brand Design</p>
                        <p className={"prestationText"}>Le Brand design est bien plus qu'un simple logo, c'est l'âme de votre marque. Il façonne la perception de votre entreprise à travers des éléments visuels cohérents et marquants.</p>
                        <p className={"prestationText"}>Votre identité visuelle communique vos valeurs, votre mission et crée des repères forts pour votre audience. Grâce à un branding soigné, vous assurez une reconnaissance immédiate et durable, tout en vous différenciant de la concurrence. </p>
                    </div>
                    <div className={"uniquePrestation"}>
                        <p className={"prestationTitle"}>Motion design & Montage vidéo</p>
                        <p className={"prestationText"}>Le motion design et le montage vidéo sont des outils puissants pour dynamiser votre communication. Du contenu promotionnel aux animations d’illustration, le motion design capte l’attention et apporte vie à votre message. Le montage vidéo, quant à lui, renforce votre présence en ligne en racontant des histoires engageantes. Ensemble, ils créent des contenus percutants et mémorables, qui stimulent l’engagement et humanisent votre marque. </p>
                    </div>
                    <div className={"uniquePrestation"}>
                        <p className={"prestationTitle"}>Communication imprimé</p>
                        <p className={"prestationText"}>La communication imprimée est cruciale pour valoriser votre marque lors de salons ou rendez-vous clients. Des cartes de visite aux kakemonos, chaque support visuel incarne vos valeurs et renforce votre crédibilité. En soignant chaque détail, de la conception à l'impression, vous créez une image cohérente et mémorable, assurant un impact durable auprès de votre audience.</p>
                    </div>
                    <div className={"uniquePrestation"}>
                        <p className={"prestationTitle"}>Réseaux sociaux</p>
                        <p className={"prestationText"}>La communication sur les réseaux sociaux est essentielle pour renforcer votre notoriété et engager votre audience. Des contenus bien pensés stimulent l'interaction, captent l’attention et maintiennent votre marque connectée à un public toujours en mouvement. Une stratégie adaptée à chaque plateforme permet de rester pertinent et visible dans un environnement numérique en constante évolution. </p>
                    </div>
                </div>
            </div>
        </>
    )
        ;
}

export default PrestationHome;
