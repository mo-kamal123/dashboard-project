export const pagination = (data, page, rowsPerPage) => {
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  return data.slice(startIndex, endIndex);
};
