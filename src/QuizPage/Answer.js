import React, { Component } from "react";
import htmlDecode from "./HtmlDecode";
import styled from "styled-components";

const StyledAnswer = styled.div`
  background-color: #fff;
  border: 2px solid ${(props) => props.borderColor};
  margin-bottom: 20px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 400;
  padding: 14px 65px;
  box-sizing: border-box;
  flex-basis: 50%;
`;

class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#0094da",
    };
  }

  checkAnswer = (event, isCorrect) => {
    const { increaseScore, showButton } = this.props;

    if (isCorrect) {
      increaseScore();
      this.setState({ color: "#41ac04" });
    } else {
      this.setState({ color: "#ff0000" });
    }
    showButton();
  };

  render() {
    const { answer, index, isCorrect } = this.props;

    return (
      <StyledAnswer
        borderColor={this.state.color}
        onClick={(event) => this.checkAnswer(event, isCorrect)}
        data-id={String(index)}
      >
        {htmlDecode(answer)}
      </StyledAnswer>
    );
  }
}

export default Answer;
