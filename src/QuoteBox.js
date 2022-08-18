import React from "react";
import quotesList from "./quotes";

const QuoteBox = (props) => {
    const { quoteNumber } = props
    const quoteText = quotesList[quoteNumber].quote
    const quoteAuthor = quotesList[quoteNumber].author
    const encodedForTwitter = encodeURIComponent(quoteText)
    return (
        <div id="quote-box">
            <div id="text">{quoteText}</div>
            <div id="author">{quoteAuthor}</div>
            <button id="new-quote" onClick={() => props.selectRandomQuote()}>New Quote</button>
            <a href={`https://twitter.com/intent/tweet?text=${encodedForTwitter}`} target="_blank" id="tweet-quote">Tweet</a>
        </div>
    )
}

export default QuoteBox