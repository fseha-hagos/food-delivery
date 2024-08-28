import { BACKEND_BASE_URL } from '../../context/constants';
import RecipeDetail from '../RecipeDetail';
import {Link, useNavigate } from 'react-router-dom';

function RecipeRProductCard(props) {
  
  const navigate = useNavigate();  
  const { item } = props;
  
  return (
    <div className="h-auto w-64 m-2 ">
      <div className='flex justify-center mb-4'>
        <img style={{ width: "auto", height: "auto" }} src={BACKEND_BASE_URL + item.image} alt='produtcs' />
      </div>
      <hr className='w-56 m-3 border-white' />
      <div className='text-slate-900 text-2xl dark:text-slate-300' >{item.item_name}</div>
      <div className='text-slate-700 text-base dark:text-slate-400'>{item.price} birr</div>
     
      <button onClick={() => navigate('/recipe', {state:item})} className='border-2 border-amber-500 my-3 w-56 rounded-lg py-1 hover:bg-amber-500'>
        <span className='text-base text-slate-200 ' >Order</span>
      </button>
     
    </div>
  );
}

export default RecipeRProductCard;
