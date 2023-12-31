import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
function AppLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;
