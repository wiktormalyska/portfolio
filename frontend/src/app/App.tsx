import {Route, Routes} from "react-router-dom";
import "./app.css"
import {Layout, PageProvider} from "../components/Layout.tsx";
import {HomePage} from "../pages/HomePage.tsx";

export const App = () => {
    return (
        <PageProvider>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/users" element={<h2>Eleo</h2>}/>
                </Routes>
            </Layout>
        </PageProvider>
    );
}