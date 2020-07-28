import React from "react";
import { Link } from "react-router-dom";
import Auth from "../auth/Auth";

class Header extends React.Component {
	render() {
	return (
		<div className={`ui large menu ${this.props.extraClasses}`}>
		<div className="ui container">
			<Link to="/" className="item">
				<i className="large gamepad icon"></i>
				<div className="header">PLACEER</div>
			</Link>
			<Link to="/place/new" className="item">
				<i className="large plus icon"></i>
				Create New Place
			</Link>
			<div className="item search-bar">
				<div className="ui icon input">
					<input type="text" placeholder="Search by location or tags" />
					<i className="search icon"></i>
				</div>
			</div>
			<div className="right menu">
				<div className="item"> <Auth /> </div>
			</div>
		</div>
		</div>
	);
	}
}

export default Header;
