import Homepage from "./components/Homepage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Seller from "./components/Seller";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/seller" component={Seller} />
          <Route path="/" exact component={Homepage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
