import React from "react";
import locationIcon from "./images/location.png";

export default function Card(data){
    return (
        <div className="card">
            <div className="img-cont">
              <img id="card-img" src={data.rem.img}></img>
            </div>
            
            <div className="info-container">
                <section>
                    <div className="location">
                        <div className="loc">
                        <img src={locationIcon} id="location-icon"></img>
                        <span className="country">{data.rem.country}</span>
                        </div>
                        <a className="maps-link">View on maps</a>
                    </div>
                </section>
                <h2 className="name">{data.rem.name}</h2>
                <h4>{data.rem.startDate} - {data.rem.endDate}</h4>
                <p>{data.rem.about}</p>
            </div>
            
        </div>
    );
}