import React from 'react';
import PortfolioHome from "./portfolioHome";
import PrestationHome from "./PrestationHome";
import PictoFleche from "../Flèche 1.png"

function Home() {
    return (
        <>
            <div className={"home"}>
                <div className={"homeHeader"}>
                    <h1>Design Graphique <br/> Direction Artistique</h1>
                    <img style={{width: "90px"}} src={PictoFleche}/>
                </div>
            </div>
            <PortfolioHome/>
            <div className={"home"}>
                <div className={"homeHeader"}>
                    <h1>Prestations</h1>
                    <img style={{width: "90px"}} src={PictoFleche}/>
                </div>
            </div>
            <PrestationHome/>
        </>
    );
}

export default Home;
