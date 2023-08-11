/* eslint-disable react/prop-types */
import CountryCard from './country-card'

const ListCountries = ({ isLoading, error, countries }) => {

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8'>
      {isLoading && <p className='text-center text-neutral-600 font-semibold text-lg'>Loading...</p>}
      {error && !isLoading && <h4>{error}</h4>}
      {countries.map(country => (
        <CountryCard country={country} key={country.cca2} />
      ))}
    </div>
  )
}

export default ListCountries