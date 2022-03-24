export default function Movie({ actor, title }) {
  return (
    <ul>
      <li>{title}</li>

      <ul>
        <li>{actor}</li>
      </ul>
    </ul>
  )
}
