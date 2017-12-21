import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarContainer from './Navbar'
import FooterConatiner from './Footer'
import ContentContainer from './Content'
import CardContainer from './Card'
import data from './../src/data.json'
import { Button, FormControl, Form, Grid, Col, Row, Image, Thumbnail, Tabs, Tab } from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){

  }

  card = () => {
    return (
      data.map((item)=>{
        const cardBox =   (
        <Col sm={6} md={3}>
        <CardContainer {...item}/>
        </Col>

        )
        return cardBox
      }) 
    )
  }

  render() {
    return (
      <div>
        
        <NavbarContainer />
        <ContentContainer />
        <Grid>
        <Row className="show-grid">
        {this.card()}
        </Row>
      </Grid>
        <FooterConatiner />
      </div>
    )
  }
}

export default App;
