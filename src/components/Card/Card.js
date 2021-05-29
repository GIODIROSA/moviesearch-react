import React, { Component } from "react";

const Card = ({ country }) => {
  return (
    <div>
      <h4>
        {country.Country} {country.Iso2}
      </h4>
      <p>{country.Slug}</p>
    </div>
  );
};

export default Card;
