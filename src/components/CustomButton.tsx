import React from 'react';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={`
        bg-[#9C212B] text-white font-bold py-3 px-16 rounded-xl
        shadow-inner-white active:shadow-inner-black
        drop-shadow-lg
        transform active:scale-95 transition-transform duration-150
        focus:outline-none
        ${className || ''}
      `}
    >
      {children}
    </button>
  );
};

export default CustomButton;
