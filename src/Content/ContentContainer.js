import React, { Component } from 'react'
import { Button, FormControl, Form, Grid, Col, Row, Image, Thumbnail, Tabs, Tab } from 'react-bootstrap';
class ContentContainer extends Component {
  render() {
    return (
      <div>
     <Grid>
     <Col xs={6} md={4}></Col>
       <Col xs={6} md={4}> <Image width={92} height={92} src="https://image.shutterstock.com/z/stock-vector-geek-gorilla-logo-cool-gorilla-head-vector-nerdy-monkey-logo-691672750.jpg" circle /></Col>
       <Col xsHidden md={4}></Col>
   </Grid>
   <Grid>
    <Col xs={6} md={4}></Col>
      <Col xs={6} md={4}> <Image width={92} height={92} src="https://image.shutterstock.com/z/stock-vector-geek-gorilla-logo-cool-gorilla-head-vector-nerdy-monkey-logo-691672750.jpg" circle /></Col>
      <Col xsHidden md={4}></Col>
  </Grid>
  <Grid>
    <Col xs={6} md={4}></Col>
      <Col xs={6} md={4}> <Image width={92} height={92} src="https://image.shutterstock.com/z/stock-vector-geek-gorilla-logo-cool-gorilla-head-vector-nerdy-monkey-logo-691672750.jpg" circle /></Col>
      <Col xsHidden md={4}></Col>
  </Grid>
      </div>
    )
  }
}

export default ContentContainer
