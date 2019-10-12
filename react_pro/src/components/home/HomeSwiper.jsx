import React from 'react'
import './home.css'
import { Carousel } from 'antd-mobile';

class HomeSwiper extends React.Component {
	state = {
		data: ['1', '2', '3'],
		imgHeight: 176
	}
	componentDidMount() {
	}
	render() {
		return (
			<div className="swiper">
				<Carousel
					autoplay={true}
					infinite
				>
					{this.props.data.map(val => (
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