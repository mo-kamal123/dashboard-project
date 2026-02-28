const PaginationActions = ({
  currentPage,
  totalPages,
  goToNextPage,
  goToPrevPage,
}) => {
  return (
    <div className="flex justify-center items-center gap-3 p-3">
      <button
        onClick={goToPrevPage}
        disabled={currentPage === 1}
        className={`px-3 py-1 rounded ${
          currentPage === 1
            ? 'bg-gray-300 cursor-not-allowed'
            : 'bg-main text-white hover:bg-blue-900'
        }`}
      >
        Prev
      </button>
      <span>
        {currentPage} of {totalPages}
      </span>
      <button
        onClick={goToNextPage}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 rounded ${
          currentPage === totalPages
            ? 'bg-gray-300 cursor-not-allowed'
            : 'bg-main text-white hover:bg-blue-900'
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationActions;
