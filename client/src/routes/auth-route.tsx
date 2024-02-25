import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
    const token = localStorage.getItem("token");

    return token !== null ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
