import React, { Component, PropTypes } from 'react'
import { GridTile } from 'material-ui/GridList'
import Paper from 'material-ui/Paper'

const style = {
  paper: {
    height: 75,
    width: 75,
    margin: 5,
    textAlign: 'center',
    display: 'inline-block',
  },
  value1: {
    fontSize: '3rem',
  },
  value2: {
    fontSize: '3.2rem',
  }
}

class Field extends Component {
  tickMe(){
    const { tickField, index } = this.props
    tickField(index)
  }

  renderValue(value) {
    switch (value) {
      case 1 : return <span style={style.value2}>&#9587;</span>
      case 2 : return <span style={style.value1}>&#9711;</span>
      default : return
    }
  }

  render() {
    const { value } = this.props
    return (
      <GridTile onClick={ this.tickMe.bind(this) } >
        <Paper style={style.paper} zDepth={1}>
          <span style={ style.value1 }>
            { this.renderValue(value) }
          </span>
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
