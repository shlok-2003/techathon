import { Outlet } from 'react-router';

export default function Main() {
    return (
        <main className="relative">
            <main className="[&>*]:font-sans">
                <Outlet />
            </main>
        </main>
    );
}
