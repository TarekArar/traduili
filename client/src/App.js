import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import { AuthProvider } from './context/auth';
import AuthRoute from './util/AuthRoute';

import MenuBar from './components/MenuBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import SinglePost from './pages/SinglePost';
import Blog from './pages/Blog';
import TradTypes from './pages/TradTypes';
import Trads from './pages/Trads';
import Recrutement from './pages/Recrutement';
import Apropos from './pages/Apropos';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Container>
          <MenuBar />
          <Route exact path="/" component={Blog} />
          <Route exact path="/blog" component={Home} />
          <Route exact path="/traductions" component={TradTypes} />
          <Route exact path="/traducteurs" component={Trads} />
          <Route exact path="/recrutement" component={Recrutement} />
          <Route exact path="/apropos" component={Apropos} />

          <AuthRoute exact path="/login" component={Login} />
          <AuthRoute exact path="/register" component={Register} />
          <Route exact path="/posts/:postId" component={SinglePost} />
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
