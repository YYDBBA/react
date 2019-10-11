import React from 'react'
import { connect } from 'react-redux'
import { showNavCreator, notShowNavCreator } from '../redux/actions'
import About from '../views/About'
export default connect(
    state => ({
        obj: state.isShow
    }), { showNavCreator, notShowNavCreator }
)(About)