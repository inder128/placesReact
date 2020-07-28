import React from "react";
import FacebookAuth from "./FacebookAuth";
import GoogleAuth from "./GoogleAuth";
import '../css/LoginPopup.css';

class LoginPopup extends React.Component {
	render() {
		return (
			<div className="popup">
			<div className="popup_inner">
				<i  className="big times circle outline icon" 
					onClick={this.props.closePopup}
				></i>
				<div className="ui two column divided grid">
					<div className="column signin">
						<GoogleAuth />
						<FacebookAuth />
						<div className="ui horizontal divider"> OR </div>
						<div className="ui form">
							<div className="field">
								<div className="ui left icon input">
									<input type="text" placeholder="Username" />
									<i className="user icon"></i>
								</div>
							</div>
							<div className="field">
								<div className="ui left icon input">
									<input type="password" />
									<i className="lock icon"></i>
								</div>
							</div>
							<div className="ui submit button">
								<i className="sign-in icon"></i>
								Login
							</div>
						</div>
					</div>
					<div className="column signup">
						<div className="ui big button">
							<i className="signup icon"></i>
							Create An Account
						</div>
					</div>
				</div>
			</div>
			</div>
		);
	}
}

export default LoginPopup;