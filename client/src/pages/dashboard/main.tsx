import {
    UserProfilePieChart,
    DashboardStatsGrid,
    Leaderboard,
    // TransactionChart,
    HeatMap,
} from "@components/core/dashboard";

export default function Dashboard() {
    return (
        <div className="flex flex-col gap-4">
            <DashboardStatsGrid />
            <div className="flex flex-row gap-4 w-full">
                <HeatMap />
                <UserProfilePieChart />
            </div>
            <div className="flex flex-row gap-4 w-full">
                <Leaderboard />
            </div>
        </div>
    );
}
