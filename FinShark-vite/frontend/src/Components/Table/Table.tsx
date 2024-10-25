import TableBS from "react-bootstrap/Table";
import { v4 as uuidv4 } from "uuid";

interface Props {
  data: any;
  configs: any;
}

const Table = ({ data, configs }: Props) => {
  const renderedRows = data.map((company: any) => {
    return (
      <tr key={uuidv4()}>
        {configs.map((val: any) => {
          return <td key={uuidv4()}>{val.render(company)}</td>;
        })}
      </tr>
    );
  });

  const renderedHeaders = configs.map((config: any) => {
    return <th key={uuidv4()}>{config.label}</th>;
  });

  return (
    <TableBS striped bordered hover size="sm" className="mt-1">
      <thead>
        <tr>{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </TableBS>
  );
};

export default Table;
