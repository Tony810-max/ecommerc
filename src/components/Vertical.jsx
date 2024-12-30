/* eslint-disable react/prop-types */
const Vertical = ({ children, className }) => {
  return <div className={`flex justify-center ${className}`}>{children}</div>;
};

export default Vertical;
