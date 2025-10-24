import { createBrowserRouter,RouterProvider } from "react-router-dom";
import  AiDevelopmentServices from "./pages/services/aiDevelopmentServices/index"
import MainLayout from "./layouts/MainLayout"
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // errorElement: <ErrorPage />,
    children: [
      { path: "/services/aiDevelopmentServices", element: <AiDevelopmentServices />},
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}
export default App;