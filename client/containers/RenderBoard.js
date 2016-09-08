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
  //
  // checkWinner(fields) {
  //   const winner = this.putWinner(fields)
  //
  //   winner > 0 ? this.props.setWinner(winner) : null
  // }

  tryTickField(index) {
    const { fields, game } = this.props

    if (fields[index].value > 0) return
    this.props.fieldTapped(index, fields, game)
  }

  render(){
    const { currentUser, fields } = this.props

    return (
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
  fieldTapped: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, { fieldTapped })(RenderBoard);
