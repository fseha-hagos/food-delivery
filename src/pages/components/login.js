import React, { useState } from 'react';
import { CiUser } from "react-icons/ci";
import { PiLockKey } from 'react-icons/pi';

function Login(props) {
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmail(e.email);
        setPassword(e.password);
        alert(`The email you entered is: ${email}`)
    }
    return (
       <div className='login-container'>
        <span className='left-box-bg'></span>
        <span className='right-box-bg'></span>
       
        <form onSubmit={handleSubmit}>
                       
                    
                    <div className='input-con'><span><CiUser /></span><input type="text" name='email' placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className='input-con'><span><PiLockKey /></span><input type="password" name='password' placeholder={"password"} value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <span>Forgot password?</span>
                    <input type="submit" name='submit' value={"Login"}/>

               </form>
               <div className='l-signup'>Don't have an account?<a href='/'>SignUp</a></div>
       </div>

    );
}

export default Login;