import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/HomeNavigation/Home";
import EmployeeLogin from "./components/Logins/EmployeeLogin/EmployeeLogin";
import AdminLogin from "./components/Logins/AdminLogin/AdminLogin";
import EmployeeNavigation from "./components/All-Modules/Employee Module/EmployeeNavigation";
import Project from "./components/All-Modules/Employee Module/Project";
import ProjectDetails from "./components/All-Modules/Employee Module/ProjectDetails";
import Manager from "./components/All-Modules/Employee Module/Manager";
import MyProfile from "./components/All-Modules/Employee Module/MyProfile";
import Opportunity from "./components/All-Modules/Employee Module/Opportunity";
import AdminNavigation from "./components/All-Modules/Admin Module/AdminNavigation";
import AdminProject from "./components/All-Modules/Admin Module/AdminProject";
import AdminProjectDetails from "./components/All-Modules/Admin Module/AdminProjectDetails";
import AdminEmployees from "./components/All-Modules/Admin Module/AdminEmployees";
import AdminManagers from "./components/All-Modules/Admin Module/AdminManagers";
import EmployeeSearch from "./components/All-Modules/Employee Module/Employee-Search";
import PrivateRouteAxis from "./components/Logins/EmployeeLogin/PrivateRouteAxis";
import PrivateAdmin from "./components/Logins/AdminLogin/PrivateAdmin";
import AdminNewsFeed from "./components/All-Modules/Admin Module/Admin-News-Feed/AdminNewsFeed";
import EmployeeNewsFeed from "./components/All-Modules/Employee Module/Employee-News-Feed/EmployeeNewsFeed";
import Services from "./components/HomeNavigation/Services/Services";
import AdminNotifications from "./components/All-Modules/Admin Module/Admin-Notifications/AdminNotifications";
import AdminProduct from "./components/All-Modules/Admin Module/AdminProduct";
import MyDocuments from "./components/All-Modules/Employee Module/Employee-Documents/MyDocuments";
import SalarySlip from "./components/All-Modules/Employee Module/Employee-Documents/SalarySlip";
import AppointmentLetter from "./components/All-Modules/Employee Module/Employee-Documents/AppointmentLetter";
import JoiningLetter from "./components/All-Modules/Employee Module/Employee-Documents/JoiningLetter";
import IncrementLetter from "./components/All-Modules/Employee Module/Employee-Documents/IncrementLetter";
import AdminAddProjects from "./components/All-Modules/Admin Module/Admin-Project/AdminAddProjects";
import AdminUpload from "./components/All-Modules/Admin Module/Admin-Documents/AdminUpload";
import AddNews from "./components/All-Modules/Admin Module/Admin-News-Feed/AddNews";
import SOP1 from "./components/HomeNavigation/Download-Documents/SOP1";
import SOP2 from "./components/HomeNavigation/Download-Documents/SOP2";
import SOP3 from "./components/HomeNavigation/Download-Documents/SOP3";
import SCD1 from "./components/HomeNavigation/Download-Documents/SCD1";
import SCD2 from "./components/HomeNavigation/Download-Documents/SCD2";
import SCD3 from "./components/HomeNavigation/Download-Documents/SCD3";
import Policy1 from "./components/HomeNavigation/Download-Documents/Policy1";
import Policy2 from "./components/HomeNavigation/Download-Documents/Policy2";
import Policy3 from "./components/HomeNavigation/Download-Documents/Policy3";
import Contact from "./components/HomeNavigation/Contact";
import AccountInfo from "./components/HomeNavigation/Services/AccountInfo";
import LoanInfo from "./components/HomeNavigation/Services/LoanInfo";





const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          Home Page
        </Route>
        <Route path="/services" element={<Services />}>
          Home Page
        </Route>
        <Route path="/employee-login" element={<EmployeeLogin />}></Route>        
        <Route path="/admin-login" element={<AdminLogin />}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/accinfo" element={<AccountInfo/>}></Route>
        <Route path="/loaninfo" element={<LoanInfo/>}></Route>
        


        <Route path="/sop1" element={<SOP1/>}></Route>
        <Route path="/sop2" element={<SOP2/>}></Route>
        <Route path="/sop3" element={<SOP3/>}></Route>
        <Route path="/scd1" element={<SCD1/>}></Route>
        <Route path="/scd2" element={<SCD2/>}></Route>
        <Route path="/scd3" element={<SCD3/>}></Route>
        <Route path="/policy1" element={<Policy1/>}></Route>
        <Route path="/policy2" element={<Policy2/>}></Route>
        <Route path="/policy3" element={<Policy3/>}></Route>
        <Route path="/employee-module" element={<PrivateRouteAxis children={<EmployeeNavigation />} />} ></Route>
        <Route
          path="/employee-project"
          element={<PrivateRouteAxis children={<Project />} />}
        ></Route>
        <Route
          path="/project-details"
          element={<PrivateRouteAxis children={<ProjectDetails />} />}
        ></Route>
        <Route
          path="/employee-documents"
          element={<PrivateRouteAxis children={<MyDocuments />} />}
        ></Route>
        <Route
          path="/employee-salaryslip"
          element={<PrivateRouteAxis children={<SalarySlip />} />}
        ></Route>
        <Route
          path="/employee-appointment-letter"
          element={<PrivateRouteAxis children={<AppointmentLetter />} />}
        ></Route>
        <Route
          path="/employee-joining-letter"
          element={<PrivateRouteAxis children={<JoiningLetter />} />}
        ></Route>
        <Route
          path="/employee-increment-letter"
          element={<PrivateRouteAxis children={<IncrementLetter />} />}
        ></Route>
        <Route
          path="/employee-search"
          element={<PrivateRouteAxis children={<EmployeeSearch />} />}
        ></Route>
        <Route
          path="/employee-news-feed"
          element={<PrivateRouteAxis children={<EmployeeNewsFeed />} />}
        ></Route>
        <Route
          path="/manager-details"
          element={<PrivateRouteAxis children={<Manager />} />}
        ></Route>
        <Route
          path="/myprofile-details"
          element={<PrivateRouteAxis children={<MyProfile />} />}
        ></Route>
        <Route
          path="/opportunities"
          element={<PrivateRouteAxis children={<Opportunity />} />}
        ></Route>
        
        <Route
          path="/admin-module"
          element={<PrivateAdmin children={<AdminNavigation />} />}
        ></Route>
        <Route
          path="/admin-project"
          element={<PrivateAdmin children={<AdminProject />} />}
        ></Route>
        <Route
          path="/admin-project-details"
          element={<PrivateAdmin children={<AdminProjectDetails />} />}
        ></Route>
        <Route
          path="/admin-employees"
          element={<PrivateAdmin children={<AdminEmployees />} />}
        ></Route>
        <Route
          path="/admin-managers"
          element={<PrivateAdmin children={<AdminManagers />} />}
        ></Route>
        <Route
          path="/admin-news-feed"
          element={<PrivateAdmin children={<AdminNewsFeed />} />}
        ></Route>
        <Route
          path="/admin-notifications"
          element={<PrivateAdmin children={<AdminNotifications />} />}
        ></Route>
        <Route
          path="/admin-products"
          element={<PrivateAdmin children={<AdminProduct />} />}
        ></Route>
        <Route
          path="/admin-project-add"
          element={<PrivateAdmin children={<AdminAddProjects />} />}
        ></Route>
        <Route
          path="/admin-document-add"
          element={<PrivateAdmin children={<AdminUpload />} />}
        ></Route>
        <Route
          path="/admin-news-add"
          element={<PrivateAdmin children={<AddNews />} />}
        ></Route>
      </Routes>
    </>
  );
};

export default App;
