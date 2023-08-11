import { useEffect, useState } from 'react'
import Filter from '../components/filter'
import Input from '../components/input'
import ListCountries from '../components/list-countries'
import { baseUrl } from '../data/api'

const AllCountries = () => {


  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [searchText, setSearchText] = useState('')
  const [searchTimeout, setSearchTimeout] = useState(null)
  const [countries, setCountries] = useState([])
  const [searchedResults, setSearchedResults] = useState([])
  const [region, setRegion] = useState('All')

  const fetchCountries = async () => {
    setError('')
    try {
      setIsLoading(true)
      const res = await fetch(`${baseUrl}/all`)
      if (res.ok) {
        const data = await res.json()
        setCountries(data)
      } else {
        throw new Error('Something went wrong')
      }
    } catch (error) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchCountries()
  }, [])


  const filterCountries = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return countries.filter(
      (item) =>
        regex.test(item?.name?.common)
    );
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterCountries(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const getCountryByRegion = async (regionName) => {
    try {
      setIsLoading(true)
      if (regionName.length > 0) {
        const res = await fetch(`${baseUrl}/region/${regionName}`);

        if (!res.ok) throw new Error("No results");

        const data = await res.json();
        setCountries(data);
      } else {
        fetchCountries()
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangeRegion = (e) => {
    setRegion(e.target.value)
  }

  return (
    <div className='flex flex-col gap-y-6'>
      <div className='grid grid-cols-1 md:grid-cols-5 items-center gap-6'>
        <Input searchText={searchText} handleSearchChange={handleSearchChange} />
        <Filter
          region={region}
          handleChangeRegion={handleChangeRegion}
          onSelectedRegion={getCountryByRegion}
        />
      </div>
      {
        searchText ? (
          <ListCountries
            countries={searchedResults}
          />
        ) : (
          <ListCountries
            isLoading={isLoading}
            error={error}
            countries={countries}
          />
        )
      }
    </div>
  )
}

export default AllCountries