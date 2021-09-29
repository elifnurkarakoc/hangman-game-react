import Container from "./layout/Container";
import Content from "./layout/Content";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SigninForm from "./pages/Signin";
import Signup from "./pages/Signup";
import Score from "./pages/Score";
import ProtectedRoute from "./pages/ProtectedRoute";
import Home from "./pages/Home";
import { ThemeProvider } from "./contexts/ThemeContext";
function App() {
  return (
    <ThemeProvider>
      <Router>
        <Container>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <ProtectedRoute path="/score" component={Score} />
            <Route path="/signin" component={SigninForm} />
            <Route path="/signup" component={Signup} />
          </Switch>
          <Footer />
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
