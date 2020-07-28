import React from "react";
import { connect } from 'react-redux';
import { logInWithFacebook, logOutFromFacebook } from "../../actions/authActions";

class FacebookAuth extends React.Component {

  componentDidMount() {
    window.fbAsyncInit = () => {
      window.FB.init({
        appId: 242417453444483,
        // if logging In, then logging Out, then refesh => user will still be logged In. To avoid this behavior don't pass cookie : true;
        // cookie: true,
        xfbml: true,
        status: true,
        version: "v2.0",
      });
      window.FB.Event.subscribe("auth.statusChange", this.onAuthChange);    
    };
  }

  onAuthChange = ({ status }) => {
    console.log(status);
    if(status === 'connected'){
      window.FB.api(
        window.FB.getUserID(),
        { fields: "first_name" },
        ({ first_name, id }) => {
          this.props.logInWithFacebook(id, first_name);
        }
      );
    }
    else
      this.props.logOutFromFacebook();
  }

  onLogIn = () => {
    window.FB.login();
  };

  onLogOut = () => {
    window.FB.logout();
  };

  render() {
    console.log("FacebookAuthRender");
    console.log(this.props);

    if (this.props.updateState) return null;

    if (this.props.isLoggedIn) {
      return (
        <button onClick={this.onLogOut} className="ui facebook button">
          <i className="facebook icon"></i>
          LoggedIn As {this.props.name} &nbsp; &nbsp;
          <i className="sign-out icon"></i>
        </button>
      );
    }
    return (
      <button onClick={this.onLogIn} className="ui facebook button">
        <i className="facebook icon"></i>
        Connect With Facebook
      </button>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.userAuth.loggedInWithFacebook,
    id: state.userAuth.id,
    name: state.userAuth.name
  };
};

export default connect(mapStateToProps, {
                  logInWithFacebook,
                  logOutFromFacebook
                })(FacebookAuth);