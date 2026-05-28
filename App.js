import React from "react";
import ReactDOM from "react-dom/client";
import {createRoot} from "react-dom/client";

const parent = React.createElement(
    "div",
    { id: "parent", key: "parent" },
    [
        React.createElement(
            "div",
            { id: "child", key: "child-1" },
            [
                React.createElement("h1", { key: "h1-1" }, "I am an h1 tag"),
                React.createElement("h2", { key: "h2-1" }, "I am an h2 tag")
            ]
        ),

        React.createElement(
            "div",
            { id: "child2", key: "child-2" },
            [
                React.createElement("h1", { key: "h1-2" }, "I am an h1 tag"),
                React.createElement("h2", { key: "h2-2" }, "I am an h2 tag"),
                React.createElement("h6", { key: "h6-1" }, "I am an h6 tag")
            ]
        )
    ]
);

console.log(parent);
const root = createRoot(document.getElementById("root"));
root.render(parent);