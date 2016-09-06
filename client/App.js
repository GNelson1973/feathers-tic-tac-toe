import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import SignInOrUp from './containers/SignInOrUp'
import CreateGame from './containers/CreateGame'
import Loader from './components/Loader'
import FlatButton from 'material-ui/FlatButton'

class App extends Component {
  render() {
    const { loading, authenticated } = this.props

    return(
      <div>
        { loading ? <Loader/> : null }
        { authenticated ? <CreateGame/> : <SignInOrUp/> }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    authenticated: state.authenticated,
  }
}

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  authenticated: PropTypes.bool.isRequired,
}

export default connect(mapStateToProps, { })(App);
