import { Outlet } from "react-router";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div className="h-screen flex flex-col ">
      <Header />
      <main className="mb-auto w-[85%] mx-auto py-5">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
