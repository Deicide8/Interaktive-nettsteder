import React, { useState } from 'react'
import { getMovies } from '../lib/movieService'
import Movie from './Movie.js'

export default function Movies() {
  const [data, setData] = useState([])

  const handleClick = async () => {
    const movies = await getMovies()
    setData(movies)
  }

  return (
    <>
      <button
        className="m-6 m-2 inline transform p-1 px-6 py-2 transition duration-100 ease-linear hover:scale-105"
        type="button"
        onClick={handleClick}
      >
        Get Movies
      </button>
      {data?.length > 0
        ? data.map((movie) => (
            <li key={movie.title} className="m-2 p-2">
              <Movie title={movie.title} actor={movie.actor} />
            </li>
          ))
        : null}
    </>
  )
}
