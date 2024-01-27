import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Filter } from './Filter';

export const Header = () => {
  return (
    <header>
      <Navbar className="navbar fixed-top bg-danger">
        <Container className='d-flex justify-content-between'>
          <Navbar.Brand className='text-white'>React Test App</Navbar.Brand>
          <Filter />
        </Container>
      </Navbar>
    </header>
  )
}
