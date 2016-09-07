import React, { Component, PropTypes } from 'react'
import { GridTile } from 'material-ui/GridList'
import Paper from 'material-ui/Paper'
import tickField from '../actions/tick-field'

const style = {
  paper: {
    height: 80,
    width: 80,
    margin: 5,
    textAlign: 'center',
    display: 'inline-block',
  },
  value: {
    fontSize: '3rem',
  }
}

class Field extends Component {
  tickMe(){
    const { tickField, index } = this.props
    tickField(index)
  }

  render() {
    return (
      <GridTile onClick={ this.tickMe.bind(this) } >
        <Paper style={style.paper} zDepth={1}>
        <h1 style={ style.value }>{ this.props.value }</h1>
        </Paper>
      </GridTile>
    )
  }
}

Field.propTypes = {
  index: PropTypes.number.isRequired,
  tickField: PropTypes.func.isRequired,
}

export default Field
