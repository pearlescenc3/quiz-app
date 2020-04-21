import React, { Component } from 'react';
import styled from 'styled-components';

const StyledAnswer = styled.div`
    background-color: #fff;
    border: 2px solid ${props => props.borderColor};
    margin-bottom: 20px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 400;
    padding: 14px 65px;
    box-sizing: border-box;
    flex-basis: 50%;
`;

const htmlDecode = (input) => {
    return input.replace(/&#039;/g, "'")
                .replace(/&quot;/g, "\"");
}

class Answer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "#0094da",
        }
    }
    
    checkAnswer = (event, answers, correct_answer) => {
        const {increaseScore, showButton, isAnswered} = this.props;
        const correctIndex = answers.indexOf(correct_answer);
        if (!isAnswered){
            let answer = Number(event.currentTarget.dataset.id);
            if (answer === correctIndex) {
                increaseScore();       
                this.setState({color: "#41ac04"});
            } else {
                this.setState({color: "#ff0000"}) ;
            }
            showButton();
        } 
    }

    render() {
        const {answer, all_answers, correct_answer, id} = this.props;

        return (
            <StyledAnswer borderColor={this.state.color}
                onClick={(event) => this.checkAnswer(event, all_answers, correct_answer)} 
                data-id={String(id)}>
                {htmlDecode(answer)} 
            </StyledAnswer>
        );
    }
}

export default Answer;
