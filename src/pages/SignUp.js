import '@fontsource/lily-script-one';
import './styles/home.css'
import Navbar from "./components/navbar";
import About from './components/about';
import { useState } from 'react';



function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered is: ${name}`)
      }

  return (
    <div className="home-container">
      <Navbar />
          
  
        <div className='signup-container'>
          <div className='signup-image-container'>
            <span className='bg-circle'></span>
            <img style={{width:"100%", height:"100%"}} alt="sign up" src={require('./assets/signup-a71433d156a00a662f932c404515f01e.png')}/>
          </div>
          <div className='signup-form-container'>
            <h3 className='signup-title'>Create An Account</h3>
            <p className='signup-subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
               <form onSubmit={handleSubmit}>
                       
                       <input type="text" name='name' placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
                       <input type="text" name='email' placeholder="email or phone no" value={email} onChange={(e) => setEmail(e.target.value)} />
                       <input type="number" name='password' placeholder={"password"} value={password} onChange={(e) => setPassword(e.target.value)} />
                   <input type="submit" name='submit' value={"Sign up"}/>

               <div className='button btn-google'>continue with google</div>
               </form>
               <div className='login'>Have an Account?<a href='/'>Login</a></div>
          </div>
        </div>
          <div className='about-container'>
              <About />
            </div> 
          
         
      </div>
      
   
  );
}

export default SignUp;
