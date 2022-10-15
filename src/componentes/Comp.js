import { useState } from "react";
import React from "react";

export const Comp = (props) => {
    const {valor, nombre, setFunc, nombreMetro} = props;
    
    const handleEvent = (e) => {
        const {name, value} = e.target;
        setFunc(prev => ({
            ...prev,
            [name]: value
        }))
    };
    return (
        <button className="btn-campo" type="button">
            <div className="metro-nombre">
                <h4>{nombreMetro}</h4>
            </div>
            <div className="label-input-sec">

            </div>
            <input className="input-campo" value={valor} name={nombre} onChange={handleEvent}/>
        </button>
    )
}