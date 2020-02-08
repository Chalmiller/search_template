import React, { Component } from 'react';

interface ICounterProps {
}
interface ICounterState {
}

class CounterButton extends Component<ICounterProps, ICounterState> {
    constructor(props: ICounterProps) {
        super(props)
        this.state = {
            count: 0
        }
    }

    shouldComponentUpdate(nextState) {
        if (this.state.count !== nextState.count) {
            return true
        } else {
            return false;
        }
        
    }

    updateCount = () => {
        this.setState(state =>  {
            return {count: this.state.count + 1}
        })
    }

    render() {
        return (
            <button 
                id='counter' 
                color={this.props.color} 
                onClick={this.updateCount}>Count: 
                {this.state.count}
            </button>
        )
    }
}

export default CounterButton;
