import React from 'react';
import {Switch, Route} from "react-router"
import { MainPage, PostPage, TestPage } from "./pages"

function App() {
  return (
      <Switch>
        <Route exact path={'/'} component={MainPage}/>
        <Route path={'/post/:path/:id?'} component={PostPage}/>
        <Route path={'/test'} component={TestPage}/>
      </Switch>
  );
}

export default App;
