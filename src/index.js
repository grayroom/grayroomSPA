import React from 'react';
import ReactDOM from 'react-dom';

import 'foundation-sites/dist/css/foundation.min.css';
import './default-set.css'
import style from './style.module.css';

import { Button, Colors } from 'react-foundation';


const appRoot = document.getElementById("app-root")
const modalRoot = document.getElementById("modal-root")

function ShadowBorder(props) {
	return (
		<div className={style.dialog}>
			{props.children}
		</div>
	)
}

function Dialog(props) {
	return (
		<ShadowBorder color="black">
			<h1 className="dialog-title">
				{props.title}
			</h1>
			<p className="dialog-message">
				{props.message}
			</p>
			{props.children}
		</ShadowBorder>
	)
}

class Modal extends React.Component {
	constructor(props) {
		super(props)
		this.el = document.createElement("div")
	}
	
	componentDidMount() {
		modalRoot.appendChild(this.el)
	}
	
	componentWillUnmount() {
		modalRoot.removeChild(this.el)
	}
	
	render() {
		return ReactDOM.createPortal(
			this.props.children,
			this.el
		)
	}
}

class SignupDialog extends React.Component {
	constructor(props) {
		super(props)
		this.handleID = this.handleID.bind(this)
		this.handlePW = this.handlePW.bind(this)
		this.handleShowAddress = this.handleShowAddress.bind(this)
		this.handleHideAddress = this.handleHideAddress.bind(this)
		this.handleSignUp = this.handleSignUp.bind(this)
		
		this.state = {ID: "", PW: "", showAddress: false}
	}
	
	handleID(e) {
		this.setState({ID: e.target.value})
	}
	
	handlePW(e) {
		this.setState({PW: e.target.value})
	}
	
	handleShowAddress(e) {
		this.setState({showAddress: true})
	}
	
	handleHideAddress(e) {
		this.setState({showAddress: false})
	}
	
	handleSignUp() {
		alert(`Welcome aborad, ${this.state.ID}`)
	}
	
	render() {
		const modal = this.state.showAddress ? (
					<Modal>
						<div className="modal" onClick={this.handleHideAddress}>
							<h1>주소검색</h1>
							<p>asdf</p>
						</div>
					</Modal> 
					) : null
		
		return (
			<Dialog title="로그인"
					message="반갑습니다">
				<input type="text" value={this.state.ID} onChange={this.handleID} placeholder="ID" />
				<input type="text" value={this.state.PW} onChange={this.handlePW} placeholder="PW" />
				<Button color={Colors.SECONDARY} onClick={this.handleShowAddress}>주소</Button>
				{modal}
				<Button color={Colors.SUCCESS} onClick={this.handleSignUp}>제출</Button>
			</Dialog>
		)
	}
}


ReactDOM.render(<SignupDialog />, appRoot)