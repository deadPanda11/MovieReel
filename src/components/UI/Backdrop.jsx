// eslint-disable-next-line react/prop-types
const Backdrop = ({ imageUrl, blur, overlay }) => {
  return (
    <div
      className="fixed inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `url(${imageUrl})`,
        zIndex: -1,
      }}
    >
      {blur && (
        <div
          className="absolute inset-0"
          style={{
            backdropFilter: "blur(10px)",
            zIndex: -1,
          }}
        ></div>
      )}
      {overlay && (
        <div
          className="absolute inset-0 bg-black opacity-80"
          style={{
            zIndex: -1,
          }}
        ></div>
      )}
    </div>
  );
};

export default Backdrop;
