import { BrowserRouter, Link, Redirect } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import React, { Component } from "react";
import Predictionary from "predictionary";
import dictData from "../dictionary.json";

export default class search extends React.Component {
  constructor() {
    super();
    this.state = {
      meaning: ""
    };
  }

  componentDidMount() {
    const word = this.props.match.params.word;
    console.log("Hey", word);
    this.setState({ meaning: dictData[word] });
  }

  render() {
    return (
      <Container className="divStyle">
        <div className="divStyle">
          <h4 className="text">The meaning is- {this.state.meaning}</h4>
        </div>
        <div className="divStyle">
          <p>
            {" "}
            <Link to="/"> Search another word </Link>{" "}
          </p>{" "}
        </div>
      </Container>
    );
  }
}
