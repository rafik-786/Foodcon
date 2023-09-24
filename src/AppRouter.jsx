import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/home";
import AboutPage from "./Pages/about";
import CartPage from "./Pages/cart";
import ErrorPage from "./Pages/error";
import App from "./App";
import Restaurant from "./Pages/restuaurant";
import SignUp from "./Pages/signup";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/restaurant/:id" element={<Restaurant />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
