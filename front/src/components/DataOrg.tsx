import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { UserLoginContext } from '../context/UserProvider'
import Missile from './Missile'

interface MissilProps{
  name:string,
  amount:number
}
const DataOrg = () => {
  const userContext = useContext(UserLoginContext)
  const [org,setOrg] = useState<any>()
  const [error, setError] = useState<string | null>(null);
   
  const postData = async () => {
    try {
      const response = await axios.post("http://localhost:3000/org/mydata", {
      org:userContext?.user.org
  })
  
  setError(null); 
  // Store organisation data to display
  setOrg(response.data)
  } catch (error) {
    setError("Error making POST request."); // Set error message
    console.error("Error making POST request:", error);
  }
}

useEffect(()=>{
  postData()
    },[])


  return (
    <div>
      <h2>organisation: {userContext?.user.org}</h2>
      <p>budget: {org?.budget || "No employees available"}</p>
      <div className='table-list'>
      {org?.resources?.map((missile:MissilProps)=><Missile name={missile.name} amount={missile.amount}/>)}
      </div>
      {/* Display the response or error */}
      <div>
        {org && (
          <div>
            <h3>Response from Server:</h3>
            <pre>{JSON.stringify(org, null, 2)}</pre>
          </div>
        )}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>

    </div>
  )
}

export default DataOrg
