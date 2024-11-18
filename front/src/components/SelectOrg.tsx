import {useContext} from 'react'
import { OrgContext } from "../context/OrgProvider";

const SelectOrg = () => {
  const orgContext = useContext(OrgContext)
  return (

      <select
      onChange={(e)=> orgContext.setOrg(e.target.value)}
      name="" id="select-org">
        <option value="Hezbollah">Hezbollah</option>
        <option value="IDF">IDF</option>
        <option value="Hamas">Hamas</option>
        <option value="IRGC">IRGC</option>
        <option value="Houthis">Houthis</option>
      </select>

  )
}

export default SelectOrg
