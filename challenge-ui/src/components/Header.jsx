import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export const Header = () => {
  return (
    <header>
      <Navbar className="navbar fixed-top bg-danger">
        <Container>
          <Navbar.Brand className='text-white'>React Test App</Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  )
}
