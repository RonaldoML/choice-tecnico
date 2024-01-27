import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useDispatch } from 'react-redux';
import { getFiles } from '../context/actions/file';


export const ErrorBanner = ({ error }) => {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getFiles())
  }

  return (
    <Container className='d-flex justify-content-center'>
      <Container>
        <p>{error}</p>
        <Button variant='danger' onClick={handleClick}>
          Try again!
        </Button>
      </Container>
    </Container>
  )
}
