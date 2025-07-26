import { Outlet } from "react-router"
import classess from './auth.module.css'
const AuthLayout = () => {
  return (
    <div className={`flex justify-center items-center h-screen relative ${classess.bgImg}`}>
        <div className="bg-black/70 h-full w-full absolute top-0 left-0 z-10"></div>
        <div className="z-100">
            <Outlet />
        </div>
    </div>
  )
}

export default AuthLayout