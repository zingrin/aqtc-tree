import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AboutDetails from "../components/AboutDetails";
import ServiceDetails from "../pages/ServiceDetails";
import BlogDetails from "../pages/BlogDetails";
import BlogPage from "../components/BlogPage";
import ContactUs from "../components/ContactUs";
import NotFound from "../components/NotFound";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement:<NotFound></NotFound>,
    children: [
      { index: true, element: <Home /> },
      { path: "aboutDetails", element: <AboutDetails /> },
      { path: "/serviceDetails", element: <ServiceDetails /> },
      { path: "/blog", element: <BlogPage></BlogPage> },

      { path: "/blog/:id", element: <BlogDetails /> },
      { path: "/contact", element: <ContactUs /> },
    ],
  },
]);
export default router;
