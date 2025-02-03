import {createRoot} from 'react-dom/client';
import './index.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {BrowserRouter} from "react-router-dom";
import {App} from "./app/App.tsx";
import {AppWrapper} from "./components/appComponents/AppWrapper.tsx";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <AppWrapper>
            <App/>
        </AppWrapper>
    </BrowserRouter>
);
