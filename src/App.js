import { Switch, Route } from "react-router-dom";
import "./App.css";
import ToolBar from "./components/ToolBar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <div className="App">
      <ToolBar />
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/" component={HomePage} exact />
      </Switch>
    </div>
  );
}

export default App;
