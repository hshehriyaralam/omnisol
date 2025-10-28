import { createBrowserRouter,RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout"
import  AiDevelopmentServices from "./pages/services/aiDevelopmentServices/index"
import AiAgents from "./pages/services/aiAgents/index";
import GenerativeAi from "./pages/services/generativeAi/index";
import AiPoc from "./pages/services/aiPoc/index";
import DataMigration from "./pages/services/dataMigration";
import AiConsulting from "./pages/services/aiConsulting";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // errorElement: <ErrorPage />,
    children: [
      { path: "/services/aidevelopmentservices", element: <AiDevelopmentServices />},
      { path: "/services/aisgents", element: <AiAgents />},
      { path: "/services/generativeai", element: <GenerativeAi />},
      { path: "/services/aipoc", element: <AiPoc />},
      { path: "/services/datamigration", element: <DataMigration />},
      { path: "/services/aiconsulting", element: <AiConsulting />},
],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
