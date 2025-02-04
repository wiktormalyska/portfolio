import {Route, Routes} from "react-router-dom";
import "./app.css"
import {Layout, PageProvider} from "../components/Layout.tsx";
import {HomePage} from "../pages/HomePage.tsx";
import {ProjectsPage} from "../pages/ProjectsPage.tsx";
import {ResumePage} from "../pages/ResumePage.tsx";
import {ContactPage} from "../pages/ContactPage.tsx";

export const App = () => {
    return (
        <PageProvider>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/projects" element={<ProjectsPage/>}/>
                    <Route path="/resume" element={<ResumePage/>}/>
                    <Route path="/contact" element={<ContactPage/>}/>
                </Routes>
            </Layout>
        </PageProvider>
    );
}