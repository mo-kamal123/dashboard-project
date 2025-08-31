// Strategy pattern implementation
const createSearchStrategy = (colmns) => {
  return (item, searchTerm) => {
    const searchLower = searchTerm.toLowerCase();
    return colmns.some((field) => {
      const value = item[field];
      return value?.toString().toLowerCase().includes(searchLower);
    });
  };
};

// Predefined strategies for different data types
export const searchStrategies = {
  products: createSearchStrategy(['product', 'category', 'price', 'stock']),
  orders: createSearchStrategy(['order', 'customer', 'total', 'status']),
};

// Main filter function
export const filterTable = (data, search, strategy) => {
  if (!strategy) {
    throw new Error('Search strategy is required');
  }

  return data.filter((item) => strategy(item, search));
};
