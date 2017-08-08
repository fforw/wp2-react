import React from "react"

class Test extends React.Component {
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

export default Test
