// import { LandingPage } from "../containers/login/LandingPage";
import { DashBoard } from "../containers/dashboard/Dashboard";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../containers/layout/Layout";
import ErrorPage from "../containers/errorpage/ErrorPage";
import { ChatArea } from "../components/dashboard/search/Chatarea";
import { Model } from "../containers/createmodel/Model";
import { LawExplainer } from "../components/dashboard/models/IT /LawExplainer";
import Translate from "../components/dashboard/translate/Translate";

export const router = createBrowserRouter([

{

path: "/",
element: <Layout />,
errorElement: <ErrorPage />,
children: [
  {
    path: "/",
    element: (
        <DashBoard />
    )
  },
  {
    path: "search",
    element: (
        <ChatArea />
    )
  },
  {
    path: "createmodel",
    element: (
        <Model />
    )
  },
  {
    path: "lawexplainer",
    element: (
        <LawExplainer />
    )
  },
  {
    path: "translate",
    element: (
        <Translate />
    )
  },
]
}
]);
