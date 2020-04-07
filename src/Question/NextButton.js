import React, { Component } from 'react';
import styled from 'styled-components';

// #start-btn {
//     border: 2px solid #1e202e;
//     border-radius: 0;
//     background-color: #1e202e;
//     color: #fff;
//     display: inline-block;
//     font-size: 16px;
//     font-weight: 600;
//     padding: 14px 75px;
//     margin: 0 auto;
//     text-transform: uppercase;
//     transition: color .2s ease, background-color .2s ease;
//     cursor: pointer;
//   }
  
//   #start-btn:hover {
//     background-color: #fff;
//     color: #13193f;
//   }

class NextButton extends Component {

    render() {
        return (
            <button
                className="submit-btn"
                onClick={this.props.onClicked}>
                Next question
            </button>
        );
    }
}

export default NextButton;