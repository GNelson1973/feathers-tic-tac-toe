import React, { Component, PropTypes } from 'react'
import { GridTile } from 'material-ui/GridList'
import Paper from 'material-ui/Paper'

const style = {
  paper: {
    height: 80,
    width: 80,
    margin: 5,
    textAlign: 'center',
    display: 'inline-block',
  },
  symbol: {
    fontSize: '3rem',
  }
}

class Field extends Component {
  // console.log(this.props)
  render() {
    return (
      <GridTile>
        <Paper style={style.paper} zDepth={1}>
        </Paper>
      </GridTile>
    )
  }
}

export default Field
