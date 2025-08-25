const ItemStatus = ({ status }) => {
  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-semibold ${
        status === 'Completed'
          ? 'bg-green-100 text-green-800'
          : status === 'Pending'
            ? 'bg-yellow-100 text-yellow-800'
            : status === 'Shipped'
              ? 'bg-blue-100 text-blue-800'
              : status === 'Processing'
                ? 'bg-purple-100 text-purple-800'
                : 'bg-red-100 text-red-800'
      }`}
    >
      {status}
    </span>
  );
};

export default ItemStatus;
