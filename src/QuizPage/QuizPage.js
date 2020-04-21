import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import Answer from './Answer';
import Question from './Question';

const StyledButton = styled.div`
    border: 2px solid #0094da;
    border-radius: 0;
    background-color: #0094da;
    color: #fff;
    display: inline-block;
    font-size: 16px;
    font-weight: 600;
    padding: 14px 75px;
    margin: 0 auto;
    text-transform: uppercase;
    transition: color .2s ease, background-color .2s ease;
    cursor: pointer;

    &:hover {
        background-color: #fff;
        color: #0094da;
      }
    
`;

const StyledAnswers = styled.div`
      display: flex;
      flex-wrap: wrap;
      margin-top: 10px;
      justif
`;

class QuizPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionCount: 0,
            showButton: false,
            isAnswered: false,
            hasEnded: false,
            score: 0,
        }
    }

    showButtonHandler = () => {
        this.setState({
            isAnswered: true,
            showButton: true
        });
    }

    nextStep = () => {
        const { questionCount} = this.state;
        if (questionCount+1 === this.props.quizData.length) {
            this.props.hasEnded(true);
            this.setState({
                hasEnded: true
            })
        } else {
            this.setState({
                isAnswered: false,
                showButton: false
            })
        }
    }

    nextQuestionHandler = () => {
        this.setState({ 
            questionCount: this.state.questionCount + 1 
        });
        this.nextStep();
    }

    scoreCountHandler = () => {
        this.props.score(this.state.score+1);
        this.setState({
            score: this.state.score + 1
        });
    }

    render() {
        const { questionCount, isAnswered } = this.state;
        const data = [...this.props.quizData];    
        let answers = null;
        
        if (questionCount+1 <= data.length) {
            const ans = [...data[questionCount].incorrect_answers]
            ans.splice(3, 0, data[questionCount].correct_answer)
            ans.sort()
            answers = (ans.map((answer, index) => {
                        return <Answer 
                                    key={answer} 
                                    id={index}
                                    answer={answer} 
                                    all_answers={ans} 
                                    correct_answer={data[questionCount].correct_answer} 
                                    increaseScore={this.scoreCountHandler} 
                                    showButton={this.showButtonHandler} 
                                    isAnswered={isAnswered} 
                                /> 
                            })
                        );
        }

        return (
            <Fragment>
                <Question 
                    question={data[questionCount].question} 
                    questionCount={questionCount} 
                    total={this.props.quizData.length} 
                    data={[...this.props.quizData]} 
                />
                <StyledAnswers> 
                    {answers} 
                </StyledAnswers>
       
                {isAnswered && 
                <StyledButton
                    onClick={this.nextQuestionHandler}>
                    Next question
                </StyledButton>}
            </Fragment> 
        )
    }

}

export default QuizPage;