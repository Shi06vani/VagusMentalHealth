// components/ui/Button.jsx
import cn from "../../../utils/cn"
const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={cn("bg-[#094C9F] text-white px-6 py-[4px] xl:py-1.5 xl:px-5 rounded-md text-sm font-medium", className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
