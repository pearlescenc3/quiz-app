import React, { Component } from 'react';
import './Answer.css';

class Answer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classNames: ['', '', '', '']
        }
    }
    
    checkAnswer = (event, answers, correct_answer) => {
        const{ increaseScore, showButton, isAnswered} = this.props;

        let correctIndex = answers.indexOf(correct_answer);
        let tempName = ['', '', '', ''];

        if (!isAnswered){
            let answer = Number(event.currentTarget.dataset.id);
            if (answer === correctIndex) {
                increaseScore();           
                tempName[answer] = 'right';
            } else {
                tempName[answer] = 'wrong';
            }
            
            showButton();
            this.setState({className: tempName});
        }
    }

    render() {
        const {answer, answers, correct_answer, id} = this.props;
        let {classNames} = this.state;

        return (
            <div id="answer" onClick={(event) => this.checkAnswer(event, answers, correct_answer)} className={classNames[id]} data-id={String(id)}>
                <p dangerouslySetInnerHTML={{ __html: answer }}/>
            </div>
        );
    }
}

export default Answer;