import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react"
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication();

const useFirbase = () => {
    const [user, setUser] = useState({})


    const auth = getAuth();
    const gooogleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, gooogleProvider)

    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
                // const uid = user.uid;

            }
            else {
                setUser({})
            }
            return () => unsubscribed;

        });
    }, [])

    return {
        user,
        signInUsingGoogle,
        logOut
    }
}
export default useFirbase;