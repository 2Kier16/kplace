import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import PageTop from "./components/pagetop/pageTop";
import Home from "./pages/home/home";
import Single from "./pages/single/single";
import Write from "./pages/write/write";
import Login from "./pages/login/login";
import Settings from "./pages/settings/settings";
import Register from "./pages/register/Register";

function App() {
  const user = false;
  return (
    <Router>
      <PageTop />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
