import Container from "./layout/Container";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SigninForm from "./pages/Signin";
import Signup from "./pages/Signup";
import Score from "./pages/Score";
import ProtectedRoute from "./pages/ProtectedRoute";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Container>
        <Header />
        <Switch>
          <ProtectedRoute path="/" exact component={Home} />
          <ProtectedRoute path="/score" component={Score} />
          <ProtectedRoute path="/profile" component={Profile} />
          <Route path="/signin" component={SigninForm} />
          <Route path="/signup" component={Signup} />
        </Switch>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
