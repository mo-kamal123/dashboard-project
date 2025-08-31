const Input = ({ variant = 'default', ...props }) => {
  // const classes =
  //   props.type === 'email' || props.type === 'password'
  //     ? 'border-[1px] border-sec rounded-sm p-2 mb-5'
  //     : 'w-full border px-3 py-1 rounded';
  const variants = {
    default: 'bg-white border px-3 py-1 rounded',
    auth: 'border-[1px] border-sec rounded-sm p-2 mb-5',
  };
  return <input className={` ${variants[variant]}`} {...props} />;
};

export default Input;
