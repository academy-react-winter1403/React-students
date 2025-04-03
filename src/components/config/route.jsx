import { createBrowserRouter } from "react-router-dom";
import LoginForm from "../Authorization/LoginForm";
import BlogDetail from "../BlogDetail/BlogDetail";
import BlogList from "../BlogList/BlogList";
import CourseDetail from "../CourseDetail/CourseDetail";
import CourseList from "../CourseList/CourseList";
import NotFound from "../error/NotFound";
import Content from "../Landing/Content";
import Route from "../Layout";
import Panel from "../UsePanel/Panel";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Route />, 
    children:[
      {
        path: "/",
        element: <Content/>,
        errorElement: <Error/>,
      },
      {
        path: "/courseList",
        element: <CourseList/>,
        errorElement: <Error/>,
      },
      {
        path: "/blogList",
        element: <BlogList/>,
        errorElement: <Error/>,
      },
      {
        path: "/blogDetail",
        element: <BlogDetail/>,
        errorElement: <Error/>,
      },
      {
        path: "/courseDetail/:courseId",
        element: <CourseDetail/>,
        errorElement: <Error/>,
      },

    ],
  },
  {
    path: "/UserPanel",
    element: <Panel />,
    errorElement: <Error />,
  }, 
  {
    path: "/Register",
    element: <LoginForm />,
    errorElement: <Error />,
  },
  {
    path: "*",
    element: <NotFound />
  },
]);