import { NavLink, useLocation } from "react-router-dom";

import { cn } from "@/lib/utils";
import Icon from "/assets/icon/icon.jpg";
import { Box, Section, Wrapper } from '@components/common/containers'
import { HiOutlineLogout } from "@/icons";
import { DashboardProps } from "@/data/dashboard_links";
import { DASHBOARD_SIDEBAR_LINKS } from "@/data/dashboard_links";

const linkClass =
    "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base";

    
export default function Sidebar() {
    return (
        <Section className="bg-neutral-900 w-60 p-3 flex flex-col">
            <Box className="flex items-center gap-2 px-1 py-3 select-none">
                <img
                    src={Icon}
                    className="bg-clip-text bg-transparent aspect-square h-10 rounded-md"
                />
                <Wrapper className="text-neutral-200 text-lg">ImpactAura</Wrapper>
            </Box>
            <Box className="py-8 flex flex-1 flex-col gap-0.5">
                {DASHBOARD_SIDEBAR_LINKS.map((link) => (
                    <SidebarLink key={link.key} link={link} />
                ))}
            </Box>
            <Box className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
                <Box className={cn(linkClass, "cursor-pointer text-red-500")}>
                    <Wrapper className="text-xl">
                        <HiOutlineLogout />
                    </Wrapper>
                    Logout
                </Box>
            </Box>
        </Section>
    );
}

function SidebarLink({ link }: { link: DashboardProps }) {
    const { pathname } = useLocation();
    const Icon = link.icon;
    return (
        <NavLink
            to={link.path}
            className={cn(
                pathname === link.path
                    ? "bg-neutral-700 text-white"
                    : "text-neutral-400",
                linkClass,
            )}>
            <Wrapper className="text-xl">
                <Icon />
            </Wrapper>
            {link.label}
        </NavLink>
    );
}
