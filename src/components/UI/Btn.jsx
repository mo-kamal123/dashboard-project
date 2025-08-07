const Btn = ({ children }) => {
  return (
    <button className="bg-main w-full rounded-sm text-white mt-5 p-2 transition-all duration-150">
      {children}
    </button>
  );
};

export default Btn;
