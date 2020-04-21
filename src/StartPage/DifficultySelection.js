import React, { Fragment, Component } from 'react';
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
    margin: 0 auto;
    text-transform: uppercase;
    transition: color .2s ease, background-color .2s ease;
    cursor: pointer;
    margin-top: 20px;

    &:hover {
        background-color: #fff;
        color: #0094da;
      }
`;

const StyledDiv = styled.div`
    font-size: 22px;
    padding-left: 50px 50px 50px 50px;
    box-sizing: border-box;
    margin-top: 20px;
`;

class DifficultySelection extends Component {
    constructor(props){
        super();
        this.state = {
            selectedOption: 'easy',
            data: null,
            loading: null
        }
    }

    dataHandler = () => {
        this.setState({ loading: true });
        const selectedOption = this.state.selectedOption;
        console.log(selectedOption);
        const url = 'https://opentdb.com/api.php?amount=10&category=18&difficulty='+ selectedOption + '&type=multiple';
        fetch(url)
            .then(res => res.json())
            .then(json => this.setState({ data: json,
                                        loading: false}))
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    componentDidUpdate = (prevState) => {
        if (this.state.loading === false){
            const results = [...this.state.data.results];
            this.props.onOptionSelected(results);
        };
    }

    optionChangeHandler = (event) => {
        this.setState({
            selectedOption: event.target.value
        });
    }

    render() {
        return (
            <StyledDiv>
                Please select the level of questions:
                <div>
                    <label>
                        <input 
                            type="radio" 
                            value="easy" 
                            checked={this.state.selectedOption === 'easy'}
                            onChange={this.optionChangeHandler} />
                        Easy
                    </label>
                </div>
                <div>
                    <label>
                        <input 
                            type="radio" 
                            value="medium"
                            checked={this.state.selectedOption === 'medium'}
                            onChange={this.optionChangeHandler} />
                        Medium
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            value="hard"
                            checked={this.state.selectedOption === 'hard'}
                            onChange={this.optionChangeHandler}/>
                        Hard
                    </label>
                </div>
                <Fragment>
                    <ClipLoader
                        sizeUnit={"px"}
                        size={50}
                        color={'#0094da'}
                        loading={this.state.loading}
                    />
                    {this.state.loading !== true && 
                    <StyledButton
                            onClick={this.dataHandler}> 
                            Start the quiz 
                    </StyledButton>}
                </Fragment>
            </StyledDiv>
        );
    }
}

export default DifficultySelection;