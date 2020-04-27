import React from 'react';
import htmlDecode from './HtmlDecode';
import styled from 'styled-components';

const StyledDiv = styled.div`
    font-size: 22px;
    padding: 0 50px;
    box-sizing: border-box;
    border: 2px solid #0094da;
    display: block;
    width: 90%;
    text-align: center;
`;

const Question = ({question, questionCount, total}) =>
        <StyledDiv>
            <h4>Question {questionCount + 1}/{total} </h4>
            {htmlDecode(question)}
        </StyledDiv> ;

export default Question;