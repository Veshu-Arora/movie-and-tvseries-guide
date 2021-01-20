import React, { useState } from "react";
import "./styles.css";

var movieDB = {
  Horror: [
    {
      name: "A Nightmare on Elm Street",
      imdb: "5.2/10"
    },
    {
      name: "Insidious",
      imdb: "6.8/10"
    },
    {
      name: "The Conjuring",
      imdb: "7.3/10"
    },
    {
      name: "The Cabin in the Woods",
      imdb: "7/10"
    }
  ],

  Romance: [
    {
      name: "Pretty Woman",
      imdb: "7/10"
    },
    {
      name: "She's Out of My League",
      imdb: "6.4/10"
    },
    {
      name: "I Love You, Beth Cooper",
      imdb: "5.3/10"
    },
    {
      name: "Five Feet Apart",
      imdb: "7.2/10"
    }
  ],

  Comedy: [
    {
      name: "The Hangover",
      imdb: "7.7/10"
    },
    {
      name: "17 Again",
      imdb: "6.3/10"
    },
    {
      name: "American Pie",
      imdb: "7/10"
    },
    {
      name: "Home Alone",
      imdb: "7.6/10"
    }
  ]
};

var tvSeriesDB = {
  Horror: [
    {
      name: "Stranger Things",
      imdb: "8.7/10"
    },
    {
      name: "Grimm",
      imdb: "7.8/10"
    },
    {
      name: "Z Nation",
      imdb: "6.7/10"
    },
    {
      name: "American Horror Story",
      imdb: "8/10"
    }
  ],

  Romance: [
    {
      name: "How I Met Your Mother",
      imdb: "8.3/10"
    },
    {
      name: "Friends",
      imdb: "8.9/10"
    },
    {
      name: "Sex and the City",
      imdb: "7.1/10"
    },
    {
      name: "Grey's Anatomy",
      imdb: "7.6/10"
    }
  ],

  Comedy: [
    {
      name: "Two and a Half Men",
      imdb: "7/10"
    },
    {
      name: "2 Broke Girls",
      imdb: "6.7/10"
    },
    {
      name: "The Big Bang Theory",
      imdb: "8.1/10"
    },
    {
      name: "Modern Family",
      imdb: "8.4/10"
    }
  ]
};

var childGenreList = Object.keys(movieDB);
// since the keys are same for both movieDB and tvSeriesDB object we can form the child genre list of keys from any of the 2 objects.

export default function App() {
  var [parentGenre, setParentGenre] = useState("Movies");
  var [childGenre, setchildGenre] = useState("Comedy");

  function setTheParentGenre(parentGenre) {
    setParentGenre(parentGenre);
  }

  function genreClickHandler(childGenre) {
    setchildGenre(childGenre);
  }

  return (
    <div className="App">
      <h1 style={{ color: "white" }}>🎬 movie & tv series guide</h1>
      <p style={{ fontSize: "smaller", color: "white" }}>
        {" "}
        Checkout my favourite movies and tv series. Select either of movies and
        tv series and then select a genre to get started
      </p>

      <div
        className="button-container-div"
        style={{ backgroundColor: "transparent" }}
      >
        <button
          className="parent-genre-button"
          onClick={() => setTheParentGenre("Movies")}
        >
          Movies
        </button>
        <button
          className="parent-genre-button"
          onClick={() => setTheParentGenre("TV Series")}
        >
          TV Series
        </button>
        <div></div>
        {childGenreList.map((childGenre) => (
          <button
            onClick={() => genreClickHandler(childGenre)}
            style={{
              padding: "0.5rem",
              borderRadius: "5px",
              margin: "10px"
            }}
          >
            {childGenre}
          </button>
        ))}
      </div>

      <hr />

      <div className="movieList-contaiiner-div">
        {parentGenre === "Movies"
          ? movieDB[childGenre].map((movie) => (
              <div
                className="movie-element-div"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "lightgrey",
                  margin: "10px",
                  padding: "1rem",
                  border: "1px solid #D1D5DB",
                  borderRadius: "5px"
                }}
              >
                <div style={{ fontSize: "larger" }}> {movie.name} </div>
                <div style={{ fontSize: "small" }}> {movie.imdb} </div>
              </div>
            ))
          : tvSeriesDB[childGenre].map((tvSeries) => (
              <div
                className="movie-element-div"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "lightgrey",
                  margin: "10px",
                  padding: "1rem",
                  border: "1px solid #D1D5DB",
                  borderRadius: "5px"
                }}
              >
                <div style={{ fontSize: "larger" }}> {tvSeries.name} </div>
                <div style={{ fontSize: "small" }}> {tvSeries.imdb} </div>
              </div>
            ))}
      </div>
    </div>
  );
}
