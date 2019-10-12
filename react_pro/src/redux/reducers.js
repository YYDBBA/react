import { SHOWNAV, NOTSHOWNAV, LOADSWIPER } from './actionTypes'
import { combineReducers } from 'redux'


function isShow(state = {
    isNav: true,
    title: "酷狗"
}, action) {
    switch (action.type) {
        case NOTSHOWNAV:
            return action.data
        case SHOWNAV:
            return action.data
        default:
            return state
    }
}

function swiper(state = [], action) {
    switch (action.type) {
        case LOADSWIPER:
            return action.data
        default:
            return state
    }
}
export default combineReducers({
    isShow,
    swiper
})