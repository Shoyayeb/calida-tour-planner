import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import AddPlan from "./Pages/AddPlan/AddPlan";
import AllOrders from "./Pages/AllOrders/AllOrders";
import Home from "./Pages/HomePage/Home/Home";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import MyOrders from "./Pages/MyOrders/MyOrders";
import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./Pages/Shared/Footer/Footer";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import Plan from "./Pages/SinglePlan/Plan/Plan";
import UpdateOrder from "./Pages/UpdateOrder/UpdateOrder";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/plans/:planId">
              <Plan></Plan>
            </PrivateRoute>
            <PrivateRoute path="/myorders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/allorders">
              <AllOrders></AllOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/updateorder/:planId">
              <UpdateOrder></UpdateOrder>
            </PrivateRoute>
            <PrivateRoute path="/myorders/updateorder/:planId">
              <UpdateOrder></UpdateOrder>
            </PrivateRoute>
            <PrivateRoute path="/newplan">
              <AddPlan></AddPlan>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
