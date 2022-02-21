import { FIREBASE_AUTH_SIGNIN_METHODS } from "../../../firebase";

export const signInMethodInfo = {
    [FIREBASE_AUTH_SIGNIN_METHODS.GOOGLE]: { label: 'Sign in with Google', backgroundColor: '#ffffff', color: '' },
    [FIREBASE_AUTH_SIGNIN_METHODS.FACEBOOK]: { label: 'Sign in with Facebook', backgroundColor: '#3b5998', color: '#ffffff' },
    [FIREBASE_AUTH_SIGNIN_METHODS.EMAIL_PASSWORD]: { label: 'Sign in with Email', backgroundColor: '#db4437', color: '#ffffff' },
    [FIREBASE_AUTH_SIGNIN_METHODS.GITHUB]: { label: 'Sign in with Github', backgroundColor: '#333333', color: '#ffffff' },
    [FIREBASE_AUTH_SIGNIN_METHODS.PHONE]: { label: 'Sign in with Phone OTP', backgroundColor: '#02bd7e', color: '#ffffff' },
    [FIREBASE_AUTH_SIGNIN_METHODS.TWITTER]: { label: 'Sign in with Twitter', backgroundColor: '#55acee', color: '#ffffff' },
};
