import React, { Component } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    font-size: 18px;
    padding-left: 50px;
    padding-right: 50px;
    box-sizing: border-box;
`;

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

  
//   .restart-btn:hover {
//     background-color: #fff;
//     color: #13193f;
//   }

class Restart extends Component {

    render() {
        return (
            <div>
                <StyledDiv> The quiz has ended. Your score is {this.props.score} </StyledDiv>
                <StyledButton 
                    className="restart-btn" 
                    onClick={this.props.onRestart}> 
                    Restart 
                </StyledButton>
            </div>
        );
    }
}

export default Restart;