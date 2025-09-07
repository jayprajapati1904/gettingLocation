import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import VerifySuccess from "./Pages/VerifySuccess";
import VerifyFailed from "./Pages/VerifyFailed";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/verify-success" element={<VerifySuccess />} />
          <Route path="/verify-failed" element={<VerifyFailed />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
