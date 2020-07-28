// easy to debug this way;
import {
	SIGNIN_WITH_GOOGLE,
	SIGNOUT_FROM_GOOGLE,
	LOGIN_WITH_FACEBOOK,
	LOGOUT_FROM_FACEBOOK
} from "./types";


export const signInWithGoogle = (id, name) => { 
	return { 
		type : SIGNIN_WITH_GOOGLE,
		payload : {
			id : id,
			name : name
		} 
	};
}
export const signOutFromGoogle = () => { 
	return { 
		type : SIGNOUT_FROM_GOOGLE
	};
}
export const logInWithFacebook = (id, name) => { 
	return { 
		type : LOGIN_WITH_FACEBOOK,
		payload : {
			id : id,
			name : name
		}
	};
}
export const logOutFromFacebook = () => { 
	return { 
		type : LOGOUT_FROM_FACEBOOK 
	};
}