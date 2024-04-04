import React from "react";
import earth from "./images/earth.png"

export default function Navbar(){
    return (
        <div className="nav">
            <img className="globe" src={earth}></img>
            <h3>my travel journal</h3>
        </div>
    );
}