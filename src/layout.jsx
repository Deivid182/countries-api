import { Outlet } from 'react-router-dom'
import Container from './components/container'
import Navbar from './components/navbar'

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className='pb-20 pt-28'>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  )
}

export default Layout