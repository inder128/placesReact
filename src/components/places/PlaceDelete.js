import React from 'react';
import { connect } from "react-redux";
import history from "../../history";

import Modal from '../Modal';

import { currentPathAction, fetchPlace, deletePlace } from "../../actions";

class PlaceDelete extends React.Component {

	componentDidMount(){
		this.props.currentPathAction();
		this.props.fetchPlace(this.props.match.params.id);
	}

	onClick = () => {
		this.props.deletePlace(this.props.match.params.id);
	}

	renderActions(){
		return(
			<>
			<button onClick={() => history.push('/')} className="ui button">Cancel</button>
			<button onClick={this.onClick} className="ui negative button">Delete</button>
			</>
		);
	}

	render() {
		const header = `Delete Place ${this.props.place ? this.props.place.title : 'Loading...'}`;
		return (
			<Modal header={header} content="Are you sure???" actions={this.renderActions()} />
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return { place : state.places[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { currentPathAction, fetchPlace, deletePlace })(PlaceDelete);