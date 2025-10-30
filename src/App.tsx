import Landingpage from "./pages/Landingpage";
import ChatbotDevelopmentService from "./pages/services/chatbotDevelopmentService";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AiDevelopmentServices from "./pages/services/aiDevelopmentServices/index";
import AiAgents from "./pages/services/aiAgents/index";
import GenerativeAi from "./pages/services/generativeAi/index";
import AiPoc from "./pages/services/aiPoc/index";
import DataMigration from "./pages/services/dataMigration";
import AiConsulting from "./pages/services/aiConsulting";
import DigitalTransformation from "./pages/services/digitalTransformation";
import DiscoveryWorkshop from "./pages/services/discoveryWorkshop";
import TechnicallyFeasibility from "./pages/services/technicalfeasibilty";
import UserExperience from "./pages/services/userExperience";
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
      { index: true, element: <Landingpage /> },
      {
        path: "/services/aidevelopmentservices",
        element: <AiDevelopmentServices />,
      },
      { path: "/services/aiagents", element: <AiAgents /> },
      {
        path: "/services/chatbotdevelopmentservice",
        element: <ChatbotDevelopmentService />,
      },
      { path: "/services/generativeai", element: <GenerativeAi /> },
      { path: "/services/aipoc", element: <AiPoc /> },
      { path: "/services/datamigration", element: <DataMigration /> },
      { path: "/services/aiconsulting", element: <AiConsulting /> },
      { path: "/services/digitaltransformation", element: <DigitalTransformation /> },
      { path: "/services/workshop", element: <DiscoveryWorkshop /> },
      { path: "/services/technicalfeasibility", element: <TechnicallyFeasibility /> },
      { path: "/services/userexperience", element: <UserExperience /> },
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
