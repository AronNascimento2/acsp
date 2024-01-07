import "./App.css";
import { OrchestraLandingPage } from "./Pages/HomePage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <>
      <OrchestraLandingPage />
        <ToastContainer />
    </>
  );
}

export default App;
