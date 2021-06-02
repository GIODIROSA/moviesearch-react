import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ movie }) => {
  return (
    <div className="col-md-4 my-2">
      <div className="contenedor_imagen">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="card-img-top imagen_Poster"
          width="100"
        />
      </div>

      <div className="contenedor_card">
        <div style={cuerpoCard} className="card-body">
          <p className="subtitulo">Título y año: </p>
          <div className="contenedor_contenido">
            <h4>
              {movie.Title} - {movie.Year}
            </h4>
          </div>

          <p className="type_movie"> Categoría: {movie.Type}</p>
        </div>
      </div>
    </div>
  );
};

const cuerpoCard = {
  background: "#343f56",
  height: "250px",
  padding: "20px",
};

Card.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string,
    Title: PropTypes.string,
    Year: PropTypes.string,
    Poster: PropTypes.string,
    Type: PropTypes.string,
  }).isRequired,
};

export default Card;
