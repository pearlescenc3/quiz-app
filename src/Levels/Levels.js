import React, { Component } from 'react';

class Levels extends Component {
    state = {
        selectedOption: null
    }

    handleOptionChange = (event) => {
        this.setState({
            selectedOption: event.target.value
        });
        const opt = this.state.selectedOption;
        this.props.onOptionSelected(opt);
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
                            onChange={this.handleOptionChange} />
                        Easy
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input 
                            type="radio" 
                            value="medium"
                            checked={this.state.selectedOption === 'medium'}
                            onChange={this.handleOptionChange} />
                        Medium
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input
                            type="radio"
                            value="hard"
                            checked={this.state.selectedOption === 'hard'}
                            onChange={this.handleOptionChange}/>
                        Hard
                    </label>
                </div>
            </div>
        );
    }
}

export default Levels;