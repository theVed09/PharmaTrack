import React, { useRef, useState } from 'react'
import validate from '../utils/validate'
import { auth } from '../utils/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import Header from './Header'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [signin,setSetSignin]=useState(true)
    const [errorMessage,setErrorMessage]=useState("")
    const Navigate=useNavigate()
    const handleClick=()=>{
        setSetSignin(!signin)
    }

    const email=useRef()
    const password=useRef()
    const userName=useRef()
    const handleValidate=(email,password)=>{
        console.log(email)
       const message= validate(email.current.value,password.current.value)
        setErrorMessage(message)
        if(!signin){
            createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+':'+errorMessage)
    // ..
  });
  updateProfile(auth.currentUser, {
    displayName: userName.current.value, photoURL: "https://png.pngtree.com/png-clipart/20191120/original/pngtree-outline-user-icon-png-image_5045523.jpg"
  }).then(() => {
    // Profile updated!
    // ...
  }).catch((error) => {
    // An error occurred
    // ...
  });

        }
   else{
    signInWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+':'+errorMessage)

  });
   }     


    }
  return (
    <div className=''>
        <Header/>
        <form onSubmit={(e)=>e.preventDefault()}
        className='shadow-2xl mt-[4.5rem] w-[32rem] ml-[43rem] flex flex-col p-2 items-center rounded-lg'>
            <h1 className='text-5xl py-2 mb-8 text-left mt-9'>{signin?"Sign In":"Sign Up"}</h1>
            {!signin&&<input placeholder='Enter your Name' 
            ref={userName}
            className='h-[5rem] w-[16rem] border border-gray-300 rounded-lg my-4 hover:border-black text-center'/>}
            <input placeholder='Enter your Email' 
            ref={email}
            className='h-[5rem] w-[16rem] border border-gray-300 rounded-lg my-4 hover:border-black text-center'/>
            <input placeholder='Enter your Password'
            ref={password}
             className='h-[5rem] w-[16rem] border border-gray-300 rounded-lg my-4 hover:border-black text-center'/>
           {errorMessage &&  <h1 className='text-red-600 text-2xl'>{errorMessage}</h1>}

            <button
            onClick={()=>handleValidate(email,password)}
            className='h-[4rem] w-[16rem] bg-rose-300 rounded-2xl mb-7'
            >{signin?"Sign In":"Sign Up"}</button>
            <h1 
            className='mb-7 cursor-pointer'
            onClick={()=>handleClick()}
            >{signin?"Don't have Account! Sign Up":"Already A User!Sign In "}</h1>

        </form>
    </div>
  )
}

export default Login