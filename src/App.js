import { Switch, Route } from "react-router-dom";
import "./App.css";
import ToolBar from "./components/ToolBar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import SignupPage from "./pages/SignupPage";
import { useDispatch } from "react-redux";
import { bootstrapLogin } from "./store/user/actions";
import { useEffect } from "react";
import OrderDetails from "./pages/OrderDetails";
import MyProfile from "./pages/MyProfile";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bootstrapLogin());
  }, [dispatch]);
  return (
    <div className="App">
      <ToolBar />
      <Switch>
        <Route path="/cart" component={ShoppingCartPage} />
        <Route path="/orderdetails/:id" component={OrderDetails} />
        <Route path="/myprofile" component={MyProfile} />
        <Route path="/productdetails/:id" component={ProductDetailsPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/" component={HomePage} exact />
      </Switch>
    </div>
  );
}

export default App;
