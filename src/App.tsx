import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import ArticleDetails from "./components/ArticleDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ArticleDetails/:id" element={<ArticleDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
