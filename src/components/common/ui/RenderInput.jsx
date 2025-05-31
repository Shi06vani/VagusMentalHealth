export const RenderInput = ({
  name,
  type,
  value,
  onChange,
  placeholder,
  required,
  className,
  ...rest
}) => {
  return (
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="mt-1.5 w-full px-4 py-2.5 text-sm sm:text-base border border-[#8C8C8C] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      {...rest}
    />
  );
};
