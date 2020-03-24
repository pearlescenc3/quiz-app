import React, { Fragment, Component } from 'react';
import './App.css';
import Answer from './Answer/Answer.js';
import Levels from './Levels/Levels.js';
import Question from './Question/Question.js';

class App extends Component {
    state = {
        pressedStart: false,
        isFetching: false,
        showButton: false,
        num: 0,
        score: 0,
        data: null,
        easyData: null,
        mediumData: null,
        hardData: null,
        total: 0,
        isEnded: false,
        selectedOption: "easy",
        isAnswered: null
    };

    componentDidMount() {
        this.setState({ isFetching: true });

        const fetchData = () => {
            const [response1, response2, response3] = Promise.all([
                fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple'),
                fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple'),
                fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=hard&type=multiple')
            ]);

            const [data1, data2, data3] = Promise.all(
                    [response1.json(), response2.json(), response3.json()]
                )

            this.setState({
                easyData : [...data1.results],
                mediumData : [...data2.results],
                hardData : [...data3.results],
                isFetching: false
            });
        }
        fetchData();
    }


    startQuizHandler = () =>{
        this.setState({
            pressedStart: true,
            total: this.state.data.length
        });
    }

    nextQuestionHandler = () => {
        this.setState({ num: this.state.num + 1 });
        const { num, total } = this.state;

        if (num + 1 === total) {
            this.setState({ isEnded: true })
        } else {
            this.setState({
                isAnswered: false,
                showButton: false
            })
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

    selectLevelHandler = () => {
        const { selectedOption } = this.state;
        let levelData = null ;

        if (selectedOption === 'easy') {
            levelData = this.state.easyData; 
        } else if (selectedOption === 'medium') {
            levelData = this.state.mediumData;
        } else if (selectedOption === 'hard') {
            levelData = this.state.hardData; 
        }

        this.setState({
            data: levelData
        }, this.startQuizHandler);
       
    }

    handleSelectedOption = (option) => {
        this.setState({
            selectedOption: option
        });
        console.log(this.state.selectedOption);
    }

    restartQuizHandler = () =>{
        this.setState({
            pressedStart: false,
            showButton: false,
            num: 0,
            score: 0,
            data: null,
            total: 0,
            isEnded: false,
            selectedOption: "easy",
            isAnswered: false
        });
    }

    render() {
        const { pressedStart, showButton, num, data, score, total, isEnded, isAnswered, selectedOption } = this.state;
        let ans = null;
        let answers = null;
        let correct_answer = null;
        let question = null;

        if (pressedStart && (num + 1 <= total)) {
            question = data[num].question;
            ans = [...data[num].incorrect_answers]
            correct_answer = data[num].correct_answer;
            ans.splice(Math.floor(Math.random() * ans.length + 1), 0, correct_answer)

            answers = (
                <div>
                    {ans.map((answer, index) => {
                        return <Answer answer={answer} answers={ans} correct_answer={correct_answer} key={index} id={index}
                            increaseScore={this.scoreCountHandler} showButton={this.showButtonHandler} isAnswered={isAnswered} />
                    })}
                </div>
            );
        }

        return (
            <div className="App">
                <header className="App-header">
                    {!pressedStart ?
                        (<div className="start-text">
                            <p> Welcome to quiz on Computer Science topic!</p>
                            <p> Please select the level of questions: </p>
                            <Levels 
                                selectedOption={selectedOption}
                                onOptionSelected={this.handleSelectedOption}/>
                            <button className="start-btn"
                                onClick={this.selectLevelHandler}> 
                                {/* fetch here */}
                                Start the quiz </button>
                        </div>) :
                        <Fragment>
                            <div className="questions">
                                <Question question={question} num={num} total={total} />
                            </div>
                            <div className="answers">
                                {answers}
                            </div>
                        </Fragment>
                        }
                    {showButton &&
                        (
                        <button 
                            className="submit-btn" 
                            onClick={this.nextQuestionHandler}>
                            Next question
                        </button>)}
                    {isEnded && 
                        <div className="end-text">
                            <p> The quiz has ended. Your score is {score} </p>
                            <button className="restart-btn" 
                                onClick={this.restartQuizHandler}> Restart </button>
                        </div>}
                </header>
            </div>
        );
    }
}

export default App;