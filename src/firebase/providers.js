import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";


const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
    try {

        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        //const credentials = GoogleAuthProvider.credentialFromResult( result );
        const user = result.user;

        const { displayName, email, photoURL, uid } = user;

        return {
            ok: true,
            //User info
            displayName, 
            email, 
            photoURL,
            uid
        }
    } catch (error) {
        const errorMessage = error.message;

        return {
            ok: false, 
            errorMessage
        }
    }  
};

export const registerUserWithEmailPassword = async ({ email, password, displayName }) => {
    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL } = resp.user;
        // TODO: actualizar el displayName en Firebase
        await updateProfile( FirebaseAuth.currentUser, { displayName } );
        return {
            ok: true,
            uid,
            photoURL,
            email,
            displayName
        }
    } catch (error) {
        console.log(error);
        return {ok: false, errorMessage: error.message};
    }
};

export const loginWithEmailPassword = async ({ email, password }) => {

    try {
        const result = await signInWithEmailAndPassword(FirebaseAuth, email, password );

        const user = result.user;

        const { displayName, photoURL, uid } = user;

        return {
            ok: true,
            // User info
            email,
            displayName,
            photoURL,
            uid
        };

    } catch (error) {

        const errorMessage = error.message;

        return {
            ok: false,
            errorMessage
        };
    }

};

export const logoutFirebase = async() => {
    return await FirebaseAuth.signOut();
};