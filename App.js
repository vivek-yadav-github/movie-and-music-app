import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  Movies: [
    { name: "🎥 Marvel Endgame", rating: "5/5" },
    { name: "🎥 Spiderman:No Way Home", rating: "5/5" },
    { name: "🎥 Shang Chi", rating: "5/5" }
  ],

  Rapsongs: [
    {
      name: "Divine",
      rating: "🎼 Kaam 25"
    },
    {
      name: "masked wolf ",
      rating: "🎼 astronaut in the ocean"
    }
  ],
  Popmusic: [
    {
      name: "alec benjamin",
      rating: "🎵 this is the hill i will die on"
    },
    {
      name: "enrique iglesias",
      rating: "🎵 heart attack"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Popmusic");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 🎥 Movies and music 🎸🎼🎵</h1>
      <p style={{ fontSize: "medium" }}>
        {" "}
        These are my favourite movies and music{" "}
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "2rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "center" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "2rem 10rem",
                border: "2px solid black",
                width: "50%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "30px" }}> {book.name} </div>
              <div style={{ fontSize: "15px" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
