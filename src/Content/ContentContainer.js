import React, { Component } from 'react'
import { Button, FormControl, Form, Grid, Col, Row, Image, Thumbnail, Tabs, Tab, Jumbotron } from 'react-bootstrap';
class ContentContainer extends Component {
  render() {
    return (
      <div style={{background: '#F0F8FF', fontSize: 20}}>
      <Jumbotron>
     <Grid>
     <Col xs={6} md={4}></Col>
       <Col xs={6} md={4}> 
       <h3>สินค้าใหม่พร้อมจำหน่ายแล้ว!</h3>
       </Col>
       <Col xsHidden md={4}></Col>
   </Grid>
   <Grid>
    <Col xs={6} md={4}></Col>
      <Col xs={6} md={4}><h5>พร้อมวางจำหน่ายแล้ววันนี้ สั่งจองเลย!</h5></Col>
      <Col xsHidden md={4}></Col>
  </Grid>
  <Grid>
    <Col xs={6} md={4}></Col>
    <Col xs={6} md={4}><p><Button bsStyle="primary">ดูเพิ่มเติม</Button></p></Col>
      <Col xsHidden md={4}></Col>
  </Grid>
  </Jumbotron>
      </div>
    )
  }
}

export default ContentContainer
