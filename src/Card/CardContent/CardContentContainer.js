import React, { Component } from 'react'

const CardContentContainer = (props) => {
  return (
    <div>
      <p style={{ fontSize: 10}}>
        {props.description}
      </p>
    </div>
  )
}

export default CardContentContainer