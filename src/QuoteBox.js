import React from "react";
import quotesList from "./quotes";

const QuoteBox = (props) => {
    const { quoteNumber, selectRandomQuote } = props
    return (<div id="quote-box">
        <div id="text">{quotesList[quoteNumber].quote}</div>
        <div id="author">{quotesList[quoteNumber].author}</div>
        <button id="new-quote" onClick={() =>props.selectRandomQuote()}>New Quote</button>
        <a href="https://www.twitter.com" target="_blank" id="tweet-quote">Tweet</a>
    </div>)
}

export default QuoteBox