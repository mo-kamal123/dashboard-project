const Input = ({ onChange, ...props }) => {
  const classes =
    props.type === 'email' || props.type === 'password'
      ? 'border-[1px] border-sec rounded-sm p-2 mb-5'
      : 'w-full border px-3 py-1 rounded';
  return (
    <input
      className={classes}
      onChange={(e) => onChange(props.name, e.target.value)}
      {...props}
    />
  );
};

export default Input;
