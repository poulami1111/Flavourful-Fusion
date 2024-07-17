
import React, { useState } from "react";
import initialResObj from "../utils/resObj";
import Resturantcard from "./Resturandcard";

const Body = () => {
    const [resObj, setResObj] = useState(initialResObj);

    const handleFilter = () => {
        const filteredResObj = resObj.filter(
            (res) => res.info.avgRating > 4.5
        );
        setResObj(filteredResObj);
        console.log(filteredResObj);
    };

    return (
        <div className="body-items">
            <div className="filter">
                <button className="filter-btn" onClick={handleFilter}>
                    Top rated Restaurants
                </button>
            </div>
            <div className="Resturants-container">
                {resObj.map((restaurant, index) => (
                    <Resturantcard key={index} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;
