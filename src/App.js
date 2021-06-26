import "./App.scss";
import "./Styles/index.scss";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthenticatedRoutes from "./Utils/Routes/AuthenticatedRoutes";
import Upcoming from "./Components/Upcoming/Upcoming";
import SpecificMovie from "./Components/SpecificMovie/SpecificMovie";
import Genre from "./Components/Genre/Genre";
import ScrollToTop from "./Utils/ScrollToTop";

function App() {
  return (
    <div className="h-100">
      <Router>
        <ScrollToTop />
        <Switch>
          <AuthenticatedRoutes exact path="/" component={Home} />
          <AuthenticatedRoutes exact path="/upcoming" component={Upcoming} />
          <AuthenticatedRoutes
            exact
            path="/movie/:id"
            component={SpecificMovie}
          />
          <AuthenticatedRoutes exact path="/genre/:id" component={Genre} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
