import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Portfolio from './components/Pages/Protfolio';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/Daniel-s-Portfolio/' exact component={Home} />
          <Route path='/Daniel-s-Portfolio/home' exact component={Home} />
          <Route path='/Daniel-s-Portfolio/about' exact component={About} />
          <Route path='/Daniel-s-Portfolio/portfolio' exact component={Portfolio} />
          <Route path='/linkedin' component={() => {
            window.location.href = 'https://www.linkedin.com/in/yu-song-becsntu/';
            return null;
          }} />
          <Route path='/github' component={() => {
            window.location.href = 'https://github.com/Song0180';
            return null;
          }} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
