import { createBrowserRouter,RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout"
import  AiDevelopmentServices from "./pages/services/aiDevelopmentServices/index"
import AiAgents from "./pages/services/aiAgents/index";
import GenerativeAi from "./pages/services/generativeAi/index";
import AiPoc from "./pages/services/aiPoc/index";
import DataMigration from "./pages/services/dataMigration";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // errorElement: <ErrorPage />,
    children: [
      { path: "/services/aiDevelopmentServices", element: <AiDevelopmentServices />},
      { path: "/services/aiAgents", element: <AiAgents />},
      { path: "/services/generativeAi", element: <GenerativeAi />},
      { path: "/services/aiPoc", element: <AiPoc />},
      { path: "/services/dataMigration", element: <DataMigration />},
],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
