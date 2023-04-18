import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Header from "./Header";
import Add from "./Add";
import Edit from "./Edit";
import Delete from "./Delete";

const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  {
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/add",
        element: <Add />,
      },
      {
        path: "/edit",
        element: <Edit />,
      },
      {
        path: "/delete",
        element: <Delete />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
