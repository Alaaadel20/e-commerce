import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import ReturnPolicy from "./pages/ReturnPolicy";
import PurchaseSteps from "./pages/PurchaseSteps";
import PrivacyPolicy from "./pages/privacyPolicy";
const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/return",
        element: <ReturnPolicy />,
      },
      { path: "/purchase", element: <PurchaseSteps /> },
      {
        path: "/privacy",
        element: <PrivacyPolicy />,
      },
    ],
  },
]);
function App() {
  return (
    <RouterProvider router={router} />
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="return" element={<ReturnPolicy />} />
    //     <Route path="purchase" element={<PurchaseSteps />} />
    //     <Route path="privacy" element={<PrivacyPolicy />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
