import React from 'react';
import {Switch, Route} from "react-router"
import { MainPage, PostPage } from "./pages"

function App() {
  return (
      <Switch>
        <Route exact path={'/'} component={MainPage}/>
        <Route path={'/post/:path/:id?'} component={PostPage}/>
      </Switch>
  );
}

export default App;
