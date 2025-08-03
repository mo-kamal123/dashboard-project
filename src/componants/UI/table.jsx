// Description: A simple table component to display product information in a structured format.
const Table = () => {
  // products data to be displayed in the table
  const products = [
    { product: 'Shirt', category: 'Man clothes', price: '$100', stock: 500 },
    { product: 'T-Shirt', category: 'Man clothes', price: '$50', stock: 300 },
    { product: 'Jeans', category: 'Man clothes', price: '$80', stock: 200 },
    { product: 'Jacket', category: 'Man clothes', price: '$150', stock: 100 },
    { product: 'hoody', category: 'Man clothes', price: '$160', stock: 140 },
  ];

  return (
    <table className="w-full bg-white border border-sec rounded border-collapse">
      <thead>
        <tr className="border-b border-sec">
          <th className="text-left p-3">Product</th>
          <th className="text-left p-3">Category</th>
          <th className="text-left p-3">Price</th>
          <th className="text-left p-3">Stock</th>
        </tr>
      </thead>
      <tbody>
        {/* Iterate over products and create a row for each product */}
        {products.map((item, index) => (
          <tr
            key={index}
            className="text-gray-500 font-light text-base hover:bg-gray-100 transition-colors duration-300"
          >
            <td className="p-3">{item.product}</td>
            <td className="p-3">{item.category}</td>
            <td className="p-3">{item.price}</td>
            <td className="p-3">{item.stock}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
