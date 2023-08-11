/* eslint-disable react/prop-types */

const Input = ({ searchText, handleSearchChange }) => {
  return (
    <div className='cols md:col-span-3'>
      <div className='flex flex-row items-center border-none rounded-lg shadow-md px-4 py-2 bg-white'>
        <i className="fa-solid fa-magnifying-glass text-neutral-500"></i>
        <input
          value={searchText}
          onChange={handleSearchChange}
          type="text"
          placeholder='Search...'
          className='flex-grow m-2 border-none w-full outine-none focus:outline-none'
        />
      </div>
    </div>
  )
}

export default Input