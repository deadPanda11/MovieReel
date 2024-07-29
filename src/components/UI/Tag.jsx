/* eslint-disable react/prop-types */
const Tag = (props) => {
  return (
    <p className="box-border border-2 border-white bg-transparent text-white rounded-full px-2 py-1 mr-2 mb-2">
      {props.genre}
    </p>
  );
};

export default Tag;
