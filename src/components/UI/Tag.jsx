/* eslint-disable react/prop-types */
const Tag = ({ genre }) => {
  return (
    <p className="box-border border-2 border-white bg-transparent text-white rounded-full px-2 py-1 mr-2 mb-2">
      {genre}
    </p>
  );
};

export default Tag;
