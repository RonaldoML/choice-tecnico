
import { Table } from './Table';

export const TablePanel = () => {

  const columns = ['File Name', 'Text', 'Number', 'Hex'];

  const rows = [{ name: 'file1.csv', number: "1223", hex: "32234FFA1AD", text: "sometext" }];

  return (
    <section className='container'>
      <Table columns={columns} rows={rows} />
    </section>
  )
}
