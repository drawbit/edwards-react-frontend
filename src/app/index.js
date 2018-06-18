import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import store from './configureStore';
import history from './services/history';
import ScrollToTop from './containers/ScrollToTop';
import Wrapper from './containers/Wrapper';
import { Header, Footer } from './components';
import {
  Home,
  Details,
  SelectionStart,
  SelectionApplication,
  SelectionLocation,
  SelectionMaintenance,
  SelectionPump,
  SelectionRisk,
  Calculating,
  Service,
  Product,
  Call,
  Email,
  Thanks
} from './pages';
import './index.css';

const App = () => (
  <Provider store={ store }>
    <Wrapper>
      <ConnectedRouter history={ history }>
        <ScrollToTop>
          <Header />
          <div className="app">
            <Route exact path="/" component={ Home } />
            <Route path="/details" component={ Details } />
            <Route exact path="/selection" component={ SelectionStart } />
            <Route path="/selection/application" component={ SelectionApplication } />
            <Route path="/selection/location" component={ SelectionLocation } />
            <Route path="/selection/maintenance" component={ SelectionMaintenance } />
            <Route path="/selection/pump" component={ SelectionPump } />
            <Route path="/selection/risk" component={ SelectionRisk } />
            <Route path="/calculating" component={ Calculating } />
            <Route exact path="/service" component={ Service } />
            <Route exact path="/service/:slug" component={ Product } />
            <Route exact path="/service/:slug/call" component={ Call } />
            <Route exact path="/service/:slug/email" component={ Email } />
            <Route exact path="/service/:slug/thanks" component={ Thanks } />
          </div>
          <Footer />
        </ScrollToTop>
      </ConnectedRouter>
    </Wrapper>
  </Provider>
);

export default App;
