import React, { useContext, useState } from "react";
import { UserLoginContext } from "../context/UserProvider";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import useAxios from '../hooks/useAxios'

const Login = () => {
  const userContext = useContext(UserLoginContext)
  const navigate = useNavigate()
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState(null)
  // const {data,error,postData} = useAxios<any>("http://localhost:3000/auth/login")

  const postData = async () =>{
    try{
      const response = await axios.post("http://localhost:3000/auth/login",{
      username,
      password
  })
  if(response.status >= 300){
    throw new Error(response.data)
  }
  userContext?.setUser({org:response.data.org,name:response.data.name,login:true})

  navigate('/shop')
  }catch (error: any) {
    setError(error.response?.data?.message || "Login failed.");
  }
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent page reload
    await postData()
  };

  return (
    <div className="missile-detales">
    <div className="form-group">
      <form onSubmit={handleSubmit}>
        
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        
        
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            style={{padding:'8px'}}
            onChange={(e) => setPassword(e.target.value)}
          />
        <button type="submit">Login</button>
        <Link to='/register'>sign up</Link>
      </form>
    </div>
      {/* Display the response or error */}
      <div>
        {userContext?.user && (
          <div>
            <h3>Response from Server:</h3>
            {/* <p style={{ color: "red" }}>{error}</p> */}
            <pre>{JSON.stringify(userContext.user, null, 2)}</pre>
          </div>
        )}
        
        {error && <h1 style={{ color: "red" }}>{error}</h1>}
      </div>
      
    </div>
  );
};

export default Login;
