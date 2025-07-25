import ResturantCard from "./ResturantCard";
import { resList } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = listOfRestaurants.filter(
              (res) => res.card.card.info.avgRating > 4
            );
            setListOfRestaurants(filterList);
          }}
        >
          Top Reated Restaurants
        </button>
      </div>
      <div className="reastrunt-container">
        {listOfRestaurants.map((restautrant) => (
          <ResturantCard
            resData={restautrant}
            key={restautrant.card.card.info.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
