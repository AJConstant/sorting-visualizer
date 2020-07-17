import React from "react";
import ReactDOM from "react-dom";
import './index.css';

const values = [1, 2, 3, 4, 5];

class ArrayElement extends React.Component {
    constructor(props) {
        super(props)
        this.value = props.value;
    }
    render() {
        return (
            <div 
                className="array-element" 
                style={{
                    height: `${this.value * 10}px`
                }}
        ></div>
        )
    }
}

class ArrayBody extends React.Component {
    render() {
        return (
            <div className="array-body">
                {this.props.numbers.map((number, index) => {
                    return <ArrayElement 
                                value={number} 
                                key={index}></ArrayElement>
            })}</div>
        );
    }
}

ReactDOM.render(
    <ArrayBody numbers={values}></ArrayBody>,
    document.getElementById('root')
);