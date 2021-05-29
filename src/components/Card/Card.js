import React from "react";

const Card = ({ country }) => {
  return (
    <div>
      <h4>
        {country.Country} {country.ISO2}
      </h4>
      <p>{country.Slug}</p>
    </div>
  );
};

export default Card;
