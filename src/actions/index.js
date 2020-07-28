import places from "../apis/places";
import { 
	CREATE_PLACE,
	FETCH_PLACES,
	FETCH_PLACE,
	EDIT_PLACE,
	DELETE_PLACE
} from "./types";

import history from '../history';

export const createPlace = (formValues) => async (dispatch) => {
  const response = await places.post("/places", formValues);
  dispatch({ type: CREATE_PLACE, payload: response.data });
  history.push('/');
};

export const fetchPlaces = () => async (dispatch) => {
  const response = await places.get("/places");
  dispatch({ type: FETCH_PLACES, payload: response.data });
};

export const fetchPlace = (id) => async (dispatch) => {
  const response = await places.get(`/places/${id}`);
  dispatch({ type: FETCH_PLACE, payload: response.data });
};

export const editPlace = (id, values) => async (dispatch) => {
  const response = await places.patch(`/places/${id}`, values);
  dispatch({ type: EDIT_PLACE, payload: response.data });
  history.push('/');

};

export const deletePlace = (id) => async (dispatch) => {
  await places.delete(`/places/${id}`);
  dispatch({ type: DELETE_PLACE, payload : id });
  history.push('/');
};

export const currentPathAction = () => {
	return{
		type : "CURRENT_PATH",
		payload : window.location.pathname
	}
}
