import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../src/css/App.css';
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
import ProfilSection from "./js/components/admin/assets/section/settingsSection/ProfilAdmin/ProfilSection";
import ImportSection from "./js/components/admin/assets/section/settingsSection/ImportData/ImportSection";
import ListFiliere from "./js/components/admin/assets/section/applicationSection/filieres/ListFiliere";
import ListNews from "./js/components/admin/assets/section/applicationSection/news/ListNews";
import FormInfos from "./js/components/admin/assets/section/applicationSection/infos/FormInfos";
import EditStagiaire from "./js/components/admin/assets/section/usersSection/stagiaires/EditStagiaire";
import ProfilStagiaire from "./js/components/admin/assets/section/usersSection/stagiaires/ProfilStagiaire";
import EditFormateur from "./js/components/admin/assets/section/usersSection/formateurs/EditFomateur";
import ProfilFormateur from "./js/components/admin/assets/section/usersSection/formateurs/ProfilFormateur";
import ProfilConseilleur from "./js/components/admin/assets/section/usersSection/conseilleurs/ProfilConseilleur";
import EditConseilleur from "./js/components/admin/assets/section/usersSection/conseilleurs/EditConseilleur";
import ListDoc from "./js/components/admin/assets/section/documentsSection/ListDoc";
import EditProfil from "./js/components/admin/assets/section/settingsSection/ProfilAdmin/EditProfil";
import DetailsDoc from "./js/components/admin/assets/section/documentsSection/DetailsDoc";
import DetailsFiliere from "./js/components/admin/assets/section/applicationSection/filieres/DetailsFiliere";
import EditFiliere from "./js/components/admin/assets/section/applicationSection/filieres/EditFiliere";
import AddFiliere from "./js/components/admin/assets/section/applicationSection/filieres/AddFiliere";
import DetailsNew from "./js/components/admin/assets/section/applicationSection/news/DetailsNew";
import EditNew from "./js/components/admin/assets/section/applicationSection/news/EditNew";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="infos" element={<InfosDetails />} />
          <Route path="filieres" element={<FiliereList />} />
          <Route path="news" element={<NewsList />} />
          <Route path="news/newDetails/:id" element={<NewsDetails />} />
          <Route path="login" element={<Login />} />
          <Route path="espaceStagiaire" element={<EspaceStagiaire />} />
          <Route path="*" element={<NoPage />} />
          <Route path="dashboardAdmin" element={<DashboardAdmin />} />
          <Route path="dashboardAdmin/users" element={<UsersSection />} />
          <Route path="dashboardAdmin/users/ListStagiaires" element={<ListStagiaire />} />
          <Route path="dashboardAdmin/users/ListStagiaires/ProfilStagiaire/:id" element={<ProfilStagiaire />} />
          <Route path="dashboardAdmin/users/ListStagiaires/EditStagiaire/:id" element={<EditStagiaire />} />
          <Route path="dashboardAdmin/users/ListFormateurs" element={<ListFomateur />} />
          <Route path="dashboardAdmin/users/ListFormateurs/ProfilFormateur/:id" element={<ProfilFormateur />} />
          <Route path="dashboardAdmin/users/ListFormateurs/EditFormateur/:id" element={<EditFormateur />} />
          <Route path="dashboardAdmin/users/ListConseilleurs" element={<ListConseilleur />} />
          <Route path="dashboardAdmin/users/ListConseilleurs/ProfilConseilleur/:id" element={<ProfilConseilleur />} />
          <Route path="dashboardAdmin/users/ListConseilleurs/EditConseilleur/:id" element={<EditConseilleur />} />
          <Route path="dashboardAdmin/application" element={<ApplicationSection />} />
          <Route path="dashboardAdmin/application/filieres" element={<ListFiliere />} />
          <Route path="dashboardAdmin/application/filieres/addFiliere" element={<AddFiliere />} />
          <Route path="dashboardAdmin/application/filieres/detailsFiliere/:id" element={<DetailsFiliere />} />
          <Route path="dashboardAdmin/application/filieres/editFiliere/:id" element={<EditFiliere />} />
          <Route path="dashboardAdmin/application/news" element={<ListNews />} />
          <Route path="dashboardAdmin/application/news/detailsNew/:id" element={<DetailsNew />} />
          <Route path="dashboardAdmin/application/news/editNew/:id" element={<EditNew />} />
          <Route path="dashboardAdmin/application/infos" element={<FormInfos />} />
          <Route path="dashboardAdmin/documents" element={<ListDoc />} />
          <Route path="dashboardAdmin/documents/details/:id" element={<DetailsDoc />} />
          <Route path="dashboardAdmin/profil" element={<ProfilSection />} />
          <Route path="dashboardAdmin/profil/editProfil/:id" element={<EditProfil />} />
          <Route path="dashboardAdmin/importData" element={<ImportSection />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
