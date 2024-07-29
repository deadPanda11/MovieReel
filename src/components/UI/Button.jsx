// eslint-disable-next-line react/prop-types
const Button = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-teal-700 text-white min-w-60 h-12 py-2 rounded-3xl mr-8 hover:bg-teal-900 transition duration-300"
    >
      {label}
    </button>
  );
};

export default Button;
