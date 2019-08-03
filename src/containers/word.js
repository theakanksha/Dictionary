import { BrowserRouter, Link, Redirect } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import React, { Component } from "react";
import Predictionary from "predictionary";
import dictData from "../dictionary.json";

export default class search extends React.Component {
  constructor() {
    super();
    this.state = {
      word: "",
      predicted: "",
      meaning: "",
      flag: true,
      status: false
    };
    this.handleWordChange = this.handleWordChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleClick(e) {
    this.setState({ flag: true, status: false });
    this.forceUpdate();
  }
  handleWordChange(e) {
    this.setState({ word: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    var word = this.state.word;
    var meaning = dictData[word];
    if (meaning == undefined) {
      console.log("Hola", meaning);
      this.setState({ flag: false });
    } else {
      this.setState({ status: true });
      console.log(meaning);
    }
    this.setState({ meaning: meaning });
    var predictionary = Predictionary.instance();
    predictionary.addWords(Object.keys(dictData));
    var predictedWord = predictionary.predict(word)[0];
    this.setState({ predicted: predictedWord });
  }

  render() {
    if (this.state.flag == false) {
      return (
        <div>
          <div className="divStyle">
            <h3>
              Did you mean{" "}
              <Link to={`/${this.state.predicted}`}>
                {" "}
                {this.state.predicted}{" "}
              </Link>{" "}
              ?{" "}
            </h3>{" "}
          </div>
          <div className="divStyle">
            <button onClick={this.handleClick}>No. Search another word</button>
          </div>
        </div>
      );
    } else if (this.state.status) {
      return <h4 className="text">The meaning is- {this.state.meaning}</h4>;
    } else {
      return (
        <Container className="divStyle">
          <div className="divStyle">
            <h2>Dictionary</h2>
            <form onSubmit={this.handleSubmit}>
              <div className="divStyle">
                <label>
                  Word:
                  <input
                    type="text"
                    name="word"
                    onChange={this.handleWordChange}
                  />
                </label>
              </div>
              <div className="divStyle">
                <label>
                  <input
                    type="Submit"
                    name="Search"
                    value="Search"
                    className="search"
                  />
                </label>
              </div>
            </form>
          </div>
        </Container>
      );
    }
  }
}
