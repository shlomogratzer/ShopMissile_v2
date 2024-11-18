import { useContext } from 'react'
import { MissileContext } from '../context/MissileProvider'
import Intercepts from './Intercepts'

const MissileDedails = () => {
    const missileContext = useContext(MissileContext)
  return (
    <div className='missile-detales'>
      <p>type: {missileContext?.missile.name}</p>
      <p>description: {missileContext?.missile.description}</p>
      <p>speed: {missileContext?.missile.speed}</p>
      <p>price: {missileContext?.missile.price}</p>
      <p>intercepts: {missileContext?.missile.intercepts.map(intercepts => <Intercepts name={intercepts}/>)}</p>
    </div>
  )
}

export default MissileDedails
