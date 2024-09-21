import { useEffect } from "react"
import Logo from "../utils/Logo.png"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { addUser, removeUser } from "../utils/userSlice"
import { auth } from "../utils/firebase"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
const Header = () => {
  const User=useSelector((store)=>store.user)
const dispatch=useDispatch()
const navigate=useNavigate()
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/dashboard");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsiubscribe when component unmounts
    return () => unsubscribe();

  },[])
  const handleSignout=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className="shadow-lg flex justify-between">
      <div>
        <img src={Logo} alt="logo" className="h-[8rem]"/>
        </div>
        {User&&<div>
          
          <button 
          className="p-7 mt-5 bg-gray-300 rounded-full"
          onClick={()=>handleSignout()} > Sign Out</button>
        </div>}


    </div>

  )
}

export default Header