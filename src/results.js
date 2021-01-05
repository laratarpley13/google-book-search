import React from 'react';

export default function Results(props) {
    const { results } = props;

    return(
        <div className="results-list">
            <ul>
                {results.map((book, i) => (
                    <li key={i}>
                        <a href={book.saleInfo.buyLink}><h3>{book.volumeInfo.title}</h3></a>
                        <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="book cover" />
                        <p>Author: {book.volumeInfo.authors}</p>
                        <p>Price: ${((book.saleInfo || {}).listPrice || {}).amount}</p>
                        <p>{book.volumeInfo.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}