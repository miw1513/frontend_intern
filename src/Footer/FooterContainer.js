import React, { Component } from 'react'
import { Button, FormControl, Form, Grid, Col, Row, Image, Thumbnail, Tabs, Tab } from 'react-bootstrap';
class FooterContainer extends Component {
  render() {
    return (
      <div style={{background: '#DCDCDC', padding: '32px'}}>
      
          <Grid>
          <Row className="show-grid">
      
          <Col sm={6} md={3}>
          <Grid>
      <Col xs={6} md={4}><h4>RESOURCES</h4></Col>
          </Grid>
          <Grid>
      <Col xs={6} md={4}>Address</Col>
          </Grid>
          <Grid>
      <Col xs={6} md={4}>Address</Col>
          </Grid>
          <Grid>
      <Col xs={6} md={4}>Address</Col>
          </Grid>
          </Col>

          <Col sm={6} md={3}>
           <Grid>
      <Col xs={6} md={4}><h4>PRODUCT</h4></Col>
          </Grid>
          <Grid>
      <Col xs={6} md={4}>BOOK</Col>
          </Grid>
          <Grid>
      <Col xs={6} md={4}>COMPUTER</Col>
          </Grid>
          <Grid>
      <Col xs={6} md={4}>TELEPHONE</Col>
          </Grid>
          </Col>

          <Col sm={6} md={3}>
          <Grid>
      <Col xs={6} md={4}><h4>ABOUT</h4></Col>
          </Grid>
          <Grid>
      <Col xs={6} md={4}>LINE</Col>
          </Grid>
          <Grid>
      <Col xs={6} md={4}>E-MAIL</Col>
          </Grid>
          <Grid>
      <Col xs={6} md={4}>PHONE</Col>
          </Grid>
          </Col>

          <Col sm={6} md={3}>
          <Grid>
          <Col xs={6} md={4}><h4>ABOUT</h4></Col>
              </Grid>
              <Grid>
          <Col xs={6} md={4}>LINE</Col>
              </Grid>
              <Grid>
          <Col xs={6} md={4}>E-MAIL</Col>
              </Grid>
              <Grid>
          <Col xs={6} md={4}>PHONE</Col>
              </Grid>
          </Col>
      
          </Row>
        </Grid>
      </div>
    )
  }
}

export default FooterContainer
