import '@fontsource/lily-script-one';
import './styles/home.css';
import Navbar from "./components/navbar";
import Footer from './components/footer';
import { useContext, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import AuthContext from '../context/AuthContext';

function Login() {
  
  const navigation = useNavigate();
  const {user} = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  


  const {loginUser} = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser(email,password)
  
  };

 
  return (
    <>
    {
      !user ? 
        
              <div className="bg-custom_background dark:bg-slate-900 min-h-screen flex flex-col">
                <Navbar />

                <div className="flex flex-col md:flex-row items-center justify-center flex-grow px-4 py-8 md:px-8 md:py-12">
                  <div className="md:w-1/2 lg:w-1/3 flex justify-center mb-8 md:mb-0">
                    <img
                      className="w-full h-auto rounded-lg shadow-lg"
                      alt="Log in"
                      src={require('./assets/signup-a71433d156a00a662f932c404515f01e.png')}
                    />
                  </div>
                  <div className="bg-transparent dark:bg-slate-800 p-8 md:p-10  w-full max-w-md">
                    <h3 className="text-2xl font-semibold text-amber-500 mb-4">Welcom Back</h3>
                    <p className="text-slate-500 mb-6">Login and enjoy the best services we offer.</p>
                    <form onSubmit={handleSubmit} className="space-y-4 mb-5">
                    
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 rounded-lg bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 mb-5 rounded-lg bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    
                      <input
                        type="submit"
                        name="submit"
                        value="Log in"
                        className="w-full p-3 border-2 border-amber-600 text-amber-600 hover:text-white rounded-lg hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 transition duration-300"
                      />
                      <button
                        type="button"
                        className="w-full p-3 flex items-center justify-center bg-white border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-300"
                      >
                        <img
                          src={require('./assets/google-cb79f3df7e515bd98a4d666f38de5ec1.png')}
                          alt="Google"
                          className="w-6 h-6 mr-2"
                        />
                        <span className="text-slate-200 dark:text-slate-900">Continue with Google</span>
                      </button>
                    </form>
                    <div className="mt-6 text-center text-slate-300">
                      Create new account?{' '}
                      <Link to="/signup" className="text-amber-500 hover:text-amber-700">
                        Sign up
                      </Link>
                    </div>
                  </div>
                </div>

                <Footer />
              </div>
            :

            navigation("/home")

              

    }
    </>
            )
  
 

}

export default Login;
