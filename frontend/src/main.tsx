import {createRoot} from 'react-dom/client';
import './index.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {BrowserRouter} from "react-router-dom";
import {App} from "./app/App.tsx";
import {AppWrapper} from "./components/appComponents/AppWrapper.tsx";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            <AppWrapper>
                <App/>
            </AppWrapper>
        </QueryClientProvider>
    </BrowserRouter>
);
