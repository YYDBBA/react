import React from 'react'
import { connect } from 'react-redux'
import { showNavCreator, notShowNavCreator } from '../redux/actions'
import My from '../views/My'
export default connect(
    state => ({
        obj: state.isShow
    }), { showNavCreator, notShowNavCreator }
)(My)