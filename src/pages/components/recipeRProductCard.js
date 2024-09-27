import { BACKEND_BASE_URL } from '../../context/constants';
import RecipeDetail from '../RecipeDetail';
import {Link, useNavigate } from 'react-router-dom';

function RecipeRProductCard(props) {
  
  const navigate = useNavigate();  
  const { item } = props;
  
  return (
    <div className="h-auto w-64 m-2 ">
      <div className='flex justify-center  mb-4'>
        <img className='w-[200px] h-[200px] rounded-full' src={BACKEND_BASE_URL + item.image} alt='produtcs' />
      </div>
      <hr className='w-full my-3 border-slate-800 dark:border-slate-300' />
      <div className='text-slate-900 text-center text-2xl dark:text-slate-100' >{item.item_name}</div>
      <div className='text-slate-700 text-center text-lg dark:text-slate-200 my-1'>{item.price} birr</div>
     
      <button onClick={() => navigate('/recipe', {state:item})} className='transition-transform duration-300 hover:scale-110 border-2 border-amber-600 my-3 w-full rounded-lg py-1 hover:bg-amber-600 '>
        <span className='text-lg text-slate-900 dark:text-slate-50 ' >Order</span>
      </button>
     
    </div>
  );
}

export default RecipeRProductCard;
