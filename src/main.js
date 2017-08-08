
import React from "react"
import { render } from "react-dom"

window.onload = () =>
{
    console.log("onload");

    System.import("./test").then((mod) => {

        console.log("imported", mod);
        const Test = mod.default;

        render(<Test/>, document.getElementById("root"));
    });
};
