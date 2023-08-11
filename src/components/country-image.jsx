/* eslint-disable react/prop-types */

const CountryImage = ({ src }) => {
  return (
    <div className='w-full h-auto sm:h-[60vh] overflow-hidden'>
      <img
        src={src}
        width={'100%'}
        height={'100%'}
        className='object-cover w-full h-full object-center'
      />
    </div>
  )
}

export default CountryImage