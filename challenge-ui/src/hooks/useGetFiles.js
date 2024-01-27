import { useDispatch, useSelector } from 'react-redux';
import { getFiles } from '../context/actions/file';
import { useEffect } from 'react';


export const useGetFiles = () => {

  const {
    isLoading,
    isError,
    error
  } = useSelector(state => state.ui);

  const { files } = useSelector(state => state.file);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFiles());
  }, [])



  return { isError, isLoading, error, files }
}
