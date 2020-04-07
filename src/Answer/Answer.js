import React, { Component } from 'react';
import styled from 'styled-components';

const StyledAnswer = styled.div`
    background-color: #fff;
    border: 2px solid #0094da;
    margin-bottom: 20px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 400;
    padding: 14px 65px;
    align-items: 
    float: right;
    width: 50%;
    box-sizing: border-box;
    justify-content: space-between;
    display: flex;

`;

const RightAnswer = styled(StyledAnswer)`
    border: 2px solid #41ac04;
`;

const WrongAnswer = styled(StyledAnswer)`
    border: 2px solid #ff0000;
`;

class Answer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            correct: null
        }
    }
    
    checkAnswer = (event, answers, correct_answer) => {
        const{ increaseScore, showButton, isAnswered} = this.props;

        const correctIndex = answers.indexOf(correct_answer);
        let status = null;

        if (!isAnswered){
            let answer = Number(event.currentTarget.dataset.id);
            if (answer === correctIndex) {
                increaseScore();           
                status = "true";
            } else {
                status = "false";
            }
            console.log(status);
            showButton();
            this.setState({correct: status});
        }
    }

    render() {
        const {answer, answers, correct_answer, id} = this.props;
        const status = this.state.correct;

        return (
            <div onClick={(event) => this.checkAnswer(event, answers, correct_answer)} 
                data-id={String(id)}>
                {status === "true" && <RightAnswer dangerouslySetInnerHTML={{ __html: answer }}/>}
                {status === "false" && <WrongAnswer dangerouslySetInnerHTML={{ __html: answer }}/>}
                {status === null &&<StyledAnswer dangerouslySetInnerHTML={{ __html: answer }}/>}
            </div>
        );
    }
}

export default Answer;