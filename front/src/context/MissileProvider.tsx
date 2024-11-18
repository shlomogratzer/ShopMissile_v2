import React, { ReactNode, createContext, useState } from 'react'
interface IMissile{
    name:string
    description:string
    speed: number
    intercepts:[string]
    price:number
}
interface Props {
    children: ReactNode;
}
interface MissileProps{
    missile:IMissile,
    setMissile:React.Dispatch<React.SetStateAction<IMissile>>
}
export const MissileContext = createContext<MissileProps| null>(null)

const MissileProvider = ({children}:Props) => {
    const [missile,setMissile] = useState<IMissile|null>(null)
  return (
    <MissileContext.Provider value={{missile,setMissile}}>
        {children}
    </MissileContext.Provider>
  )
}

export default MissileProvider
