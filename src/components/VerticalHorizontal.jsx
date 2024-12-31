/* eslint-disable react/prop-types */
const VerticalHorizontal = ({ children, className }) => {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      {children}
    </div>
  );
};

export default VerticalHorizontal;
