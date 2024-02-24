import {
    BuyerProfilePieChart,
    DashboardStatsGrid,
    PopularProducts,
    TransactionChart,
} from "@components/core/dashboard";

export default function Dashboard() {
    return (
        <div className="flex flex-col gap-4">
            <DashboardStatsGrid />
            <div className="flex flex-row gap-4 w-full">
                <TransactionChart />
                <BuyerProfilePieChart />
            </div>
            <div className="flex flex-row gap-4 w-full">	
                <PopularProducts />
            </div>
        </div>
    );
}
