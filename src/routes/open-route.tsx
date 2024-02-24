import { Navigate } from "react-router-dom";

function OpenRoute({ children }: { children: React.ReactNode }) {
    const token = localStorage.getItem("token");

    if (token === null) {
        return children;
    } else {
        return <Navigate to="/dashboard" />;
    }
}

export default OpenRoute;
