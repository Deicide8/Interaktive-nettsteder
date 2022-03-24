import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav className="bg-gray-100">
      <ul className="flex flex-row ">
        <li className="m-1 p-3">
          <Link to="/">Home</Link>
        </li>
        <li className="m-1 p-3 text-center">
          <Link to="/movies">Movies</Link>
        </li>
        <li className="m-1 p-3">
          <Link to="/actors">Actors</Link>
        </li>
      </ul>
    </nav>
  )
}
