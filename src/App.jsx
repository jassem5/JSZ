import { Routes } from "react-router-dom";
import { renderRouter } from "./routes/RenderRoutes";
import "./App.css";
import { routes } from "./routes/routes";

function App() {
  return (
    <div className="App">
      <Routes>{renderRouter(routes)}</Routes>
    </div>
  );
}

export default App;
