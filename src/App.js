import React, { Fragment, Component } from 'react';
import './App.css';
import Answer from './Answer/Answer.js';
import Levels from './General/Levels.js';
import Text from './General/Text.js';
import NextButton from './Question/NextButton.js';
import Question from './Question/Question.js';
import Restart from './General/Restart.js';

class App extends Component {
    state = {
        pressedStart: false,
        isFetching: false,
        showButton: false,
        num: 0,
        score: 0,
        data: [],
        total: 0,
        isEnded: false,
        isAnswered: null,
        isSelected: false
    }

    startQuizHandler = () => {
        if (this.state.isSelected) {
            this.setState({
                pressedStart: true,
                total: this.state.data.length
            });
        }
    }

    scoreCountHandler = () => {
        this.setState({ score: this.state.score + 1 });
    }

    showButtonHandler = () => {
        this.setState({
            isAnswered: true,
            showButton: true
        });
    }

    selectedOptionHandler = (incomingData) => {
        this.setState({
            data: [...incomingData],
            isSelected: true
        });
        console.log(this.state.data);
        this.setState({ state: this.state });
        this.startQuizHandler();
    }

    nextQuestionHandler = () => {
        this.setState({ num: this.state.num + 1 });

        const { num, total} = this.state;
        if (num+1 === total) {
            this.setState({ 
                isEnded: true,
                showButton: false
            });
        } else {
            this.setState({
                isAnswered: false,
                showButton: false
            })
        }
    }

    restartQuizHandler = () => {
        this.setState({
            pressedStart: false,
            showButton: false,
            num: 0,
            score: 0,
            data: null,
            total: 0,
            isEnded: false,
            isAnswered: false,
            isSelected: false
        });
    }

    render() {
        const { pressedStart, showButton, num, data, 
                score, total, isEnded, isAnswered } = this.state;
        
        let ans, answers, correct_answer, question = null;

        if (pressedStart && (num + 1 <= total)) {
            question = data[num].question;
            ans = [...data[num].incorrect_answers]
            correct_answer = data[num].correct_answer;
            ans.splice(Math.floor(Math.random() * ans.length + 1), 0, correct_answer);
            answers = (ans.map((answer, index) => {
                        return <Answer answer={answer} 
                                answers={ans} 
                                correct_answer={correct_answer} 
                                key={index} id={index}
                                increaseScore={this.scoreCountHandler} 
                                showButton={this.showButtonHandler} 
                                isAnswered={isAnswered} /> })
                    );
        }

        return (
            <div className="App">
                <header className="App-header">
                    {!pressedStart ?
                        <Fragment>
                            <Text/>
                            <Levels onOptionSelected={this.selectedOptionHandler}/>
                        </Fragment> :
                        <Fragment>
                            <Question question={question} 
                                num={num} total={total} />
                            <div> {answers} </div>
                        </Fragment> 
                    }
                    {showButton && <NextButton
                        onClicked={this.nextQuestionHandler}/>
                    }
                    {isEnded && <Restart 
                        score={score} 
                        onRestart={this.restartQuizHandler}/>
                    }
                </header>
            </div>
        );
    }
}

export default App;