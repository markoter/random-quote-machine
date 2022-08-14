import React from "react";
import quotesList from "./quotes";

const QuoteBox = () => {
    return(<div id="quote-box">
    <div id="text">{quotesList[3].quote}</div>
    <div id="author">{quotesList[3].author}</div>
    <button id="new-quote">New Quote</button>
    <a href="https://www.twitter.com" target="_blank" id="tweet-quote">Tweet</a>
    </div>)
}

export default QuoteBox