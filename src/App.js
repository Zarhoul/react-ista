import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../src/css/App.css';
import NavBar from './js/components/pages/assets/commun/NavBar';
import Home from "./js/components/pages/assets/home/Home";
import InfosDetails from "./js/components/pages/assets/infos/InfosDetails";
import FiliereList from "./js/components/pages/assets/filieres/FiliereList";
import NewsList from "./js/components/pages/assets/news/NewsList";
import Login from '../src/js/components/auth/Login';
import EspaceStagiaire from '../src/js/components/auth/EspaceStagiaire';
import NoPage from '../src/js/components/pages/assets/nopage/NoPage';
import Footer from "./js/components/pages/assets/commun/Footer";
import NewsDetails from "../src/js/components/pages/assets/news/NewsDetails";

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
      <Routes>
          <Route index element={<Home />} />
          <Route path="infos" element={<InfosDetails />} />
          <Route path="filieres" element={<FiliereList />} />
          <Route path="news" element={<NewsList />} />
          <Route path="news/{id}" element={<NewsDetails />} />
          <Route path="login" element={<Login />} />
          <Route path="espaceStagiaire" element={<EspaceStagiaire />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
