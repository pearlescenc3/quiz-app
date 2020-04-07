import React, { Component } from 'react';
import styled from 'styled-components';

const StyledButton = styled.div`
    border: 2px solid #1e202e;
    border-radius: 0;
    background-color: #1e202e;
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
        color: #13193f;
      }
    
`;

class Levels extends Component {
    constructor(props){
        super();
        this.state = {
            selectedOption: 'easy',
            data: null,
            isFetching: false
        }
    }

    componentDidMount() {
        this.setState({ isFetching: true });
        const selectedOption = this.state.selectedOption;
        console.log(selectedOption);
        const url = 'https://opentdb.com/api.php?amount=10&category=18&difficulty='+ selectedOption + '&type=multiple';
        fetch(url)
        .then(res => res.json())
        .then(json => this.setState({ data: json,
                                      isFetching: false}));
    }

    dataHandler = () => {
        const results = [...this.state.data.results]
        this.props.onOptionSelected(results);
    }

    optionChangeHandler = (event) => {
        this.setState({
            selectedOption: event.target.value
        });
    }

    render() {
        return (
            <div>
                <div className="radio">
                    <label>
                        <input 
                            type="radio" 
                            value="easy" 
                            checked={this.state.selectedOption === 'easy'}
                            onChange={this.optionChangeHandler} />
                        Easy
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input 
                            type="radio" 
                            value="medium"
                            checked={this.state.selectedOption === 'medium'}
                            onChange={this.optionChangeHandler} />
                        Medium
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input
                            type="radio"
                            value="hard"
                            checked={this.state.selectedOption === 'hard'}
                            onChange={this.optionChangeHandler}/>
                        Hard
                    </label>
                </div>

                <StyledButton
                        onClick={this.dataHandler}> 
                        Start the quiz 
                </StyledButton>
            </div>
        );
    }
}

export default Levels;