// Toast
import { ToastContainer } from "react-toastify";

// GlobalStyles
import { GlobalStyles } from "./styles/globalStyles";

// Router
import { Router } from "./routes";

function App() {
  return (
    <>
      <GlobalStyles />
      <ToastContainer />
      <Router />
    </>
  );
}

export default App;
