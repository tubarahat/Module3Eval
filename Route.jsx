import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, roleRequired, user }) => {
  // Rule: Dashboards should not open without login
  if (!user) {
    return <Navigate to="/" />;
  }

  // Rule: Admin routes -> admin only, Customer routes -> customer only
  if (roleRequired && user.role !== roleRequired) {
    alert("Unauthorized Access!");
    return <Navigate to="/" />;
  }

  return children;
};
