import './App.css';
import Header from './components/Header.js';
import Welcome from './components/Welcome.js';
import Login from './auths/Login';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
