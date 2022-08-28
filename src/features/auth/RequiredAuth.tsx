import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks'
import { selectCurrentToken } from './authSlice'

const RequiredAuth = () => {

    // const token = localStorage.getItem("user" )

    const  token  = useAppSelector(selectCurrentToken)
    const location = useLocation()
    return token ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />
}

export default RequiredAuth
