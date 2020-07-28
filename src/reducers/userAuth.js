const INITIAL_STATE = {
  signedInWithGoogle : false,
  loggedInWithFacebook : false,
  id : null,
  name : null
};

export default (auth = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SIGNIN_WITH_GOOGLE":
      return {
        ...auth,
        signedInWithGoogle : true,
		id : action.payload.id,
		name : action.payload.name
      };
    case "SIGNOUT_FROM_GOOGLE":
      return {
        ...auth,
        signedInWithGoogle : false,
		id : null,
		name : null
      };
    case "LOGIN_WITH_FACEBOOK":
      return {
        ...auth,
        loggedInWithFacebook : true,
		id : action.payload.id,
		name : action.payload.name
      };
    case "LOGOUT_FROM_FACEBOOK":
      return {
        ...auth,
        loggedInWithFacebook: false,
		id : null,
		name : null
      };
    default:
      return auth;
  }
};
