// import React from 'react'
import { connect } from 'react-redux'
import { showNavCreator, notShowNavCreator, loadSwiperAsync } from '../redux/actions'
import Home from '../views/Home'
export default connect(
    state => ({
        obj: state.isShow,
        swiper: state.swiper
    }), { showNavCreator, notShowNavCreator, loadSwiperAsync }
)(Home)