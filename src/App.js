import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//MODULES
import './App.css';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Login from './auths/Login';
import About from './components/About';
import Register from './auths/Register';
import Footer from './components/Footer';



function App() {
  return (<Router>
    <main className="App">
        <Header />
        <Switch>
        <Route path="/" exact>
          <Register />
        </Route>
        <Route path="/login" >
          <Login />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        </Switch>
        <Footer />
      
    </main>
  </Router>);
}

export default App;
