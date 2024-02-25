import { Outlet } from "react-router-dom";
import { Menu } from "@components/core/index";

import { Box, Section } from "@components/common/containers";

const Dashboard = () => {
    return (
        <Section className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
            <Menu />
            <Box className="flex flex-col flex-1">
                <Box className="flex-1 p-4 min-h-0 overflow-auto">
                    <Outlet />
                </Box>
            </Box>
        </Section>
    );
};

export default Dashboard;
