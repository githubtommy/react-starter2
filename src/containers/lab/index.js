import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getRandomName } from '../../modules/randomName'

const Lab = props => (
  <div>
    <h1>Laboratory Page</h1>
		<p>Name: {props.name}</p>
		<p> <button onClick={props.getRandomName}>Get Random Name</button></p>
  </div>
)

const mapStateToProps = state => ({
  name: state.randomName.name
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getRandomName
}, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lab)
