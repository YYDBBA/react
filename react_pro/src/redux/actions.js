import { SHOWNAV, NOTSHOWNAV, LOADSWIPER } from './actionTypes'
export const showNavCreator = (flag) => ({ type: SHOWNAV, data: flag });
export const notShowNavCreator = (flag) => ({ type: NOTSHOWNAV, data: flag });
const loadSwiperCreator = (flag) => ({ type: LOADSWIPER, data: flag });
export const loadSwiperAsync = () => {
    return dispatch => {
        setTimeout(() => {
            const data = ['https://f11.baidu.com/it/u=4248380861,4074469524&fm=72', 'http://img2.imgtn.bdimg.com/it/u=396481123,1074479635&fm=26&gp=0.jpg', 'http://img3.imgtn.bdimg.com/it/u=2362091973,1514505588&fm=26&gp=0.jpg'];
            dispatch(loadSwiperCreator(data))
            console.log("我是异步操作完成了")
        }, 1000)
    }
}