import React, { useEffect, useState } from "react";
import Restaurantcard from "./Restaurandcard"
import Shimmer from "./Shimmer";


const Body = () => {
    const [resObj, setResObj] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
                const json = await response.json();
                setResObj(json.data?.cards[4]?.card?.card?.gridElements.infoWithStyle.restaurants || []);
                console.log(json);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const handleFilter = () => {
        if (Array.isArray(resObj)) {
            const filteredResObj = resObj.filter(
                (res) => res.info.avgRating > 4.5
            );
            setResObj(filteredResObj);
            console.log(filteredResObj);
        }
    };

    return resObj.length===0?<Shimmer/>:(
        <div className="body-items">
            <div className="filter">
                <button className="filter-btn" onClick={handleFilter}>
                    Top rated Restaurants
                </button>
            </div>
            <div className="restaurants-container">
                {Array.isArray(resObj) && resObj.map((restaurant, index) => (
                    <Restaurantcard key={index} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;


