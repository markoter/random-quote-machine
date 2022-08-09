import React from "react";
import QuoteBox from "./QuoteBox";

class App extends React.Component {
    render() {
        return (<div id="app-container">
            <p>this is app</p>
            <QuoteBox />
        </div>
        )
    }
}

export default App