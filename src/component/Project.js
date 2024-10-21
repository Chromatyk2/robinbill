import React, {useEffect, useState} from 'react';
import imgIa from '../Ia Horizon - 1.png';
import imgOracle from '../Oracle - 1.png';
import imgRobin from '../Robin Bill - 1.png';
import imgFugu from '../Studio Fugu - 1.png';
import imgYokai from '../Yokai Expo - 1.png';
import pictoFleche from '../Flèche 2.png';
import {Link, useLocation} from "react-router-dom";
import PictoFleche from "../Flèche 1.png";

function Project(props) {
    const location = useLocation()
    const { from } = location.state
    console.log(from)
    useEffect(() => {
        for(let i = 0; i < from.nbFile;i++){
            var elem = document.createElement("img");
            elem.src = "../OK - "+from.name+"/Image ("+i+").png";
            document.getElementById("projetImgContainer").appendChild(elem);
        }
    }, []);
    return (
        <>
            <>
                <div className={"home"}>
                    <div className={"projectHeader"}>
                        <div className={"homeHeader"}>
                            <h1>{from.name}</h1>
                            <img style={{width: "90px"}} src={PictoFleche}/>
                        </div>
                        <p>{from.text}</p>
                    </div>
                </div>
                <div id={"projetImgContainer"}>
                </div>
            </>
        </>
    );
}

export default Project;