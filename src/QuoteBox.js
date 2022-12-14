import React from "react";
import quotesList from "./quotes";

const QuoteBox = (props) => {
    const { quoteNumber } = props
    const quoteText = quotesList[quoteNumber].quote
    const quoteAuthor = quotesList[quoteNumber].author
    const encodedForTwitter = encodeURIComponent(`"${quoteText}"\n-${quoteAuthor}`)
    return (
        <div id="quote-box">
            <div id="text">{quoteText}</div>
            <div id="author">{quoteAuthor}</div>
            <div id="buttons">
                <button className="button" id="new-quote" onClick={() => props.selectRandomQuote()}>New Quote</button>
                <a href={`https://twitter.com/intent/tweet?text=${encodedForTwitter}`} target="_blank" id="tweet-quote" className="button">Tweet</a>
            </div>

        </div>
    )
}

export default QuoteBox