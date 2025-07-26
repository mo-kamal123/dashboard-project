import { Navigate, Outlet } from "react-router"

const RootLayout = ({ isAuthenticated }) => {
        return isAuthenticated ? <Outlet /> : <Navigate to={'/auth'} replace/>

}

export default RootLayout