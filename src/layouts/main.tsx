import { Outlet } from 'react-router';
// import { Header } from '@components/core/index';

export default function Main() {
    return (
        <main className="relative">
            <main className="[&>*]:font-sans">
                <Outlet />
            </main>
        </main>
    );
}
