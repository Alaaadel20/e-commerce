import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import ReturnPolicy from "./pages/ReturnPolicy";
import PurchaseSteps from "./pages/PurchaseSteps";
import PrivacyPolicy from "./pages/privacyPolicy";
import Otour from "./pages/otour";
import Adhan from "./pages/Adhan";
import Maba5er from "./pages/Maba5er";
import OudBo5our from "./pages/oudBo5our";
import Mabsos from "./pages/Mabsos";
import Cart from "./pages/cart";
import ShopContextProvider from "./context/ShopContext";
import ProductContextProvider from "./context/ProductContext";
import ProductView from "./components/ProductView";
import CurrencyContextProvider from "./context/CurrencyContext";
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
      {
        path: "/otour",
        element: <Otour />,
      },
      {
        path: "/adhan",
        element: <Adhan />,
      },
      {
        path: "/maba5er",
        element: <Maba5er />,
      },
      {
        path: "/oudBo5our",
        element: <OudBo5our />,
      },
      {
        path: "/mabsos",
        element: <Mabsos />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/product-view/:id",
        element: <ProductView />,
      },
    ],
  },
]);
function App() {
  return (
    <ProductContextProvider>
      <ShopContextProvider>
        <CurrencyContextProvider>
          <RouterProvider router={router} />
        </CurrencyContextProvider>
      </ShopContextProvider>
    </ProductContextProvider>
  );
}

export default App;
