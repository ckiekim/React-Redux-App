import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Header from './components/Header';
import NavCon from './containers/NavCon';
import ControlCon from './containers/ControlCon'
import ContentCon from './containers/ContentCon';
import CreateCon from './containers/CreateCon';
import UpdateCon from './containers/UpdateCon';

class App extends Component {
	render() {
		let article;
		if (this.props.mode === 'READ' || this.props.mode === 'WELCOME') {
			article = <ContentCon></ContentCon>;
		} else if (this.props.mode === 'CREATE') {
			article = <CreateCon></CreateCon>;
		} else if (this.props.mode === 'UPDATE') {
			article = <UpdateCon></UpdateCon>;
		}
		return (
			<div className="App">
				<Header></Header>
				<NavCon></NavCon>
				<ControlCon></ControlCon>
				{article}
			</div>
		);
	}
}

export default connect(
	function(state) {
		return {
			mode: state.mode
		}
	},
	null
)(App);
