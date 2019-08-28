import React from 'react'
import './home.css'
import { Carousel } from 'antd-mobile';

class HomeSwiper extends React.Component {
	state = {
		data: ['1', '2', '3'],
		imgHeight: 176,
	}
	componentDidMount() {
		setTimeout(() => {
			this.setState({
				data: ['https://f11.baidu.com/it/u=4248380861,4074469524&fm=72', 'http://img2.imgtn.bdimg.com/it/u=396481123,1074479635&fm=26&gp=0.jpg', 'http://img3.imgtn.bdimg.com/it/u=2362091973,1514505588&fm=26&gp=0.jpg'],
			});
		}, 100);
	}
	render() {
		return (
			<div className="swiper">
				<Carousel
					autoplay={true}
					infinite
				>
					{this.state.data.map(val => (
						<div
							key={val}
							style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
						>
							<img
								src={val}
								alt=""
								style={{ width: '100%', height: this.state.imgHeight }}
							/>
						</div>
					))}
				</Carousel>
			</div>
		);
	}
}
export default HomeSwiper;