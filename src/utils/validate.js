const validate=(email,password)=>{
    const emailCheck= /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
    const passwordCheck= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/.test(password)
    console.log(email)
    console.log(emailCheck)
    
    if(!emailCheck) return" Enter the correct email"
    if(!passwordCheck) return"Enter the correct password"
    return null
}
export default validate