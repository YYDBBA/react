// import React from 'react'
import { connect } from 'react-redux'
import { showNavCreator, notShowNavCreator } from '../redux/actions'
import Detail from '../views/Detail'
export default connect(
    state => ({
        obj: state.isShow
    }), { showNavCreator, notShowNavCreator }
)(Detail)