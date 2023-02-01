import React from "react";

class StatefulGreetingsWithPrevState extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
        };
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
            console.log('Previous state', prevState)
            console.log('Previous Props', prevProps)
            return {
                introduction: prevState.Introduction === "Hello!" ? "Goodbye": "Hello!",
                buttonText: prevState.buttonText === "Exit!" ? "Enter": "Exit!",
            }
        }
        );
     
    }

    increment () {
        this.setState ((prevState, prevProps) => {
            console.log('Previous state', prevState)
            console.log('Previous Props', prevProps)
            return {
                count: prevState.count + 1
            }
        }

        )
    }

    render() {
        return (
            <div>
                <h1> {this.state.introduction} {this.props.greeting} </h1>
                <button onClick={() => this.handleClick()}> {this.state.buttonText}</button>
                <button onClick={()=>this.incrementClick()}></button>
            </div>
        )
    }
}

export default StatefulGreetingsWithPrevState