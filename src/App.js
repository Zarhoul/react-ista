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
import NewsDetails from "../src/js/components/pages/assets/news/NewsDetails";
import DashboardAdmin from "./js/components/admin/DashboardAdmin";
import UsersSection from "./js/components/admin/assets/section/usersSection/UsersSection";
import ListStagiaire from "./js/components/admin/assets/section/usersSection/stagiaires/ListStagiaire";
import ListFomateur from "./js/components/admin/assets/section/usersSection/formateurs/ListFomateur";
import ListConseilleur from "./js/components/admin/assets/section/usersSection/conseilleurs/ListConseilleur";
import ApplicationSection from "./js/components/admin/assets/section/applicationSection/ApplicationSection";
import DocsSection from "./js/components/admin/assets/section/documentsSection/documents/DocsSection";
import ProfilSection from "./js/components/admin/assets/section/settingsSection/ProfilAdmin/ProfilSection";
import ExportSection from "./js/components/admin/assets/section/settingsSection/ExportData/ExportSection";
import ImportSection from "./js/components/admin/assets/section/settingsSection/ImportData/ImportSection";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="infos" element={<InfosDetails />} />
          <Route path="filieres" element={<FiliereList />} />
          <Route path="news" element={<NewsList />} />
          <Route path="news/{id}" element={<NewsDetails />} />
          <Route path="login" element={<Login />} />
          <Route path="espaceStagiaire" element={<EspaceStagiaire />} />
          <Route path="*" element={<NoPage />} />
          <Route path="dashboardAdmin" element={<DashboardAdmin />} />
          <Route path="dashboardAdmin/users" element={<UsersSection />} />
          <Route path="dashboardAdmin/users/ListStagiaires" element={<ListStagiaire />} />
          <Route path="dashboardAdmin/users/ListFormateurs" element={<ListFomateur />} />
          <Route path="dashboardAdmin/users/ListConseilleurs" element={<ListConseilleur />} />
          <Route path="dashboardAdmin/application" element={<ApplicationSection />} />
          <Route path="dashboardAdmin/documents" element={<DocsSection />} />
          <Route path="dashboardAdmin/profil" element={<ProfilSection />} />
          <Route path="dashboardAdmin/exportData" element={<ExportSection />} />
          <Route path="dashboardAdmin/importData" element={<ImportSection />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
