import {Route, Routes} from "react-router-dom";
import "./app.css"

export const App = () => {
    return (
        <>
          <h1>React Router</h1>
          <Routes>
              <Route path="/" element={<h2 className={"text-3xl font-bold underline"}>Elo</h2>} />
            <Route path="/users" element={<h2>Eleo</h2>} />
          </Routes>
        </>
      );
}