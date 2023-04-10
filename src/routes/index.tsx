import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Pages
import {
  Home,
  Info,
  Loading,
  NotFound,
  SignIn,
  SignUp,
} from "../pages";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Home />} />,
    <Route path="/info" element={<Info />} />,
    <Route path="/signIn" element={<SignIn />} />,
    <Route path="/signUp" element={<SignUp />} />,
    <Route path="*" element={<NotFound />} />,
  ])
);

function Router() {
  return <RouterProvider router={router} />;
}

export { Router };
