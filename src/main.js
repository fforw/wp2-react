
import React, { Component } from "react"
import { render } from "react-dom"

class Test extends React.Component
{
    static defaultProps = {
        foo: "Hello"
    }

    render()
    {
        return (
            <div> prop = { this.props.foo }</div>
        )
    }

}

window.onload = () =>
{
    console.log("start");

    render(<Test/>, document.getElementById("root"));
};
