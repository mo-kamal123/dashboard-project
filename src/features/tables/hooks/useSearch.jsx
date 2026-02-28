// hooks/useSearch.js
import { filterTable } from '../utils/table_filter';

// This custom hook filters data based on a search term and data type
const useSearch = (data, search, strategy) => {
  // Check if search term or data is not provided
  if (!search || !data || !strategy) {
    return data;
  }
  const filteredData = filterTable(data, search, strategy);
  return filteredData;
};

export default useSearch;
