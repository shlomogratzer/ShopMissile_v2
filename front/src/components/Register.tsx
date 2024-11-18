import React, { useContext, useState } from "react";
import axios from "axios";
import SelectOrg from "./SelectOrg";
import { OrgContext } from "../context/OrgProvider";
import SelectIDF from "./SelectIDF";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const orgContext = useContext(OrgContext)
    const navigate = useNavigate()
    const [res, setRes] = useState(null); // State to store the response
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [flag,setFlag] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null); // State to store error messages


  const postData = async () => {
    try {
      const response = await axios.post("http://localhost:3000/auth/register", {
        username: username,
        password: password,
        org:orgContext.org
      });

      setRes(response.data); // Store user data to display
      setError(null); // Clear any previous errors
    } catch (error) {
      setError("Error making POST request."); // Set error message
      console.error("Error making POST request:", error);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent page reload
    if(flag){
    postData();
    }
    setFlag(false)
    navigate('/login')
  };

  return (
    <>
    <div className="form-group">
      <form onSubmit={handleSubmit}>
        
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        
        
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="password"
            value={password}
            style={{padding:'8px'}}
            onChange={(e) => setPassword(e.target.value)}
          />
          <SelectOrg/>
          {orgContext.org === 'IDF' && <SelectIDF/>}
        <div>
        <button
        onClick={()=>setFlag(true)}
        >send</button>
        <button>chanel</button>
        </div>
      </form>
    </div>
      {/* Display the response or error */}
      <div>
        {res && (
          <div>
            <h3>Response from Server:</h3>
            <pre>{JSON.stringify(res, null, 2)}</pre>
          </div>
        )}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </>
  );
};

export default Login;
