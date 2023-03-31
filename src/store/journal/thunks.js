import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";

export const startNewNote = () => {
    return async( dispatch, getState ) => {
        // uid para grabar en Firebase
        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        };

        const newDoc = doc( collection( FirebaseDB, `${ uid }/journal/notas` ) );
        const setDOC = await setDoc( newDoc, newNote );

        console.log({newDoc, setDOC});
        //dispatch 
        //dispatch( newNote )
        //dispatch( activarNote )

    }
};