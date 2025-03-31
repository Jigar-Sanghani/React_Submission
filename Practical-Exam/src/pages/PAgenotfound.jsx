import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 text-center bg-light">
      <h1 className="display-1 fw-bold text-primary">404</h1>
      <h2 className="fs-3 fw-semibold text-dark mt-3">Oops! Page Not Found</h2>
      <p className="text-muted mt-2">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn btn-primary mt-4 px-4 py-2">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
