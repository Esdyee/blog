import React from "react";
import "./App.css";
import logo from "./logo.svg";

function App() {
    let post = "강남 우동 맛집22";

    return (
        <div className="App">
            <div className="black-nav">
                <h4>블로그</h4>
            </div>
            <h4 class="test" style={{ color: "red" }}>
                {post}
            </h4>
        </div>
    );
}

export default App;
