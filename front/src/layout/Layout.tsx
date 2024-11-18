import {ReactNode} from 'react'
import OrgProvider from '../context/OrgProvider'
import UserProvider from '../context/UserProvider'
import MissileProvider from '../context/MissileProvider'

interface Props{
    children: ReactNode
  }

const Layout = ({children}: Props) => {
  return (
    <div>
      <OrgProvider>
        <UserProvider>
          <MissileProvider>
          {children}
          </MissileProvider>
        </UserProvider>
      </OrgProvider>
    </div>
  )
}

export default Layout
