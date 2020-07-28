import {
  CREATE_PLACE,
  FETCH_PLACES,
  FETCH_PLACE,
  EDIT_PLACE,
  DELETE_PLACE
} from "../actions/types";

import _ from 'lodash';

export default (places = {}, action) => {
	switch (action.type) {
		case CREATE_PLACE:
			return { ...places, [action.payload.id] : action.payload };
		case EDIT_PLACE:
			return { ...places, [action.payload.id] : action.payload };
		case FETCH_PLACE:
			return { ...places, [action.payload.id] : action.payload };
		case FETCH_PLACES:
			return { ...places, ...(_.mapKeys(action.payload, "id")) };
		case DELETE_PLACE:
			return _.omit(places, action.payload);	
		default:
			return places;
	}
}