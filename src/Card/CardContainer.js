import React, { Component } from 'react'
import ImagesContainer from './Images'
import CardContentContainer from './CardContent'
import { Button, FormControl, Form, Grid, Col, Row, Image, Thumbnail, Tabs, Tab, Panel } from 'react-bootstrap';
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
      <div style={{background: '#F0F8FF'}}>
        <Panel>
        <p style={{ fontSize: 20}}>
          {name}
        </p>
        <ImagesContainer image={pic}/>
        <CardContentContainer description={description}/>
        </Panel>
      </div>
    )
  }
}

export default CardContainer
