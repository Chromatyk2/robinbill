import React from 'react';
import PortfolioHome from "./portfolioHome";
import PrestationHome from "./PrestationHome";

function Home() {
    return (
        <>
            <div className={"home"}>
                <div className={"homeHeader"}>
                    <p>Design Graphique</p>
                    <p>Direction Artistique</p>
                </div>
            </div>
            <PortfolioHome />
            <PrestationHome />
        </>
    );
}

export default Home;
