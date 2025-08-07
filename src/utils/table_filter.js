// Utility function to filter table data based on search input
export const filterTable = (data, search, dataType = 'products') => {
  return data.filter((item) => {
    const searchLower = search.toLowerCase(); // Convert search term to lowercase for case-insensitive comparison
    // Check if the item is an order or product based on dataType
    if (dataType === 'orders') {
      // Search in order fields
      const orderMatch = item.order?.toLowerCase().includes(searchLower);
      const customerMatch = item.customer?.toLowerCase().includes(searchLower);
      const totalMatch = item.total
        ?.toString()
        .toLowerCase()
        .includes(searchLower);
      const statusMatch = item.status?.toLowerCase().includes(searchLower);
      return orderMatch || customerMatch || totalMatch || statusMatch;
    } else {
      // Search in product fields (default)
      const productMatch = item.product?.toLowerCase().includes(searchLower);
      const categoryMatch = item.category?.toLowerCase().includes(searchLower);
      const priceMatch = item.price
        ?.toString()
        .toLowerCase()
        .includes(searchLower);
      const stockMatch = item.stock
        ?.toString()
        .toLowerCase()
        .includes(searchLower);
      return productMatch || categoryMatch || priceMatch || stockMatch;
    }
  });
};
