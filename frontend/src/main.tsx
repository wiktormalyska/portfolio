import { createRoot } from 'react-dom/client';
import './index.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {BrowserRouter} from "react-router-dom";
import {App} from "./app/App.tsx";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);