import React from 'react'
import { connect } from 'react-redux'
import { showNavCreator, notShowNavCreator } from '../redux/actions'
import Home from '../views/Home'
export default connect(
    state => ({
        obj: state.isShow
    }), { showNavCreator, notShowNavCreator }
)(Home)