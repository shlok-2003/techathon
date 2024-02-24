import {
    HiOutlineViewGrid,
    HiOutlineCube,
    HiOutlineShoppingCart,
    HiOutlineUsers,
    HiOutlineDocumentText,
    HiOutlineAnnotation,
} from "@/icons";
import { IconType } from "react-icons";

export interface DashboardProps {
    key: string;
    label: string;
    path: string;
    icon: IconType;
}

export const DASHBOARD_SIDEBAR_LINKS: DashboardProps[] = [
    {
        key: "dashboard",
        label: "Dashboard",
        path: "/dashboard",
        icon: HiOutlineViewGrid,
    },
    {
        key: "userProfile",
        label: "User Profile",
        path: "/dashboard/profile",
        icon: HiOutlineCube,
    },
    {
        key: "communityFeed",
        label: "Community Feed",
        path: "/dashboard/feed",
        icon: HiOutlineShoppingCart,
    },
    {
        key: "certificates",
        label: "Certificates",
        path: "/dashboard/certificate",
        icon: HiOutlineUsers,
    },
];
