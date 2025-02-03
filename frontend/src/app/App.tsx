import {Route, Routes} from "react-router-dom";
import "./app.css"
import {Layout, PageProvider} from "../components/Layout.tsx";

export const App = () => {
    return (
        <PageProvider>
            <Layout>
                <Routes>
                    <Route path="/" element={<h2 className={"text-3xl font-bold underline"}>Elo</h2>}/>
                    <Route path="/users" element={<h2>Eleo</h2>}/>
                </Routes>
            </Layout>
        </PageProvider>
    );
}