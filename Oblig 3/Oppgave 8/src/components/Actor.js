import { Link, useParams } from 'react-router-dom'

export default function Actor() {
  const { id } = useParams()
  return (
    <article className="m-2 border-2 p-1">
      <h1 className="text-3xl">{id}</h1>
      <p className="max-w-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <Link className="text-2xl" to="/Actors">
        Close
      </Link>
    </article>
  )
}
