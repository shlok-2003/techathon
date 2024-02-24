import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@/styles/globals.css";
import UserGoals from './components/charts/UserGoals';   
import VolunteeringDonations from './components/charts/donations'
import { User } from "lucide-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
        <UserGoals />
        <VolunteeringDonations />
    </React.StrictMode>,
);
