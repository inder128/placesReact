import React from "react";
import { connect } from 'react-redux';

import LoginPopup from './LoginPopup';
import FacebookAuth from './FacebookAuth';
import GoogleAuth from './GoogleAuth';

class Auth extends React.Component {
	state = { showPopup: false };

	togglePopup = () => {
		this.setState({ showPopup: !this.state.showPopup });
	};

	render() {
		console.log('AuthRender');
		console.log(this.props);

		if(this.props.signedInWithGoogle){
			// if user logs out then popup does't open imidiately;
			if(this.state.showPopup === true ) this.togglePopup();
			return <GoogleAuth />;
		} 
		if(this.props.loggedInWithFacebook){
			if (this.state.showPopup === true) this.togglePopup();
			return <FacebookAuth />;
		} 

		return (
			<>
				<GoogleAuth updateState="true" />
				<FacebookAuth updateState="true" />
			<button onClick={this.togglePopup} className="ui button">
				LogIn
			</button>
			{this.state.showPopup 
				? (<LoginPopup closePopup={this.togglePopup} />) 
				: null
			}
			</>
		);
	}
}

const mapStateToProps = (state) => {
  return {
	signedInWithGoogle: state.userAuth.signedInWithGoogle,
    loggedInWithFacebook: state.userAuth.loggedInWithFacebook
  };
};

export default connect(mapStateToProps)(Auth);