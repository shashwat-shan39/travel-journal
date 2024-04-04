import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import data from "./Data";

export default function App(){
    const propData = data.map((ele) =>{
        return (
            <Card
            key= {ele.id}
            rem={ele}
            />
        )
    })
    return (
        <div className="container">
            <Navbar />
            {propData}
        </div>
    );
}