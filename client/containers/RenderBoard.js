import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

//actions
import signOut from '../actions/sign-out-user'
import createGame from '../actions/create-game'
import fieldTapped from '../actions/field-tapped'

//components
import Field from '../components/Field'

//layout
import Paper from 'material-ui/Paper';
import { GridList } from 'material-ui/GridList'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'

const errorMargin = {
  marginTop: '2rem'
}

const dialogStyle = {
  width: '400px',
  margin: '50px auto',
  padding: '2rem',
}

const buttonStyle = {
  float: 'right',
  marginLeft: '2rem',
}

const styles = {
  gridList: {
    overflowY: 'auto',
    marginBottom: 0,
  }
}

class RenderBoard extends Component {

  renderField(field, index) {
    return (
      <Field key={index}
        tickField={ this.tryTickField.bind(this) }
        index={index} {...field} />
    )
  }

  // putWinner(fields) {
  //   const values = fields.map(field => field.value)
  //   console.log(values)
  //   if (values[0] == values[3] && values[3] == values[6]) {
  //     return values[0]
  //   } else {
  //     return
  //   }
  // }

  checkWinner(index, fields) {
    const { turn } = this.props.game
    const newFields = fields.slice(0, index)
      .concat([Object.assign({}, fields[index], { value: turn % 2 + 1 })])
      .concat(fields.slice(index + 1))
    const values = newFields.map(field => field.value)
    console.log(values)
    if (values[0] > 0 && values[0] == values[3] && values[3] == values[6]) {
      return values[0]
    } else if (values[1] > 0 && values[1] == values[4] && values[4] == values[7]) {
      return values[1]
    } else if (values[2] > 0 && values[2] == values[5] && values[5] == values[8]) {
      return values[2]
    } else if (values[0] > 0 && values[0] == values[1] && values[1] == values[2]) {
      return values[0]
    } else if (values[3] > 0 && values[3] == values[4] && values[4] == values[5]) {
      return values[3]
    } else if (values[6] > 0 && values[6] == values[7] && values[7] == values[8]) {
      return values[6]
    } else if (values[0] > 0 && values[0] == values[4] && values[4] == values[8]) {
      return values[0]
    } else if (values[2] > 0 && values[2] == values[4] && values[4] == values[6]) {
      return values[2]
    } else {
      return null
    }
  }

  tryTickField(index) {
    const { fields, game } = this.props

    if (fields[index].value > 0) return
    this.props.fieldTapped(index, fields, game, this.checkWinner(index, fields))
  }

  renderWinner(winner) {
    switch (winner) {
      case 1 :
        return <p> Winner: {this.props.currentUser.name}</p>

      case 2 :
        return <p>Winner: {this.props.game.player2}</p>

      default : return <p>&nbsp;</p>
    }
  }

  render(){
    const { currentUser, fields } = this.props
    const { winner } = this.props.game

    return (
      <div>
        <h1>Let's Play, { currentUser.name }!</h1>
        { this.renderWinner(winner) }
        <GridList cellHeight={100} cols={3} style={styles.gridList}>
          { fields.map(this.renderField.bind(this)) }
        </GridList>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    fields: state.fields,
    game: state.game,
  }
}

RenderBoard.propTypes = {
  fields: PropTypes.array.isRequired,
  fieldTapped: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, { fieldTapped })(RenderBoard);
