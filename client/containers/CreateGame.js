import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import signOut from '../actions/sign-out-user'
import createGame from '../actions/create-game'
import setFormErrors from '../actions/set-form-errors'
import resetFormErrors from '../actions/reset-form-errors'
import RenderBoard from './RenderBoard'
import Paper from 'material-ui/Paper';
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

class CreateGame extends Component {
  constructor() {
    super()

    this.state = {
      board: false
    }
  }

  signOut() {
    this.props.signOut()
  }

  createGame(){
    const player2 = this.refs.player2.getValue()

    if (player2 === "") {
      return this.props.setFormErrors({
            player2: 'Please add a player!',
          })
    }

    this.props.createGame(player2)
    this.setState({
        board: true
    });
  }

  addPlayer(){
    const { currentUser, formErrors } = this.props

    return(
    <div>
      <h1>Hi, { currentUser.name }!</h1>
      <div>
        <TextField type="player2" ref="player2" hintText="Add a player" errorText={ formErrors.player2 }/>
      </div>
      <div style={ errorMargin }>
        <FlatButton
          onClick={ this.signOut.bind(this) }
          label="Sign out"/>

        <RaisedButton
          style={ buttonStyle }
          onClick={ this.createGame.bind(this) }
          label='Create game'
          primary={true} />
      </div>
    </div>)

  }

  render() {
    return(
      <Paper style={ dialogStyle }>
        {this.state.board ? <RenderBoard /> : this.addPlayer()}
      </Paper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    fields: state.fields,
    formErrors: state.formErrors,
  }
}

CreateGame.propTypes = {
  createGame: PropTypes.func.isRequired,
  setFormErrors: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired,
  resetFormErrors: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired,
  formErrors: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, { signOut, createGame, setFormErrors, resetFormErrors })(CreateGame);
