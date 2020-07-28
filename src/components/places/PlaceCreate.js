import React from 'react';
import { connect } from 'react-redux';

import { createPlace, currentPathAction } from "../../actions";

import PlaceForm from './PlaceForm';


class PlaceCreate extends React.Component {

	onFormSubmit = (formValues) => {
		this.props.createPlace({...formValues, userId : this.props.userId});
	}

	componentDidMount(){
		this.props.currentPathAction();
	}

	render(){
		if(!this.props.userId){
			return(
				<div className="ui massive error message">
					You need to be Logged In to create Place!!!!!
				</div>
			);
		}
		return(
			<div>
				<h3>Create A Place</h3>
				<PlaceForm onSubmit={this.onFormSubmit} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { userId : state.userAuth.id };
}

export default connect(mapStateToProps, {createPlace, currentPathAction})(PlaceCreate);