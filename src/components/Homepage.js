import React from "react";
import Navbar from "./Navbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Homepage() {
  return (
    <Router>
      <div className="homepage">
        <Switch>
          {/* navbar */}
          <Route path="/" exact component={Navbar} />
          {/* slider */}
          {/* trusted by area */}
          {/* popular services slider */}
          {/* about section */}
          {/* explore with icons */}
          {/* founders msg */}
          {/* popular projects made by the sellers */}
          {/* footer */}

          {/* external */}
        </Switch>
      </div>
    </Router>
  );
}

export default Homepage;
