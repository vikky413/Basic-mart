import { useState } from "react"

const Login = ()=> {
  const [email , setEmail] = useState('')
  const [password,setPassword] = useState('')

  const handleSubmit =  async ()=> {
    fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            body:JSON.stringify({
                username: email,
                password: password
            })
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
  }
    return (
        <div className="" style={{margin:"20px 100px 30px 50px"}}>
   <form>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputEmail4"><b>Email</b></label>
      <input type="email" className="form-control" id="inputEmail4" placeholder="Email" value={email} onChange = {(e)=> setEmail(e.target.value)} />
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="inputPassword4"><b>Password</b></label>
      <input type="password" className="form-control" id="inputPassword4" placeholder="Password" value={password} onChange ={(e)=> setPassword(e.target.value)} />
    </div>
  </div>
  
  <button type="submit" onClick={handleSubmit} className="btn btn-primary">Login</button>
</form>
  </div>
    )
}
export default Login