import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks'
import { selectCurrentToken } from './authSlice'

const RequiredAuth = () => {
    const  token  = useAppSelector(selectCurrentToken)
    // console.log(token, "token help")
    const location = useLocation()
    return token ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />
}

export default RequiredAuth
