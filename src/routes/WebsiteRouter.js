import React from "react";
import { Route, Routes } from "react-router-dom";
import WebsiteNavbar from "../modules/website/components/nav/WebsiteNavbar";
import WebsiteFooter from "../modules/website/components/footer/WebsiteFooter";
import Home from "../modules/website/pages/Home";
import Industry from "../modules/website/pages/Industry";
import Students from "../modules/website/pages/Students";
import Welcome from "../modules/website/pages/Welcome";
import About from "../modules/website/pages/About";
import Events from "../modules/website/pages/Events";
import Board from "../modules/website/pages/Board";
import Marketing from "../modules/website/pages/Marketing";
import Registration from "../modules/website/pages/Registration";
import ProfilePage from "../modules/website/pages/ProfilePage";
import Login from "../modules/website/pages/Login";
import ForgotPassword from "../modules/website/pages/ForgotPassword";
import ForgotPasswordVerifyCode from "../modules/website/pages/ForgotPasswordVerifyCode";
import ProspectiveSchools from "../modules/website/pages/ProspectiveSchools";
import FAQSection from "../modules/website/pages/FAQSection";
import KnowledgeBase from "../modules/website/pages/Knowledgebase";
import ResetPassword from "../modules/website/pages/ResetPassword";

const WebsiteRouter = () => {
  return (
    <div>
      <WebsiteNavbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/industry" element={<Industry />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/students" element={<Students />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/board" element={<Board />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/FAQSection" element={<FAQSection />} />
        <Route path="/knowledgebase" element={<KnowledgeBase />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route
          path="/forgotpasswordverifycode"
          element={<ForgotPasswordVerifyCode />}
        />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/prospectiveschools" element={<ProspectiveSchools />} />
      </Routes>
      <WebsiteFooter />
    </div>
  );
};

export default WebsiteRouter;
