import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Welcome from "./pages/Welcome";
import PlanLayout from "./pages/Layouts/PlanLayout";
import PhoneConfirmation from "./pages/PhoneConfirmation";
import CodeConfirm from "./pages/CodeConfirm";
import AllowNotification from "./pages/AllowNotification";
import AppLayout from "./pages/Layouts/AppLayout";
import Home from "./pages/Home";
import Explore from './pages/Explore';
import Profile from "./pages/Profile";
import "./App.css";

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
          <Route exact="true" path='/explore' element={<Explore/>}/>
          <Route exact="true" path='/profile' element={<Profile/>}/>
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
};

export default App;
