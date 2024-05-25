import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WebsiteMain from "./pages/website/Main"; // outlet component for website
import AdminMain from "./pages/admin/Main"; // outlet component for admin panel
import Home from "./pages/website/Home";
import Store from "./pages/website/Store";
import Cart from "./pages/website/Cart";
import Dashbord from "./pages/admin/Dashbord";
import CategoryView from "./pages/admin/Category/View";
import CategoryAdd from "./pages/admin/Category/Add";
import CategoryEdit from "./pages/admin/Category/Edit";
import ProductView from "./pages/admin/Product/View";
import ProductAdd from "./pages/admin/Product/Add";
import ColorView from "./pages/admin/Color/View";
import ColorAdd from "./pages/admin/Color/Add";
import PageError from "./pages/admin/PageError";
import Signup from "./pages/website/Signup";
import Login from "./pages/website/Login";
const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <WebsiteMain />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "store",
          element: <Store />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminMain />,
      children: [
        {
          path: "",
          element: <Dashbord />,
        },
        {
          path: "category",
          element: <CategoryView />,
        },
        {
          path: "category/add",
          element: <CategoryAdd />,
        },
        {
          path: "category/edit/:Cid",
          element: <CategoryEdit />,
        },
        {
          path: "product",
          element: <ProductView />,
        },
        {
          path: "product/add",
          element: <ProductAdd />,
        },
        {
          path: "color",
          element: <ColorView />,
        },
        {
          path: "color/add",
          element: <ColorAdd />,
        },
        {
          path: "pages",
          element: <ProductView />,
        },
        {
          path: "*",
          element: <PageError />,
        },
      ],
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
};

export default App;
