import React, { Fragment } from 'react';
import styled from 'styled-components';
import DifficultySelection from './DifficultySelection.js'

const StyledDiv = styled.div`
    font-size: 28px;
    padding: 50px 50px;
    box-sizing: border-box;
`;

const StartingPage = props => {
    return <Fragment>
                <StyledDiv>
                    Welcome to quiz on Computer Science topic!
                </StyledDiv>
                <DifficultySelection 
                    onOptionSelected={(incomingData) => props.quizData([...incomingData])}
                />
            </Fragment> 
    ;
}

export default StartingPage;