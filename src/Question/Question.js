import React, { Component } from 'react';


class Question extends Component {

    render(){
        const {question, num, total} = this.props;
        return(
        <div>
            <h4> Question {num + 1}/{total} </h4>
            <div id="question" dangerouslySetInnerHTML={{ __html: question }} />
        </div>
        );
    }
}

export default Question;