import React, { Component } from 'react'
// import logo from './logo.svg'
import Logo from './../logo.svg'
import './../App.css'
import { Button, FormControl, Form, Grid, Col, Row, Image, Thumbnail, Tabs, Tab } from 'react-bootstrap';
class NavbarContainer extends Component {
  render() {
    return (
      <div className="App">
       <Grid>
    <Row className="show-grid">
      <Col xs={6} md={4}>  
      </Col>

      <Col xs={6} md={4}>
      <Image width={92} height={92} src="https://image.shutterstock.com/z/stock-vector-geek-gorilla-logo-cool-gorilla-head-vector-nerdy-monkey-logo-691672750.jpg" circle />
      </Col>

      <Col xs={6} md={4}>  
       </Col>
    
    </Row>
  </Grid>

  <Grid>
    <Row className="show-grid">

    <Col xs={12} md={8}>
    <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
    <Tab eventKey={1} title="Tab 1"></Tab>
    <Tab eventKey={2} title="Tab 2"></Tab>
    <Tab eventKey={3} title="Tab 3" ></Tab>
    </Tabs>
  </Col>

    </Row>
  </Grid>
      </div>
    );
  }
}

export default NavbarContainer
