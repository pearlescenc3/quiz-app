/* eslint-disable react/prop-types */
import React, { Fragment } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  font-size: 18px;
  padding-left: 50px;
  padding-right: 50px;
  box-sizing: border-box;
`;

const StyledButton = styled.div`
  border: 2px solid #0094da;
  border-radius: 0;
  background-color: #0094da;
  color: #fff;
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  padding: 14px 75px;
  margin: 20px;
  text-transform: uppercase;
  transition: color 0.2s ease, background-color 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: #0094da;
  }
`;

const ScorePage = ({ score, onRestart }) => (
  <Fragment>
    <StyledDiv> The quiz has ended. Your score is {score} </StyledDiv>
    <StyledButton onClick={onRestart}>Restart</StyledButton>
  </Fragment>
);

export default ScorePage;
