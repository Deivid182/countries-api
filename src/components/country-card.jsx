/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom'


const CountryCard = ({ country }) => {

  const { name, cca2, population, region, capital, flags } = country
  const navigate = useNavigate()

  const formatter = new Intl.NumberFormat('en-US')

  const onClick = () => {
    navigate(`/country/${cca2}`)
  }

  return (
    <div className='col-span-1 cursor-pointer group border-[1px] bg-white' onClick={onClick}>
      <div className='flex flex-col gap-2 w-full'>
        <div className='aspect-square w-full relative overflow-hidden '>
          <img
            src={flags.png}
            alt={'image country'}
            width={'100%'}
            height={'100%'}
            className='object-cover w-full h-full group-hover:scale-105 transition-transform duration-200'
          />
        </div>
        <div className='p-4 pb-8 space-y-2'>
          <h3 className='font-bold text-xl'>{name.common}</h3>
          <div className='font-semibold text-sm'>
            Population: <span className='text-neutral-500 font-medium'>{formatter.format(population)}</span>
          </div>
          <div className='font-semibold text-sm'>
            Region: <span className='text-neutral-500 font-medium'>{region}</span>
          </div>
          <div className='font-semibold text-sm'>
            Capital: <span className='text-neutral-500 font-medium'>{capital}</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CountryCard