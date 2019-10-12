// import React from 'react'
import { connect } from 'react-redux'
import { showNavCreator, notShowNavCreator } from '../redux/actions'
import Topics from '../views/Topics'
export default connect(
    state => ({
        obj: state.isShow
    }), { showNavCreator, notShowNavCreator }
)(Topics)