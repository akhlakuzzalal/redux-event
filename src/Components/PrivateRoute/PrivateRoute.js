import { Navigate, useLocation } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { users, isLoading } = useFirebase()
  if (isLoading) {
    return (
      <div className="login-from">
        <div className="spinner-border text-light" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  if (users.email) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};
export default PrivateRoute;