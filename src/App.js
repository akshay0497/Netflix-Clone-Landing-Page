import NoPage from "./Components/NoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NetLogIn from "./Layouts/Login";
import HomePage from "./Layouts/LandingPage";
import RegistrationForm from "./Layouts/Registration";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/in" element={<HomePage />} />
          <Route path='/signup'  element={<RegistrationForm/>}/>
          <Route path='/in/login'  element={<NetLogIn />} />
          <Route path="*" element={<NoPage />} />          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
