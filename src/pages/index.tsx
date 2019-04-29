import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./main";

export default function App() {
  return (
    <Router>
      <React.Fragment>
        <Route path="/" exact component={MainPage} />
      </React.Fragment>
    </Router>
  )
}
