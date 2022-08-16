import React from "react";
import "./styles.css";

const Card = ({ imgAvatar, title, office, contact }) => {
  return (
    <div className="cardLider">
      <div className="cardImg">
        <img src={imgAvatar} alt={office} />
      </div>
      <div className="cardInf">
        <h2 className="title">{title}</h2>
        <p className="func">{office}</p>
        <p className="contact">{contact}</p>
      </div>
    </div>
  );
};

export default Card;
