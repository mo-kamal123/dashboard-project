const Btn = ({ children, ...props }) => {
  const classes = props.className
    ? props.className
    : 'bg-main w-full rounded-sm text-white mt-5 p-2 transition-all duration-150';
  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
};

export default Btn;
