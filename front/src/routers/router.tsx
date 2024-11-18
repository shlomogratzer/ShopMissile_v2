import { Route,Routes } from "react-router-dom"
import Login from "../components/Login"
import Register from '../components/Register'
import DataOrg from "../components/DataOrg"
import MissileDedails from "../components/MissileDedails"


const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/shop" element={<DataOrg/>}/>
        <Route path="/shop/detales" element={<MissileDedails/>}/>
      </Routes>
    </div>
  )
}

export default Router
