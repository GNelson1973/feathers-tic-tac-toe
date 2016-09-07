import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

//actions
import signOut from '../actions/sign-out-user'
import createGame from '../actions/create-game'
import tickField from '../actions/tick-field'
import gameTurn from '../actions/game-turn'

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

  tryTickField(index) {
    if (this.props.fields[index].value > 0) return
    this.props.tickField(index, this.props.game.turn)
    this.props.gameTurn()
  }

  render(){
    const { currentUser } = this.props
    const { fields } = this.props

    return(
      <div>
        <h1>Let's Play, { currentUser.name }!</h1>
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
  tickField: PropTypes.func.isRequired,
  gameTurn: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, { tickField, gameTurn })(RenderBoard);
