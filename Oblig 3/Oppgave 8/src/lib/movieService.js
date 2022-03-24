import client from './client.js'

const movieFields = `title, "actor": actor->fullName, "slug": actor->{"slug": slug}`
const actorFields = `"slug": actor->{"slug": slug}, "actor": actor->fullName`

export const getMovies = async () => {
  const data = await client.fetch(`*[_type == "movies"]{${movieFields}}`)
  return data
}

export const getActors = async () => {
  const data = await client.fetch(`*[_type == "movies"]{${actorFields}}`)
  return data
}
