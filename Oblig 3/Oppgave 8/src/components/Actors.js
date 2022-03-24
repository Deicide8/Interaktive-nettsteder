import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { getActors } from '../lib/movieService'

export default function Actors() {
  const [data, setData] = useState([])

  const handleClick = async () => {
    const actors = await getActors()
    setData(actors)
  }

  return (
    <>
      <button
        className="m-6 m-2 inline transform p-1 px-6 py-2 transition duration-100 ease-linear hover:scale-105"
        type="button"
        onClick={handleClick}
      >
        Get Actors
      </button>
      {data?.length > 0 ? (
        <ul>
          {data.map((actor) => (
            <li key={actor.slug.slug.current} className="m-2 p-2">
              <span className="text-2xl">{actor.actor}</span>
              <br></br>
              <Link to={`${actor.slug.slug.current}`}>To Actor</Link>
            </li>
          ))}
        </ul>
      ) : null}
      <Outlet />
    </>
  )
}
