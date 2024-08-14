import {Route, Navigate, Outlet} from "react-router-dom"
import {useContext} from "react"
import AuthContext from "../context/AuthContext"
import Loginpage from "../views/Loginpage"


const PrivateRoute = ({children, ...rest}) => {
    let {user} = useContext(AuthContext)
    return  <Route component={Loginpage} path="/login" />
   // return <Route {...rest}>{!user ? <Navigate to="/login" /> : children}</Route>
}



// const PrivateRoute = () => {
//     let {auth} = useContext(AuthContext)
//     //const auth = null; // determine if authorized, from context or however you're doing it

//     // If authorized, return an outlet that will render child elements
//     // If not, return element that will navigate to login page
//     return auth ? <Outlet /> : <Navigate to="/login" />;
// }

export default PrivateRoute