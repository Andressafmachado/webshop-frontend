import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Switch>
        {/* <Route path="/discover" component={DiscoverMoviesPage} />
        <Route path="/about" component={AboutPage} /> */}
        <Route path="/" component={HomePage} exact />
      </Switch>
    </div>
  );
}

export default App;
