import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AiDevelopmentServices from "./pages/services/aiDevelopmentServices/index"
import MainLayout from "./layouts/MainLayout"
import Landingpage from "./pages/Landingpage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Landingpage /> },
      { path: "services/aiDevelopmentServices", element: <AiDevelopmentServices /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
