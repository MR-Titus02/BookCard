import React from "react";
import './BookList.css'; 

function BookCard({ title, author, description }) {
    return (
        <>
        
        <div className="book-card">
            <h2>{title}</h2>
            <p>{author}</p>
            <p>{description}</p>
            
        </div>
        </>
    );
}
export default BookCard;