// hooks/useSearch.js
import { filterTable } from '../utils/table_filter';

// This custom hook filters data based on a search term and data type
const useSearch = (data, search, dataType = 'products') => {
  // Check if search term or data is not provided
  if (!search || !data) {
    return { filteredProducts: data };
  }
  const filteredData = filterTable(data, search, dataType);

  return { filteredProducts: filteredData };
};

export default useSearch;
