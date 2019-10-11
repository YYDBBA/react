import { SHOWNAV, NOTSHOWNAV } from './actionTypes'
export const showNavCreator = (flag) => ({ type: SHOWNAV, data: flag });
export const notShowNavCreator = (flag) => ({ type: NOTSHOWNAV, data: flag });