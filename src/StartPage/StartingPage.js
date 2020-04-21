import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import DifficultySelection from './DifficultySelection.js'

const StyledDiv = styled.div`
    font-size: 28px;
    padding-left: 50px;
    padding-right: 50px;
    box-sizing: border-box;
`;

class StartingPage extends Component {
    constructor(props){
        super();
        this.state = {
            isSelected: false,
            data: null
        };    
    }
    
    passQuizData = () => {
        if (this.state.isSelected) {
            const data = [...this.state.data];
            this.props.quizData(data);
        }
    }

    selectedOptionHandler = (incomingData) => {
        this.setState({
            data: [...incomingData],
            isSelected: true
        });
        this.passQuizData();
    }

    render(){
        return(
            <Fragment>
                <StyledDiv>
                    Welcome to quiz on Computer Science topic!
                </StyledDiv>
                <DifficultySelection onOptionSelected={this.selectedOptionHandler}/>
            </Fragment> 
        );
    }
}

export default StartingPage;