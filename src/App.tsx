import { createBrowserRouter,RouterProvider } from "react-router-dom";
import  AiDevelopmentServices from "./pages/services/aiDevelopmentServices/index"
import MainLayout from "./layouts/MainLayout"
import ChatbotDevelopmentService from "./pages/services/chatbotDevelopmentService"
import ErrorPage from "./pages/ErrorPage"
import ContactPage from "./pages/ContactPage";
import Hiring1 from "./pages/hiring/hiring1";
import Hiring2 from "./pages/hiring/hiring2";
import Hiring3 from "./pages/hiring/hiring3";
import ReferralPage from "./pages/referralPage";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage
     />,
    children: [
      { path: "/services/aiDevelopmentServices", element: <AiDevelopmentServices />},
      { path: "/services/chatbotDevelopmentService", element: <ChatbotDevelopmentService />},
      { path: "/contact", element: <ContactPage />},
      {path: "/hiring/hiring1", element:<Hiring1 />},
      {path: "/hiring/hiring2", element:<Hiring2 />},
      {path: "/hiring/hiring3", element:<Hiring3 />},
      {path: "/referralPage", element:<ReferralPage />},

    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
