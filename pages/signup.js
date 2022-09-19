import React , {useState} from "react";
const Signup = () => {
    const [fname , setFname] = useState("")
    const [lname , setLname] = useState("")
    const [email , setEmail] = useState("")
    const [username , setUsername] = useState("")
    const [city , setCity] = useState("")
    const [phone , setPhone] = useState("")
    const [street , setStreet] = useState("")
    const [number , setNumber] = useState("")
    const [zipcode , setZipcode] = useState("")
    const [lat , setLat] = useState("")
    const [long , setLong] = useState("")
    const [password , setPassword] = useState("")


   const submitSignup = async () => {
      
     const response = fetch('https://fakestoreapi.com/users',{
        method:"POST",
        body:JSON.stringify(
            {
                email:email,
                username:username,
                password:password,
                name:{
                    firstname:fname,
                    lastname:lname
                },
                address:{
                    city:city,
                    street:street,
                    number:3,
                    zipcode:zipcode,
                    geolocation:{
                        lat:lat,
                        long:long
                    }
                },
                phone:phone
            }
        )
    })

    const data = await response.json();
    console.log(data)

   }

    return (
    <div className="" style={{margin:"20px 500px 30px 100px"}}>
   <form>
  <div className="form-row">
  <div className="form-group col-md-6">
      <label htmlFor="inputEmail4"><b>First Name</b></label>
      <input type="email" className="form-control" id="inputEmail4" placeholder="First Name"  value={fname} onChange={(e)=> setFname(e.target.value)}/>
    </div>

    <div className="form-group col-md-6">
      <label htmlFor="inputEmail4"><b>Last Name</b></label>
      <input type="email" className="form-control" id="inputEmail4" placeholder="Last Name"  value={lname} onChange={(e)=> setLname(e.target.value)}/>
    </div>

    <div className="form-group col-md-6">
      <label htmlFor="inputEmail4"><b>User Name</b></label>
      <input type="email" className="form-control" id="inputEmail4" placeholder="Last Name"  value={username} onChange={(e)=> setUsername(e.target.value)}/>
    </div>


    <div className="form-group col-md-6">
      <label htmlFor="inputEmail4"><b>Email</b></label>
      <input type="email" className="form-control" id="inputEmail4" placeholder="Email"  value={email} onChange={(e)=> setEmail(e.target.value)}/>
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="inputPassword4"><b>Password</b></label>
      <input type="password" className="form-control" id="inputPassword4" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} />
    </div>
  </div>
   
  <div className="form-group">
    <label htmlFor="inputAddress"><b>House Number</b></label><br />
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 " value={number} onChange={(e)=> setNumber(e.target.value)} />
  </div>

  <div className="form-group">
    <label htmlFor="inputAddress"><b>Street</b></label><br />
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" value={street} onChange={(e)=> setStreet(e.target.value)} />
  </div>
 
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputCity"><b>City</b></label>
      <input type="text" className="form-control" id="inputCity" value={city} onChange={(e)=> setCity(e.target.value)} />
    </div>
   
    <div className="form-group col-md-2">
      <label htmlFor="inputZip"><b>Zipcode</b></label>
      <input type="text" className="form-control" id="inputZip" value={zipcode} onChange={(e)=> setZipcode(e.target.value)} />
    </div>

    <div className="form-group col-md-6">
      <label htmlFor="inputCity"><b>Lattitude </b></label>
      <input type="text" className="form-control" id="inputCity" value={lat} onChange={(e)=> setLat(e.target.value)} />
    </div>

    <div className="form-group col-md-6">
      <label htmlFor="inputCity"><b>Longitude</b></label>
      <input type="text" className="form-control" id="inputCity" value={long} onChange = {(e)=> setLong(e.target.value)} />
    </div>
     
    <div className="form-group col-md-6">
      <label htmlFor="inputCity"><b>Phone Number</b></label>
      <input type="text" className="form-control" id="inputCity" value={phone} onChange={(e)=> setPhone(e.target.value)} />
    </div>

  </div>

  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck" />
      <label className="form-check-label"htmlFor="gridCheck">
        <b>Check me out</b>
      </label>
    </div>
  </div>

  <button onClick={submitSignup} type="submit" className="btn btn-primary">Sign up</button>
</form>
  </div>
    )
}
export default Signup