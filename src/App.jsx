import { Routes, Route } from 'react-router-dom'
import Layout from './layout'
import AllCountries from './pages/all-countries'
import CountryDetails from './pages/country-details'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<AllCountries />} />
        <Route path='country/:cca2' element={<CountryDetails />} />
      </Route>
    </Routes>
  )
}

export default App