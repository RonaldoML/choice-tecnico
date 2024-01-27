import PropTypes from 'prop-types';

export const Table = ({ columns, rows }) => {
  return (
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          {
            columns.map((column) => (
              <th key={`column-${column}`} scope='col'>{column}</th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          rows.map(({ name, text, number, hex }, index) => (
            <tr key={`row-${hex}-${index}`}>
              <td>{name}</td>
              <td>{text}</td>
              <td>{number}</td>
              <td>{hex}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string),
  rows: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    text: PropTypes.string,
    number: PropTypes.string,
    hex: PropTypes.string,
  }))
}