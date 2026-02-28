const Btn = ({ variant = 'default', children, ...props }) => {
  const variants = {
    default: 'bg-main w-full rounded-sm  mt-5  ',
    edit: 'bg-blue-500 hover:bg-blue-600 rounded-lg',
    delete: 'bg-red-500 hover:bg-red-600 rounded-lg',
  };
  return (
    <button
      {...props}
      className={`text-white text-xl p-2 transition-all duration-150 ${variants[variant]}`}
    >
      {children}
    </button>
  );
};

export default Btn;
