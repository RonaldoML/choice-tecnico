import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useRef } from 'react';
import { getFiles } from '../context/actions/file';
import { useDispatch } from 'react-redux';
import { searchText } from '../context/actions/search';



export const Filter = () => {

  const dispatch = useDispatch();

  const inputRef = useRef();

  const handleClick = () => {

    const text = inputRef.current.value;

    dispatch(searchText(text));
    dispatch(getFiles(text));
  }

  return (
    <>
      <InputGroup size='sm' >
        <Form.Control
          placeholder="File name"
          aria-label="search"
          aria-describedby="basic-addon2"
          ref={inputRef}
        />
        <Button
          variant="btn btn-outline-light"
          id="button-addon2"
          onClick={handleClick}
        >
          Search
        </Button>
      </InputGroup>
    </>
  )
}
