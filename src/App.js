
import './App.css';
import AboutUs from './pages/AboutUs';
import Home from './pages/home';
import MenuRecipe from './pages/MenuRecipe';
import OrderOnline from './pages/OrderOnline';
import RecipeDetail from './pages/RecipeDetail';
import SignUp from './pages/SignUp';

import {
  BrowserRouter as Router,
  Routes, Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
     
     <Routes>
                    
                    <Route path="/"
                        element={<Home />} />
                    <Route path="/home"
                        element={<Home />} />
                    <Route path="/menu"
                        element={<MenuRecipe />} />
                    <Route path="/order"
                        element={<OrderOnline />} />
                    <Route path="/recipe"
                        element={<RecipeDetail />} />
                    <Route path="/about"
                        element={<AboutUs />} />
                    <Route path="/signup"
                        element={<SignUp />} />
                </Routes>
    </div>
    </Router>
  );
}

export default App;
