import React, { Component, Fragment } from "react";
import Card from "../components/Card/Card";

const API = "http://www.omdbapi.com/?i=tt3896198&apikey=c8983d12"; //&s= para busqueda

class List extends Component {
  //apenas la aplicacion sea instalacida

  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    const res = await fetch(`${API}&s=batman`);
    const resJSON = await res.json();
    console.log(resJSON);

    this.setState({ data: resJSON.Search });
  }

  render() {
    return (
      <Fragment>
        <div className="col-md-4 offset-md-4 p-4">
          <form>
            <label htmlFor="searchMovie">
              Ingresa el nombre de una pelicula
            </label>
            <br />
            <input
              id="searchMovie"
              placeholder="Escribe una movie..."
              name="serchMovie"
            />
          </form>
        </div>
        <div className="row">
          {this.state.data.map((movie) => {
            return <Card movie={movie} key={movie.imdbID} />;
          })}
        </div>
      </Fragment>
    );
  }
}

export default List;
