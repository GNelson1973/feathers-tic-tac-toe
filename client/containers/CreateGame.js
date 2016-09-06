import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import signOut from '../actions/sign-out-user'
import FlatButton from 'material-ui/FlatButton'

class CreateGame extends Component {
  signOut() {
    this.props.signOut()
  }

  render() {
    const { currentUser } = this.props

    return(
      <div>
        <h1>Hi, { currentUser.name }!</h1>
        <p>
          <FlatButton
            onClick={ this.signOut.bind(this) }
            label="Sign out"/>
        </p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  }
}

export default connect(mapStateToProps, { signOut })(CreateGame);
