import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import DataUser from "./pages/Dashboard/DataUser";
import ProtectedRoute from "./contex/Protected";

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
