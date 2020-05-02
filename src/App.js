import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PageStudies from './pages/PageStudies';
import DetailBlog from './pages/DetailBlog';
import ScrollToTop from './scroll/ScrollToTop'

function App() {
    return (
        <div className="App">
            <Router basename="simple-sotas/">
                <ScrollToTop/>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/studies" component={PageStudies} />
                    <Route path="/detail" component={DetailBlog} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </Router>
        </div>
  );
}

export default App;
