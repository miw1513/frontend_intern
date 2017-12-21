import React, { Component } from 'react'
import { Button, FormControl, Form, Grid, Col, Row, Image, Thumbnail, Tabs, Tab } from 'react-bootstrap';
class FooterContainer extends Component {
  render() {
    return (
      <div style={{background: '#DCDCDC', padding: '32px', }}>
      
          <Grid>
          
      
          <Col sm={6} md={3}>
          
      <Col xs={12} md={8}><h4>RESOURCES</h4></Col>
          
      <Col xs={12} md={8}>Address</Col>
          
      <Col xs={12} md={8}>Address</Col>
          
      <Col xs={12} md={8}>Address</Col>
          
          </Col>

          <Col sm={6} md={3}>
          
      <Col xs={12} md={8}><h4>PRODUCT</h4></Col>
         
      <Col xs={12} md={8}>Book</Col>
          
      <Col xs={12} md={8}>Computer</Col>
          
      <Col xs={12} md={8}>Telephone</Col>
          
          </Col>

          <Col sm={6} md={3}>
          
      <Col xs={12} md={8}><h4>ABOUT</h4></Col>
          
      <Col xs={12} md={8}>Line</Col>
          
      <Col xs={12} md={8}>E-mail</Col>
         
      <Col xs={12} md={8}>Phone</Col>
          
          </Col>

          <Col sm={6} md={3}>
          
          <Col xs={12} md={8}><h4>CONTACT</h4></Col>
          
          <Col xs={12} md={8}>
          <Col xs={4} md={2}><Image width={25} height={25} src="https://imageog.flaticon.com/icons/png/512/24/24538.png" circle /></Col>
          <Col xs={4} md={2}><Image width={25} height={25} src="https://upload.wikimedia.org/wikipedia/commons/8/82/Facebook_icon.jpg" circle /></Col>
          <Col xs={4} md={2}><Image width={25} height={25} src="https://instagram-brand.com/wp-content/uploads/2016/11/app-icon2.png" circle /></Col>
          
          </Col>
              
        
          
          </Col>
      
        </Grid>
      </div>
    )
  }
}

export default FooterContainer
