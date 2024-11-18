import {ReactNode, createContext, useState} from 'react'
interface IUser{
    name:string
    login:boolean
    org:string
}
interface Props {
    children: ReactNode;
}
interface UserProps{
    user:IUser
    setUser:React.Dispatch<React.SetStateAction<IUser>>
  }
export const UserLoginContext = createContext<UserProps | null>(null)

const UserProvider = ({children}:Props) => {
    const [user,setUser] = useState<IUser| null>(null)

  return (
    <UserLoginContext.Provider value={{user,setUser}}>
        {children}
    </UserLoginContext.Provider>
  )
}

export default UserProvider