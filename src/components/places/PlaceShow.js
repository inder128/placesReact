import React from 'react';
import { connect } from 'react-redux';

import { fetchPlace ,currentPathAction } from "../../actions";


class PlaceShow extends React.Component {
	componentDidMount(){
		this.props.fetchPlace(this.props.match.params.id);
		this.props.currentPathAction();
	}

	render(){
		if(!this.props.place)
			return <h2> Loading... </h2>;
		return (
      <div>
        <h2>{this.props.place.title}</h2>
        <h4>{this.props.place.description}</h4>
      </div>
    );
	}
}

const mapStateToProps = (state, ownProps) => {
	return { place : state.places[ownProps.match.params.id] };
}

export default connect(mapStateToProps, {fetchPlace, currentPathAction})(PlaceShow);
