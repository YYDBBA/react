import React from 'react'
import './home.css'
import { SearchBar } from 'antd-mobile';

class HomeHeaderSearch extends React.Component {
	state = {
		searchKey: ''
	}
	changeSearch = (value) => {
		this.setState({
			searchKey: value
		})
	}
	render() {
		return (<div>
			<SearchBar value={this.state.searchKey} placeholder="搜索关键字" maxLength={8} onChange={this.changeSearch} />
		</div>);
	}
}
export default HomeHeaderSearch;