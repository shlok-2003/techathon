import React, { lazy, Suspense } from 'react';
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromChildren,
} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ColorRing } from 'react-loader-spinner';
import { Box } from '@components/common/containers';
import { ScrollToTop } from '@components/common/scroll-to-top';

import { Main, DashboardLayout } from "@/layouts";
const Home = lazy(() => import("@/pages/home"));
const Login = lazy(() => import("@/pages/auth/login"));
const SignUp = lazy(() => import("@/pages/auth/signup"));

const Dashboard = lazy(() => import("@/pages/dashboard/main"));
const Feed = lazy(() => import("@/pages/dashboard/feed"));
const Profile = lazy(() => import("@/pages/dashboard/profile"));
const Certificate = lazy(() => import("@/pages/dashboard/certificate"));

const NotFound = lazy(() => import("@/pages/not-found"));

const Loading: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Suspense
            fallback={
                <Box className="bg-rich-black-900 flex min-h-screen items-center justify-center">
                    <ColorRing
                        colors={[
                            "#ffffff",
                            "#ffffff",
                            "#ffffff",
                            "#ffffff",
                            "#ffffff",
                        ]}
                    />
                </Box>
            }>
            {children}
        </Suspense>
    );
};

const router = createBrowserRouter(
    createRoutesFromChildren(
        <Route>
            <Route path="/" element={<Main />}>
                <Route
                    index
                    element={
                        <Loading>
                            <Home />
                        </Loading>
                    }
                />
                <Route
                    path="login"
                    element={
                        <Loading>
                            <Login />
                        </Loading>
                    }
                />
                <Route
                    path="signup"
                    element={
                        <Loading>
                            <SignUp />
                        </Loading>
                    }
                />
            </Route>

            <Route path="dashboard" element={<DashboardLayout />}>
                <Route
                    index
                    element={
                        <Loading>
                            <Dashboard />
                        </Loading>
                    }
                />

                <Route
                    path="profile/:id"
                    element={
                        <Loading>
                            <Profile />
                        </Loading>
                    }
                />

                <Route
                    path="feed"
                    element={
                        <Loading>
                            <Feed />
                        </Loading>
                    }
                />

                <Route
                    path="certificate"
                    element={
                        <Loading>
                            <Certificate />
                        </Loading>
                    }
                />
            </Route>

            <Route
                path="*"
                element={
                    <Loading>
                        <NotFound />
                    </Loading>
                }
            />
        </Route>,
    ),
);

export default function App() {
    return (
        <React.Fragment>
            <ScrollToTop />
            <RouterProvider router={router} />
            <Toaster position="bottom-right" />
        </React.Fragment>
    );
}
