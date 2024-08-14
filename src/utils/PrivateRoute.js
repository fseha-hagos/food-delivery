import {Route, Navigate, Outlet} from "react-router-dom"
import {Component, useContext} from "react"
import AuthContext from "../context/AuthContext"
import Loginpage from "../views/Loginpage"


const PrivateRoute = ({ component: Component, ...rest }) => {
    console.log("login login")
    const {user} = useContext(AuthContext)
   

    if (user) return (
        <Component {...rest} />
    )
    else return <Navigate to="/login" />;
    


    // return (
    //     <Route
    //       {...rest}
    //       render={(props) =>
    //         user ? <Component {...props} /> : <Navigate to="/login" />
    //       }
    //     />
    //   );
 
};



// const PrivateRoute = () => {
//     let {auth} = useContext(AuthContext)
//     //const auth = null; // determine if authorized, from context or however you're doing it

//     // If authorized, return an outlet that will render child elements
//     // If not, return element that will navigate to login page
//     return auth ? <Outlet /> : <Navigate to="/login" />;
// }

export default PrivateRoute