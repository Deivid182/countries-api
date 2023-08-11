import CountryImage from '../components/country-image'
import { useCallback, useEffect, useState } from 'react'
import { baseUrl } from '../data/api'
import { Link, useParams } from 'react-router-dom'
import CountryInfo from '../components/country-info'
import { getBorderCountryNames } from '../helpers'

const CountryDetails = () => {

  const params = useParams()
  console.log(params)

  const [country, setCountry] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const getCountry = useCallback(async () => {

    try {
      setIsLoading(true)
      setError('')
      const res = await fetch(`${baseUrl}/alpha/${params.cca2}`)
      if (res.ok) {
        const data = await res.json()
        setCountry(data[0])
      } else {
        throw new Error('Something went wrong')
      }
    } catch (error) {
      console.log(error)
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }, [params])

  useEffect(() => {
    getCountry()
  }, [getCountry])

  return (
    <section className='flex flex-col gap-y-12 '>
      <div>
        <Link
          className='text-lg rounded-sm shadow-md border-[1px] text-center px-4 py-2 bg-white text-neutral-700'
          to={'/'}>
          <i className="fa-solid fa-arrow-left leading-none mr-2 text-neutral-500"></i>
          Back
        </Link>
      </div>
      {isLoading && <p className='text-center text-neutral-600 font-semibold text-lg'>Loading...</p>}
      {error && !isLoading && <h4 className='text-center'>{error}</h4>}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <p className='md:col-span-1'>
          <CountryImage src={country?.flags?.png} />
        </p>
        <div className='md:col-span-1 my-auto'>
          <CountryInfo
            name={country?.name?.common}
            nativeName={country?.name?.nativeName}
            population={country?.population}
            region={country?.region}
            subregion={country?.subregion}
            capital={country?.capital}
            tld={country?.tld}
            currencies={country?.currencies}
            languages={country?.languages}
          />
          <div className='mt-8 flex items-center gap-x-2 flex-wrap gap-y-2'>
            <p className='text-lg font-semibold'>Border Countries: {' '}</p>
            {country?.borders?.length > 0 && getBorderCountryNames(country?.borders).map((border, index) => (
              <Link
                key={index}
                className='text-lg rounded-sm shadow-md border-[1px] text-center px-4 py-2 bg-white text-neutral-700'
                to={`/country/${country?.borders[index]}`}
              >
                {border}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CountryDetails