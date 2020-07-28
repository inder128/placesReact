import React from 'react';
import { connect } from 'react-redux';

import { signInWithGoogle, signOutFromGoogle } from '../../actions/authActions';

class GoogleAuth extends React.Component{

	componentDidMount(){
		window.gapi.load('client:auth2', () => {
			window.gapi.client.init({
				clientId : '704839010184-be2d41d3fn8ivj2g468p2m02lilu0noi.apps.googleusercontent.com',
				scope : 'email'
			}).then(() => {
				this.auth = window.gapi.auth2.getAuthInstance();

				// preventing initial call to onAuthChange it user is not logged in via google, because it will set name and id in state to null even if user is logged in via facebook;
				if(this.auth.isSignedIn.get()) this.onAuthChange(true);
				this.auth.isSignedIn.listen(this.onAuthChange);
			});
		});
	}

	onSignIn = () => {
		this.auth.signIn();
	}

	onSignOut = () => {
		this.auth.signOut();
	}

	onAuthChange = (isSignedIn) => {
		if(isSignedIn){
			const profile = this.auth.currentUser.get().getBasicProfile();
			this.props.signInWithGoogle(
				profile.getId(),
				profile.getGivenName()
			);
		}
		else{
			this.props.signOutFromGoogle();
		}
	}

	render(){
		console.log('GoogleAuthRender');
		console.log(this.props);

		if (this.props.updateState) return null;

		if(this.props.isSignedIn){
			return(
				<button onClick={this.onSignOut} className="ui google button">
					<i className="google icon"></i>
					Signed In As {this.props.name} &nbsp; &nbsp;
					<i className="sign-out icon"></i>
				</button>
			);
		}
		return(
			<button onClick={this.onSignIn} className="ui google button">
				<i className="google icon"></i>
				Connect With Google
			</button>
		);
	}
}

const mapStateToProps = (state) => {
	return { 
		isSignedIn : state.userAuth.signedInWithGoogle,
		id: state.userAuth.id,
		name: state.userAuth.name
  	};
}

export default  connect(
					mapStateToProps, 
					{ signInWithGoogle, signOutFromGoogle }
				)(GoogleAuth);