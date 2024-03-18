
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "2em",
          color: "red",
        }}
      >
        Page Not Found
      </div>
      <Link to="/">Go Home</Link>
    </>
  );
};

export default NotFound;
