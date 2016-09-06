import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import signOut from '../actions/sign-out-user'
import createGame from '../actions/create-game'
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
  signOut() {
    this.props.signOut()
  }

  createGame(){
    console.log(this.props)
    this.props.createGame()
  }

  render() {
    const { currentUser } = this.props

    return(
      <Paper style={ dialogStyle }>
        <h1>Hi, { currentUser.name }!</h1>
        <div>
          <TextField type="player" ref="player" hintText="Add a player"/>
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
      </Paper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    fields: state.fields,
  }
}

export default connect(mapStateToProps, { signOut, createGame })(CreateGame);
