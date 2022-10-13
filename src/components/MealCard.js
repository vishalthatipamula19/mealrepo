import React from "react";
import { Link } from "react-router-dom";
import "./MealCard.css";

const MealCard = ({ name, image, description, id }) => {
  return (
    <Link
      to={id ? `/meal/${id}` : `/meals/${name}`}
      style={{ textDecoration: "none" }}
    >
      <div className="card">
        <div className="detail">
          <div>{name}</div>
          <img src={image} alt={name} />
        </div>
        <p className="description">{description}</p>
      </div>
    </Link>
  );
};

export default MealCard;
