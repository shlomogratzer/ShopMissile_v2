import {ReactNode, createContext, useState} from 'react'

interface Props {
    children: ReactNode;
}
interface OrgProps{
    org:string
    setOrg:React.Dispatch<React.SetStateAction<string>>
  }
export const OrgContext = createContext<OrgProps>({
    org:'',
    setOrg:()=>{}
})

const OrgProvider = ({children}:Props) => {
    const [org,setOrg] =useState<string>('')
  return (
    <OrgContext.Provider value={{org,setOrg}}>
        {children}
    </OrgContext.Provider>
  )
}

export default OrgProvider
