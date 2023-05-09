import React from "react";
import ReactDOM from "react-dom/client";


class Button extends React.Component {

    render() {
        const btnstyle = {
            margin: '0 5px',
        }
        return (
            <button style={btnstyle}
                onClick={this.props.onClickFunction(this.props.incrementValue)}>
                +{this.props.incrementValue}
            </button>
        )
    }
}
const Result = (props) => {
    return (
        <div>
            {props.counter}
        </div>
    )
}
class App extends React.Component {
    state = {
        counter: 0,
    }
    incrementCounter = (incrementValue) => {
        this.setState((prevState) => ({
            counter: prevState.counter + incrementValue,
        }))
    }
    render() {
        return (
            <div className="center">
                <Button incrementValue={1} onClickFunction={this.incrementCounter} />
                <Button incrementValue={5} onClickFunction={this.incrementCounter} />
                <Button incrementValue={10} onClickFunction={this.incrementCounter} />
                <Button incrementValue={100} onClickFunction={this.incrementCounter} />
                <Result counter={this.state.counter} />
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);