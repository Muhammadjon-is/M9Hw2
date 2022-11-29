// import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const MyBooks = () => {
  const [books, setBook] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/comments",
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzg2MTUxYjU5N2I5ZDAwMTU0NTM4OTciLCJpYXQiOjE2Njk3MzE2MTIsImV4cCI6MTY3MDk0MTIxMn0.q_yaF4MZdxr48tnpuP-mssV50pT4IQJqg0iFcoCE0HM",
            },
          }
        );
        if (response.ok) {
          let library = await response.json();
          console.log(library);
          setBook(library.books);
        }
        // console.log( library.books);
      } catch (err) {
        console.log(setBook);
      }
    };
    fetchBooks();
  }, []);

  return(
    <div>
       
    </div>
  )
};

export default MyBooks;
