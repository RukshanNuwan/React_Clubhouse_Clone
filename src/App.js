import "./App.css";
import Welcome from "./pages/Welcome";
import PlanLayout from "./pages/Layouts/PlanLayout";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PhoneConfirmation from "./pages/PhoneConfirmation";

const App = () => {
  return (
    <BrowserRouter>
      <PlanLayout>
        <Routes>
          <Route exact='true' path="/" element={<Welcome/>}/>
          <Route exact='true' path="/invite" element={<PhoneConfirmation/>}/>
        </Routes>
      </PlanLayout>
    </BrowserRouter>
  );
};

export default App;
