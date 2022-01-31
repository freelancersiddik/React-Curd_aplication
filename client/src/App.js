import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// import pages
import Navbar from "./Components/Navbar";
import Table from "./Components/Table";
import Add from "./Pages/AddUser/Add";
import Edit from "./Pages/EditUser/Edit";
import View from "./Pages/ViewUser/View";
// end import pages..

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Table} />
        <Route exact path="/add/worker/" component={Add} />
        <Route exact path="/view/worker/:_id" component={View} />
        <Route exact path="/edit/worker/:_id" component={Edit} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  );
};

export default App;
