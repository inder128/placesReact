import React from "react";
import VizSensor from "react-visibility-sensor";

import Header from "./Header";

import "../css/HomeHeader.css";

class HomeHeader extends React.Component {
	// Vis will be true if HomeHeader component is partially or fully present in the viewport;
	state = { Viz : true };

	render(){
		return(
			// we can use simple <> </> to wrap inner components;
			<>
			<VizSensor 
				// this way onChange callback will be revoked only when component completly goes out of viewport.
				partialVisibility
				// Onchange callback will be revoked with boolean value (vis) whose value will be true if component is partially present in the viewport otherwise it will be false;
				onChange={(vis) => this.setState({ Viz : vis })} 
			>
				<div className="ui home-header center aligned segment">
					<Header extraClasses="secondary" />
					<div className="ui text container">
						<h1 className="ui header">
							PLACES
						</h1>
						<h2>Do whatever you want when you want to.</h2>
						<div className="ui big button">
							Explore Places Nearby
							<i className="right arrow icon"></i>
						</div>
					</div>
				</div>
			</VizSensor>
			{/* we cannot apply style property directly to Header component because it is different component. */}
			<div style={{display : this.state.Viz ? "none" : "block"}}>
				<Header extraClasses={`fixed borderless`} />
			</div>
			</>
		);
	}
}
export default HomeHeader;