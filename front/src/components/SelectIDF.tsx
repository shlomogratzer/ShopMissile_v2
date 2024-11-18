import {useContext} from 'react'
import { OrgContext } from "../context/OrgProvider";
const SelectIDF = () => {
  const orgContext = useContext(OrgContext)
return(
      <select
      onChange={(e)=> orgContext.setOrg(`${orgContext.org} - ${e.target.value}`)}
       name="" id="">
        <option value="North">North</option>
        <option value="South">South</option>
        <option value="Center">Center</option>
        <option value="West Bank">West Bank</option>
      </select>

  )
}

export default SelectIDF
