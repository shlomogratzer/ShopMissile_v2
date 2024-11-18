import axios from 'axios'
import { useContext } from 'react'
import { MissileContext } from '../context/MissileProvider'
import { useNavigate } from 'react-router-dom'

interface MissilProps{
    name:string,
    amount:number
}
const Missile = (props:MissilProps) => {

  const missileContext = useContext(MissileContext)
  const navigate = useNavigate()
  const missileDetales = async () =>{
    try{
    const response = await axios.post("http://localhost:3000/org/missiledetales",{
      missile: props.name
    })
    missileContext?.setMissile(response.data)
    navigate('/shop/detales')
  }catch(error){
    // setError("Error making POST request."); // Set error message
    console.error("Error making POST request:", error);
  }

  }
  return (
    <button className='missile-list' onClick={missileDetales}>
      {`type: ${props.name} amount: ${props.amount}`}
    </button>
  )
}

export default Missile
