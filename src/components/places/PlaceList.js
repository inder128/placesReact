import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import { fetchPlaces, currentPathAction } from "../../actions";

class PlaceList extends React.Component {

	componentDidMount(){
		this.props.fetchPlaces();
		this.props.currentPathAction();
	}

	renderAdmin(place){
		if(this.props.usedId === place.userId){
			return(
				<div className="right floated content">
					<Link to={`place/edit/${place.id}`} className="ui primary button">
						EDIT
					</Link> 
					<Link to={`place/delete/${place.id}`} className="ui negative button"> 
						DELETE
					</Link> 
				</div>
			);
		}
	}
	
	renderList(){
		return this.props.places.map(place => {
			return(
				<div className="item" key={place.id}>
					{this.renderAdmin(place)}
					<i className="large middle aligned icon camera"></i>
					<div className="content">
						<Link to={`place/${place.id}`} className="header">{place.title}</Link>
						<div className="description">{place.description}</div>
					</div>
				</div>
			);
		});
	}

	render() {
		return (
			<div className="ui big celled list">
				{this.renderList()}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { 
		places : Object.values(state.places),
		usedId : state.userAuth.id
	};
}

export default connect(
	mapStateToProps,
	{ fetchPlaces, currentPathAction }
)(PlaceList);