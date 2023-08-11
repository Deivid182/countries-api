/* eslint-disable react/prop-types */
import { getCurrencyName, getNativeName, formatter } from '../helpers';

const CountryInfo = ({ currencies, name, nativeName, population, region, subregion, capital, tld, languages }) => {

  return (
    <div>
      <h1 className='text-2xl font-bold'>{name}</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 mt-4'>
        <div className='space-y-2'>
          <p className='text-lg font-semibold'>
            Native Name: <span className='text-neutral-500 font-light'>{nativeName ? getNativeName(nativeName) : ''}</span>
          </p>
          <p className='text-lg font-semibold'>
            Population: <span className='text-neutral-500 font-light'>{formatter.format(population)}</span>
          </p>
          <p className='text-lg font-semibold'>
            Region: <span className='text-neutral-500 font-light'>{region}</span>
          </p>
          <p className='text-lg font-semibold'>
            Sub Region: <span className='text-neutral-500 font-light'>{subregion}</span>
          </p>
          <p className='text-lg font-semibold'>
            Capital: <span className='text-neutral-500 font-light'>{capital}</span>
          </p>
        </div>
        <div className='space-y-2'>
          <p className='text-lg font-semibold'>
            Top Domain Level: <span className='text-neutral-500 font-light'>{tld}</span>
          </p>
          <p className='text-lg font-semibold'>
            Currencies: <span className='text-neutral-500 font-light'>{currencies ? getCurrencyName(currencies) : ''}</span>
          </p>
          <p className='text-lg font-semibold'>
            Languages: <span className='text-neutral-500 font-light'>{languages ? Object.values(languages).join(', ') : ''}</span>
          </p>
        </div>
      </div>

    </div>
  )
}

export default CountryInfo