import { Provider } from "react-redux";

// Toast
import { ToastContainer } from "react-toastify";

// GlobalStyles
import { GlobalStyles } from "./styles/globalStyles";

// Router
import { Router } from "./routes";

// Store
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <ToastContainer />
      <Router />
    </Provider>
  );
}

export default App;
