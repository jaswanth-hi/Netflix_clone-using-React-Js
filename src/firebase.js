import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyCPZgfDBxvde_Tm25C_bI2uwB0dHlT3U2g",
  authDomain: "netflix-clone-88067.firebaseapp.com",
  projectId: "netflix-clone-88067",
  storageBucket: "netflix-clone-88067.appspot.com",
  messagingSenderId: "1083865821037",
  appId: "1:1083865821037:web:cd134f5bada4a76ecdb464",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.log(err);
    toast.error(err.code.split("/")[1].split("-").join(" "))
  }
};
const login= async (email,password)=>{

    try{
    await signInWithEmailAndPassword(auth,email,password)



    }catch(err){
        console.log(err)
        toast.error(err.code.split('/')[1].split('-').join(" "))

    }

}
const logout=()=>{
    signOut(auth)

}
export {auth,db,login,signup,logout}