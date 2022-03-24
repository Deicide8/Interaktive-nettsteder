import { Route, Routes } from 'react-router-dom'
/* eslint-disable import/no-named-as-default */
// eslint-disable-next-line import/no-named-as-default-member
import Actors from './components/Actors'
/* eslint-disable import/no-named-as-default */
// eslint-disable-next-line import/no-named-as-default-member
import Movies from './components/Movies'
/* eslint-disable import/no-named-as-default */
// eslint-disable-next-line import/no-named-as-default-member
import NoMatch from './components/NoMatch'
import Home from './components/Home'
import Actor from './components/Actor'
import Navigation from './components/Navigation'

export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/actors" element={<Actors />}>
          <Route path=":id" element={<Actor />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  )
}
