import React, { Component } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    font-size: 18px;
    padding-left: 50px;
    padding-right: 50px;
    box-sizing: border-box;
`;

class Text extends Component {

    render(){
        return(
        <StyledDiv>
            <p> Welcome to quiz on Computer Science topic!</p>
            <p> Please select the level of questions: </p>
        </StyledDiv>
        );
    }
}

export default Text;