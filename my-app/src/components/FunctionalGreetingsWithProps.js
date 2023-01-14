import React from "react";

const FunctionalGreatingWithProps = (props) => {
    console.log(props);
    return <h1>Hello, {props.name}, {props.age} {props.greeting} </h1>;
}


export default FunctionalGreatingWithProps;