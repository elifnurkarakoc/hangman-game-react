import Container from "./layout/Container";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import SigninForm from "./pages/Signin";
import Signup from "./pages/Signup";
import Score from "./pages/Score";
import ProtectedRoute from "./pages/ProtectedRoute";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  let userObject = JSON.parse(localStorage.getItem("user"));
  let loggedIn = userObject != null ? true : false;
  return (
    <Router>
      <Container>
        <Header />
        <Switch>
          <ProtectedRoute path="/" exact component={Home} />
          <ProtectedRoute path="/score" component={Score} />
          <ProtectedRoute path="/profile" component={Profile} />
          {/* //TODO: Kontrol eklicem --> Signup ve signin sayfaları loggedIn==true ise açma mevcut dayfada kal. */}
          {/* <Route path="/signin" exact components={loggedIn ? Home: SigninForm} /> */}
          {/* <Route path="/signin" component={loggedIn ? Home: SigninForm} /> */}
          {/* <Route path="/signup" component={loggedIn ? Home: Signup} /> */}
          {/* <Route path="/signin" exact >
            {
              loggedIn ? <Redirect to={{ pathname: "/" }} />: <SigninForm />
            }
            </Route> */}
          <Route path="/signin" component={SigninForm} />
          <Route path="/signup" component={Signup} />
        </Switch>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
