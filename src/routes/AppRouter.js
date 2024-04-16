// // AppRouter.js
// import React from "react";
// import { Route, Switch } from "react-router-dom";
// import AppNavbar from "../modules/app/components/nav/AppNavbar";
// import AppFooter from "../modules/app/components/footer/AppFooter";
// import Curriculum from "../modules/app/pages/Curriculum";
// import MemberEvents from "../modules/app/pages/MemberEvents";
// import Solutions from "../modules/app/pages/Solutions";
// import Tutorials from "../modules/app/pages/Tutorials";
// import ProductRequests from "../modules/app/pages/ProductRequests";
// import HelpTickets from "../modules/app/pages/HelpTickets";
// import Profile from "../modules/app/pages/Profile";
// import AuthRoute from "../modules/auth/AuthRoute";


// const AppRouter = () => {
//   return (
//     <div>
//       <AppNavbar />
//       <Switch>
//         <AuthRoute path="/product_requests" component={ProductRequests} />
//         <AuthRoute path="/curriculum" component={Curriculum} />
//         <AuthRoute path="/member_events" component={MemberEvents} />
//         <AuthRoute path="/solutions" component={Solutions} />
//         <AuthRoute path="/tutorials" component={Tutorials} />
//         <AuthRoute path="/help_tickets" component={HelpTickets} />
//         <AuthRoute path="/profile" component={Profile} />
//       </Switch>
//       <AppFooter />
//     </div>
//   );
// };

// export default AppRouter;
