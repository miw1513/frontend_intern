import React, { Component } from 'react'
import ImagesContainer from './Images'
import CardContentContainer from './CardContent'
import { Button, FormControl, Form, Grid, Col, Row, Image, Thumbnail, Tabs, Tab } from 'react-bootstrap';
class CardContainer extends Component {
  constructor(props){
    super(props)
    
  }
  componentDidMount(){

  }

  render() {
    const {id, name, pic, description} = this.props
    console.log(this.props)
    return (
      <div>
        <p style={{color: 'pink', fontSize: 20}}>
          {name}
        </p>
        <ImagesContainer image={pic}/>
        <CardContentContainer description={description}/>
      </div>
    )
  }
}

export default CardContainer
