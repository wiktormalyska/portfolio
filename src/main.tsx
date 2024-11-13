import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import colorPalette from './values/colorPalette';
import Navbar from './components/Navbar';

// eslint-disable-next-line react-refresh/only-export-components
const Layout  = () => (
    <>
        <Navbar />
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
root.style.backgroundColor = colorPalette.base.hex;
root.style.color = colorPalette.text.hex;
