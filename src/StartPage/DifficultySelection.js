import React, { Component } from 'react';
import styled from 'styled-components';
import ClipLoader from "react-spinners/ClipLoader";

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
    transition: color .2s ease, background-color .2s ease;
    cursor: pointer;

    &:hover {
        background-color: #fff;
        color: #0094da;
      }
`;

const StyledDiv = styled.div`
    font-size: 22px;
    padding: 50px;
    box-sizing: border-box;
    margin-top: 20px;
`;

class DifficultySelection extends Component {
    constructor(props){
        super();
        this.state = {
            selectedOption: 'easy',
            loading: false
        }
    }

    dataHandler = () => {
        this.setState({ loading: true });
        const { selectedOption } = this.state;

        const url = 'https://opentdb.com/api.php?amount=10&category=18&difficulty='+ selectedOption + '&type=multiple';
        fetch(url)
            .then(res => res.json())
            .then(json => { this.setState({ loading: false });
                            this.props.onOptionSelected([...json.results]); })
            .catch(error => {console.error('Error:', error)})
    }

    optionChangeHandler = (event) => {
        this.setState({
            selectedOption: event.target.value
        });
    }

    render() {
        const { selectedOption, loading } = this.state;
        return (
            <StyledDiv>
                Please select the level of questions:
                <div>
                    <label>
                        <input 
                            type="radio" 
                            value="easy" 
                            checked={selectedOption === 'easy'}
                            onChange={this.optionChangeHandler} />
                        Easy
                    </label>
                </div>
                <div>
                    <label>
                        <input 
                            type="radio" 
                            value="medium"
                            checked={selectedOption === 'medium'}
                            onChange={this.optionChangeHandler} />
                        Medium
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            value="hard"
                            checked={selectedOption === 'hard'}
                            onChange={this.optionChangeHandler}/>
                        Hard
                    </label>
                </div>
                <ClipLoader
                    sizeUnit={"px"}
                    size={50}
                    color={'#0094da'}
                    loading={loading}
                />
                {!loading && 
                <StyledButton
                        onClick={this.dataHandler}> 
                        Start the quiz 
                </StyledButton>}
            </StyledDiv>
        );
    }
}

export default DifficultySelection;