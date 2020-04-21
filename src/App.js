import React, { Component } from 'react';
import './App.css';
import StartingPage from './StartPage/StartingPage.js';
import QuizPage from './QuizPage/QuizPage.js';
import ScorePage from './ScorePage/ScorePage.js';

class App extends Component {
    state = {
        score: 0,
        data: null,
        hasEnded: false,
    }

    quizDataSetter = (quizData) => {
        this.setState({
            data: [...quizData]
        });
    }

    scoreSetter = (score) => {
        this.setState({
            score: score
        });
    }

    endQuiz = (hasEnded) => {
        console.log(hasEnded);
        this.setState({
            hasEnded: hasEnded
        })
    }

    restartQuiz = () => {
        this.setState({
            score: 0,
            data: null,
            hasEnded: false,
        })
    }

    render() {
        const {data, hasEnded} = this.state;
        const startPage = data===null && !hasEnded;
        const quizPage = data!==null && !hasEnded;
        const scorePage = hasEnded;

        return (
            <div className="App">
                <header className="App-header">   
                    {startPage &&
                        <StartingPage 
                            quizData={this.quizDataSetter}
                        /> 
                    }
                    {quizPage &&
                        <QuizPage 
                            quizData={[...this.state.data]} 
                            hasEnded={this.endQuiz} 
                            score={this.scoreSetter}
                        />
                    }
                    {scorePage && 
                        <ScorePage 
                        score={this.state.score} 
                        onRestart={this.restartQuiz}/>
                    }
                </header>
            </div>
        );
    }
}

export default App;