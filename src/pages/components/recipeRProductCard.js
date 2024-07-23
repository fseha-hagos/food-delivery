
import {
  BrowserRouter as Router,
  Routes, Route,
  Link
} from 'react-router-dom';

function RecipeRProductCard() {
  return (
    <div className="rr-container">
            <div className='rr-image-container'>
                <img style={{width:"100%",height:"270px"}} src={require('../assets/a5dcb73787322a8244171b9eea44b9bd-1.jpg')} alt='produtcs'/>
            </div>
            <div className='rr-hor'></div>  
                <div className='rr-title-container'>
                    <h2 className='rr-title'>Especial Burger</h2>
                    <h3 className='rr-price'>269.99 birr</h3>
                </div>
         
                <Link to="/recipe" className='button rr-order-button'> <span >Order</span></Link>
    </div>
      
   
  );
}

export default RecipeRProductCard;
