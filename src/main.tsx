import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import HomePage from "./pages/HomePage.tsx";
import colorPalette from "./values/colorPalette.tsx";


const router = createBrowserRouter([
    {
        path: '/',
        element: < HomePage/>,
    },
    ])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <RouterProvider router={router}/>
  </StrictMode>,
)

const root = document.getElementById('root')!
root.style.backgroundColor = colorPalette.base.hex
