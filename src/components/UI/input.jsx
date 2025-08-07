const Input = ({ type, name, placeholder, onChange }) => {
  return (
    <input
      onChange={(e) => onChange(name, e.target.value)}
      className={`border-[1px] border-sec rounded-sm p-2 mb-5`}
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
};

export default Input;
