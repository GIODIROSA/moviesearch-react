import React, { Component } from "react";
import Card from "../components/Card/Card";

class List extends Component {
  //apenas la aplicacion sea instalacida

  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    const res = await fetch("https://api.covid19api.com/countries");
    const resJSON = await res.json();
    //console.table(resJSON);
    this.setState({ data: resJSON });
  }

  render() {
    return this.state.data.map((country) => {
      return <Card country={country}/>
    });
  }
}

export default List;
