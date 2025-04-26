{/*Parent*/}
import React from 'react';
import BookCard from './BookCard';
import './BookList.css'; 


const books = [
    {
      title: "Rich Dad Poor Dad",
      author: "Robert T. Kiyosaki",
      description: "A powerful personal finance book that contrasts two ways of thinking about money, wealth, and investing."
    },
    {
      title: "The Intelligent Investor",
      author: "Benjamin Graham",
      description: "A classic that teaches long-term investment strategies and the philosophy of value investing."
    },
    {
      title: "Think and Grow Rich",
      author: "Napoleon Hill",
      description: "A motivational and financial guide based on studying successful people and their habits."
    },
    {
      title: "Your Money or Your Life",
      author: "Vicki Robin & Joe Dominguez",
      description: "Focuses on transforming your relationship with money and achieving financial independence."
    },
    {
      title: "The Millionaire Next Door",
      author: "Thomas J. Stanley & William D. Danko",
      description: "Reveals the spending and saving habits of Americas wealthy — often surprisingly frugal."
    },
    {
      title: "I Will Teach You to Be Rich",
      author: "Ramit Sethi",
      description: "A modern guide for young adults on budgeting, investing, and conscious spending."
    },
    {
      title: "The Psychology of Money",
      author: "Morgan Housel",
      description: "Explores how behavior, emotion, and mindset influence financial decisions more than logic."
    },
    {
      title: "Unshakeable",
      author: "Tony Robbins",
      description: "A guide to building financial security and investing wisely, especially in times of uncertainty."
    }
  ];

function BookList() {
    
    return (
        <>
            <div className="book-list">
            {books.map((book,index) => (
                <BookCard 
                key={index} 
                title={book.title} 
                author={book.author} 
                description={book.description}/>
            ))}
            </div>
        </>

    );
}
export default BookList;