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

  checkAnswer = (event, answers, correctAnswer) => {
    const { increaseScore, showButton } = this.props;
    const correctIndex = answers.indexOf(correctAnswer);

    let answer = Number(event.currentTarget.dataset.id);
    if (answer === correctIndex) {
      increaseScore();
      this.setState({ color: "#41ac04" });
    } else {
      this.setState({ color: "#ff0000" });
    }
    showButton();
  };

  render() {
    const { answer, index, allAnswers, correctAnswer } = this.props;

    return (
      <StyledAnswer
        borderColor={this.state.color}
        onClick={(event) => this.checkAnswer(event, allAnswers, correctAnswer)}
        data-id={String(index)}
      >
        {htmlDecode(answer)}
      </StyledAnswer>
    );
  }
}

export default Answer;
