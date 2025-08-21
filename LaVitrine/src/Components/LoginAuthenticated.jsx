
import { contextCall } from '../Utlity/MyContext'
import { Navigate, Outlet,  } from 'react-router-dom'


const LoginAuthenticated = () => {
    const { user, password } = contextCall()

    const isAuthentic = user == "admin" && password == "12345"

    return (

        isAuthentic ? <Outlet /> : <Navigate to={"/login"} />
    )
}

export default LoginAuthenticated