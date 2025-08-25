// Description: A simple table component to display product information in a structured format.
const Table = ({ tableHeaders, children }) => {
  return (
    <table className="w-full bg-white border border-sec rounded border-collapse">
      <thead>
        <tr className="border-b border-sec">
          {tableHeaders.map((header, index) => (
            <th key={index} className="text-left p-3">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default Table;
