import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import colorPalette from './values/colorPalette';
import Navbar from './components/elements/Navbar.tsx';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const Layout  = () => (
    <>
        <Navbar maximum_width={"450px"} />
        <Outlet />
    </>
);

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '/', element: <HomePage /> },
            { path: '/about', element: <AboutPage /> },
        ],
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);

const root = document.getElementById('root')!;
const body = document.getElementsByTagName('body')[0]
body.style.backgroundColor = colorPalette.background.hex;
root.style.color = colorPalette.text.hex;
