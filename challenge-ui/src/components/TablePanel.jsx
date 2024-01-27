
import { useMemo } from 'react';
import { useGetFiles } from '../hooks/useGetFiles';
import { CustomTable } from './Table';
import { getRows } from '../utils/process-data';

export const TablePanel = () => {

  const {
    isLoading,
    isError,
    error,
    files,
  } = useGetFiles();

  const columns = ['File Name', 'Text', 'Number', 'Hex'];

  const rows = useMemo(() => {
    return files?.map(file => getRows(file)).flat(Infinity)
  }, [files]);

  const displayTable = Array.isArray(rows) && rows.length > 0;

  return (
    <section>
      {
        isLoading && <h1>Loading</h1>
      }
      {
        isError && <h1>{error}</h1>
      }
      {
        displayTable && <CustomTable columns={columns} rows={rows} />
      }
    </section>
  );
};
