import React from "react";

class ConfirmButtonByFunction extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isConfirmed: false,
        };

        // 1. Binding this.handleConfirm to the current context (this)
        // this.handleConfirm = this.handleConfirm.bind(this); 
        
        // 2. Using arrow function instead of bind
        this.handleConfirm = () => this.setState((prevState) => ({
            isConfirmed:!prevState.isConfirmed,
        }));

    }

    handleConfirm() {
        this.setState((prevState) => ({
            isConfirmed: !prevState.isConfirmed,
        }));
    }

    render() {
        return (
            <button 
                onClick={this.handleConfirm}
                disabled={this.props.isDisabled}            
            >
                {this.state.isConfirmed? "확인됨" : "확인하기"}
            </button>
        );
    }
}

export default ConfirmButtonByFunction;