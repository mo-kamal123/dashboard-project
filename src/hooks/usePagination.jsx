import { useState } from 'react';
import { pagination } from '../utils/table_pagination';

export const usePagination = (data) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginatedData = pagination(data, currentPage, itemsPerPage);

  const goToNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const goToPrevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  return { currentPage, totalPages, paginatedData, goToNextPage, goToPrevPage };
};
