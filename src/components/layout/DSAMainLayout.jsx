import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, Row, Col, Header, Footer } from 'rsuite';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Profile from './Profile';
import DSATreeViewNav from '../sidebars/DSATreeViewNav';
import DSADashboard from './DSADashboard';

const DSAMainLayout = () => {
  return (
    <Router>
      <Container fluid>
        <Row>
          <Col md={12} className="header">
            <Header>
             {/* Logo */}
             <img src="/path/to/your/logo.png" alt="Logo" style={{ height: '40px', marginRight: '10px' }} />

               {/* Title */}
               <h1>Your Application Title</h1>
            </Header>
          </Col>
        </Row>
        <Row>
          <Col md={3} className="sidebar">
            <DSATreeViewNav/>
          </Col>
          <Col md={9} className="content">
            <Switch>
              <Route path="/dashboard" component={DSADashboard} />
              <Route path="/plans" component={Profile} />
              {/* Add more routes for your components */}
            </Switch>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="footer">
            <Footer>
              {/* Footer content goes here */}
            </Footer>
          </Col>
        </Row>
      </Container>
    </Router>
  );
};

export default DSAMainLayout;
