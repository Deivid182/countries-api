/* eslint-disable react/prop-types */

const options = [
  { value: '', label: 'Filter by Region' },
  { value: 'africa', label: 'Africa' },
  { value: 'america', label: 'Americas' },
  { value: 'asia', label: 'Asia' },
  { value: 'europe', label: 'Europe' },
  { value: 'oceania', label: 'Oceania' },
]

const Filter = ({ onSelectedRegion }) => {

  const selectHandler = (e) => {
    const regionName = e.target.value;
    onSelectedRegion(regionName);
  };


  return (
    <div className='md:col-span-2 md:ml-auto'>
      <select
        defaultValue={''}
        onChange={selectHandler}
        className='w-3/5 md:w-full text-lg p-4 rounded-md bg-white border-none focus:outline-none'>
        {options.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  )
}

export default Filter