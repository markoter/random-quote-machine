import React from "react";
import QuoteBox from "./QuoteBox";

class App extends React.Component {
    state = {
        quoteNumberRandom: 0
    }
    selectRandomQuote = () => {
        const quotesAmmount = 10 //TODO this should be length of quotesList
        const rndNum = Math.floor(Math.random() * quotesAmmount)
        this.setState({quoteNumberRandom: rndNum})
    } 
    render() {
        const {quoteNumberRandom} = this.state
        return (<div id="app-container">
            <p>this is app, numberTest: {quoteNumberRandom}</p>
            <QuoteBox quoteNumber={quoteNumberRandom}/>
        </div>
        )
    }
}

export default App