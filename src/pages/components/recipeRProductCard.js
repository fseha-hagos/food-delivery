import RecipeDetail from '../RecipeDetail';
import {Link, useNavigate } from 'react-router-dom';

function RecipeRProductCard() {  
  return (
    <div className="h-auto w-64 m-2 ">
      <div className='flex justify-center mb-4'>
        <img style={{ width: "auto", height: "auto" }} src={require('../assets/a5dcb73787322a8244171b9eea44b9bd-1.jpg')} alt='produtcs' />
      </div>
      <hr className='w-56 m-3 border-white' />
      <div className='text-slate-900 text-2xl dark:text-slate-300' >Especial Burger</div>
      <div className='text-slate-700 text-base dark:text-slate-400'>269.99 birr</div>
      <Link to="/recipe">
      <button className='border-2 border-amber-500 my-3 w-56 rounded-lg py-1 hover:bg-amber-500'>
        <span className='text-base text-slate-200 ' >Order</span>
      </button>
      </Link>
    </div>
  );
}

export default RecipeRProductCard;
