import NoPage from "./Components/NoPage";
import HomePage from "./Pages/LandingPage";
import NetLogIn from "./Pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  index element={<HomePage />} />
          <Route path='/in/login'  element={<NetLogIn />} />
          <Route path="*" element={<NoPage />} />          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
