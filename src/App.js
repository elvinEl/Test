import React from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import RootLayout from "./components/layouts/RootLayout";
import Login from "./components/auth/Login";
import PrivateRouter from "./components/router/PrivateRouter";
import KeywordList from "./components/keyword/KeywordList";
import Error from "./components/error/Error";
import Register from "./components/auth/Register";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route element={<PrivateRouter />}>
          <Route index element={<KeywordList />} />
        </Route>
        <Route path="signin" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Navigate to="/error" />} />
        <Route path="/error" element={<Error />} />
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
