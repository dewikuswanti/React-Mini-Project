import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import DataUser from "./pages/Dashboard/DataUser";
import ProtectedRoute from "./hoc/ProtectedRoutes";

export const routes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/data-user/:id",
    element: (
      <ProtectedRoute>
        <DataUser />
      </ProtectedRoute>
    ),
  },
];
