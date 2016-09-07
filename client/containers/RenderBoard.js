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

class RenderBoard extends Component {

  render(){
    const { currentUser } = this.props
    const { fields } = this.props

    return(
    <div>
      <h1>Let's Play, { currentUser.name }!</h1>
      <h1>{ fields.length }</h1>
    </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    fields: state.fields,
  }
}

export default connect(mapStateToProps, {})(RenderBoard);
