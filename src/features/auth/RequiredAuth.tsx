import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks'
import Layout from '../../components/layout/Layout'
import Dashboard from '../../pages/dashboard/Dashboard'
import { selectCurrentToken } from './authSlice'

const RequiredAuth = () => {
    const token = useAppSelector(selectCurrentToken)
    console.log(token, "token")
    const location = useLocation()
    return !token ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />  
    // return !token ? <Dashboard /> : <Navigate to="/login" state={{ from: location }} replace />  
}

export default RequiredAuth