import React from 'react';
import ReactDOM from 'react-dom';

import 'foundation-sites/dist/css/foundation.min.css';
import style from './style.module.css';

import { Button, Colors } from 'react-foundation';

function ShadowBorder(props) {
	return (
		<div class={style.dialog}>
			{props.children}
		</div>
	)
}

function Dialog(props) {
	return (
		<ShadowBorder color="black">
			<h1 class="dialog-title">
				{props.title}
			</h1>
			<p class="dialog-message">
				{props.message}
			</p>
			{props.children}
		</ShadowBorder>
	)
}

class SignupDialog extends React.Component {
	constructor(props) {
		super(props)
		this.handleID = this.handleID.bind(this)
		this.handlePW = this.handlePW.bind(this)
		this.handleSignUp = this.handleSignUp.bind(this)
		this.state = {ID: "", PW: ""}
	}
	
	handleID(e) {
		this.setState({ID: e.target.value})
	}
	
	handlePW(e) {
		this.setState({PW: e.target.value})
	}
	
	handleSignUp() {
		alert(`Welcome aborad, ${this.state.ID}`)
	}
	
	render() {
		return (
			<Dialog title="로그인"
					message="반갑습니다">
				<input type="text" value={this.state.ID} onChange={this.handleID} placeholder="ID" />
				<input type="text" value={this.state.PW} onChange={this.handlePW} placeholder="PW" />
				<Button color={Colors.SUCCESS} onClick={this.handleSignUp}>SignUp</Button>
			</Dialog>
		)
	}
}

ReactDOM.render(
	<SignupDialog />, document.getElementById("root")
)