/* eslint-disable react/prop-types */
const Horizontal = ({ children, className }) => {
  return <div className={`flex items-center ${className}`}>{children}</div>;
};

export default Horizontal;
