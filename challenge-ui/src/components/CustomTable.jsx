import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";


export const CustomTable = ({ columns, rows }) => {
  return (
    <Table striped bordered>
      <thead>
        <tr>
          {
            columns.map((column) => (
              <th key={`column-${column}`} scope="col">{column}</th>
            ))
          }
        </tr>
      </thead>
      <tbody className="table-group-divider">
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
    </Table>
  )
}

CustomTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string),
  rows: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    text: PropTypes.string,
    number: PropTypes.string,
    hex: PropTypes.string,
  }))
}