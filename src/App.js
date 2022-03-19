import "./App.css";
import Welcome from "./pages/Welcome";
import PlanLayout from "./pages/Layouts/PlanLayout";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PhoneConfirmation from "./pages/PhoneConfirmation";
import CodeConfirm from "./pages/CodeConfirm";
import AllowNotification from "./pages/AllowNotification";
import AppLayout from "./pages/Layouts/AppLayout";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <PlanLayout>
        <Routes>
          <Route exact="true" path="/" element={<Welcome/>}/>
          <Route exact="true" path="/invite" element={<PhoneConfirmation/>}/>
          <Route exact="true" path="/code_confirm" element={<CodeConfirm/>}/>
          <Route exact="true" path="/allow_notification" element={<AllowNotification/>}/>
        </Routes>
      </PlanLayout>

      <AppLayout>
        <Routes>
          <Route exact="true" path='/home' element={<Home/>}/>
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
};

export default App;
