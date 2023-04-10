import React, { FC, Fragment } from "react";
import "./Card.css";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  onClick: () => void;
}

const Card: FC<CardProps> = ({
  title,
  description,
  imageUrl,
  buttonText,
  onClick
}) => {
  return (
    <Fragment>
      <div className="card-container">
        <div className="card-image-container">
          <img className="card-image" alt="card-img" src={imageUrl} />
        </div>
        <div className="card-title">{title}</div>
        <div className="card-description"> {description} </div>
        <div className="card-button-container">
          <button className="card-button" onClick={onClick}>
            {buttonText}
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;