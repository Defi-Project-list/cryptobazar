import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Error from "./pages/Error";
import News from "./pages/News";
import Coins from "./pages/Coins";
import SingleCoin from "./pages/SingleCoin";
import Search from "./pages/Search";
import ScrollToTop from "./utils/ScrollToTop";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Coins />}></Route>
            <Route path="/coin/:id" element={<SingleCoin />}></Route>
            <Route path="/news" element={<News />}></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
};

const Layout = () => {
  return (
    <div>
      <ScrollToTop />
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
