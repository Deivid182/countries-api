import { Link } from 'react-router-dom'
import Container from './container'

const Navbar = () => {
  return (
    <div className='w-full fixed bg-white z-10 shadow-sm'>
      <div className='border-b-[1px] border-gray-300 py-4'>
        <Container>
          <div className='flex flex-row justify-between items-center'>
            <Link to={'/'} className='text-xl md:text-2xl font-bold'>Where in the world</Link>
            <div className='flex flex-row items-center gap-x-2'>
              <i className='fa-regular fa-moon'></i>
              <p className='text-sm font-medium'>Dark mode</p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar