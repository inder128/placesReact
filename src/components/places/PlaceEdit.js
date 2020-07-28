import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { editPlace, fetchPlace ,currentPathAction } from "../../actions";

import PlaceForm from './PlaceForm';


class PlaceEdit extends React.Component {

	onFormSubmit = (formValues) => {
		this.props.editPlace(
			this.props.match.params.id, 
			_.pick(formValues, "title", "description")
		);
	}

	componentDidMount(){
		this.props.fetchPlace(this.props.match.params.id);
		this.props.currentPathAction();
	}

	render(){
		if(!this.props.place)
			return <h2> Loading... </h2>;
		return(
			<div>
				<h3>Edit A Place</h3>
				<PlaceForm onSubmit={this.onFormSubmit} initialValues={this.props.place} />
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return { 
		userId : state.userAuth.id,
		place : state.places[ownProps.match.params.id]
	};
}

export default connect(mapStateToProps, {editPlace, fetchPlace, currentPathAction})(PlaceEdit);