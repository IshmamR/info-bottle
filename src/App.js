import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './Home';
import About from './components/About';
import UpcomingAll from './pages/UpcomingAll';
import TopAll from './pages/TopAll';
import CurrentAll from './pages/CurrentAll';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Nav />
                    <Route exact path='/' component={ Home } />
                    <Route exact path='/about' component={ About } />
                    <Route exact path='/upcoming-all' component={ UpcomingAll } />
                    <Route exact path='/top-all' component={ TopAll } />
                    <Route exact path='/current-all' component={ CurrentAll } />
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
