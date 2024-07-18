import React from "react";
import { CDN_URL } from "../utils/constants";



const Restaurantcard = ({ resData }) => {
    return (
        <div className="res-card">
            <img
                className="cardlogo"
                alt="cardimg"
                src={CDN_URL + resData.info.cloudinaryImageId}
            />
            <div className="card-content">
                <h2>{resData.info.name}</h2>
                <p>{resData.info.cuisines.join(", ")}</p>
                <div className="card-footer">
                    <span className="rating">
                        {resData.info.avgRating} (10K+ ratings)
                    </span>
                    <br />
                    <span className="time">Delivery Time {resData.info.sla.deliveryTime} mins</span>
                </div>
            </div>
        </div>
    );
};

export default Restaurantcard;