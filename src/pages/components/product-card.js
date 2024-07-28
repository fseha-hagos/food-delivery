import React from 'react';
import '../styles/components.css'

import {
    Link
} from 'react-router-dom';
//id
//href
//imageAlt
//imageSrc
//name
//price

const products = [
    {
      "id" : 1,
      "href" : "img",
     "imageAlt" : "products",
     "imageSrc" : "require('../assets/a5dcb73787322a8244171b9eea44b9bd-1.jpg')",
     "name" : "Especial Burger",
    "price" : 269.99
    },
    {
      "id" : 1,
      "href" : "img",
     "imageAlt" : "products",
     "imageSrc" : "require('../assets/a5dcb73787322a8244171b9eea44b9bd-1.jpg')",
     "name" : "Especial Burger",
    "price" : 269.99
    },
    {
      "id" : 1,
      "href" : "img",
     "imageAlt" : "products",
     "imageSrc" : "require('../assets/a5dcb73787322a8244171b9eea44b9bd-1.jpg')",
     "name" : "Especial Burger",
    "price" : 269.99
    },
    {
      "id" : 1,
      "href" : "img",
     "imageAlt" : "products",
     "imageSrc" : "require('../assets/a5dcb73787322a8244171b9eea44b9bd-1.jpg')",
     "name" : "Especial Burger",
    "price" : 269.99
    },
    {
      "id" : 1,
      "href" : "img",
     "imageAlt" : "products",
     "imageSrc" : "require('../assets/a5dcb73787322a8244171b9eea44b9bd-1.jpg')",
     "name" : "Especial Burger",
    "price" : 269.99
    },
    {
      "id" : 1,
      "href" : "img",
     "imageAlt" : "products",
     "imageSrc" : "require('../assets/a5dcb73787322a8244171b9eea44b9bd-1.jpg')",
     "name" : "Especial Burger",
    "price" : 269.99
    },
    {
      "id" : 1,
      "href" : "img",
     "imageAlt" : "products",
     "imageSrc" : "require('../assets/a5dcb73787322a8244171b9eea44b9bd-1.jpg')",
     "name" : "Especial Burger",
    "price" : 269.99
    },
    {
      "id" : 1,
      "href" : "img",
     "imageAlt" : "products",
     "imageSrc" : "require('../assets/a5dcb73787322a8244171b9eea44b9bd-1.jpg')",
     "name" : "Especial Burger",
    "price" : 269.99
    },
]
    
function ProductCard(props ) {
    const { product } = props;
    console.log(product);
    return (
        <div>
            {
        /*
        <div className='card-container border-[5px] border-solid w-[100%] mb-5  sm:w-[270px] h-[470px] sm:h-[400px] rounded-[16px] overflow-hidden aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7'>
            <div className='card-image-container w-[330px] mx-auto sm:w-[260px] h-[380px] sm:h-[310px] py-[5px] px-[5px] rounded-[16px] overflow-hidden'> 
                <img className='w-[100%] h-[100%] rounded-[16px]' src={require('../assets/a5dcb73787322a8244171b9eea44b9bd-1.jpg')} alt='produtcs for today'/>
            </div>
            <div className='card-content py-[3px] w-[330px] sm:w-[260px] mx-auto  px-[20px] sm:px-[5px] mt-[17px]'>  
            <Link to="/recipe"  className='order w-[90px] px-[4px] py-[4px] no-underline rounded-[16px] text-center float-left text-[17px] font-[500] '><span>Order</span></Link>
                <div className='title-container  text-right float-right'> 
                    <p className='title font-[600] text-[20px] rounded-[16px]'>Especial Burger</p>
                    <p className='price font-[600] text-[17px] rounded-[16px]'>269.99 birr</p>
                </div>
            </div>
        </div>
*/

<a key={product.id} href={product.href} className="group">
<div className="  aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 ">
  <img
    alt={product.imageAlt}
    src={product.imageSrc}
    className="h-full w-full object-cover object-center group-hover:opacity-75"
  />
</div>
<div className='card-content py-[3px] w-[330px] sm:w-[260px] mx-auto  px-[20px] sm:px-[5px] mt-[17px]'>  
            <Link to="/recipe"  className='order w-[90px] px-[4px] py-[4px] no-underline rounded-[16px] text-center float-left text-[17px] font-[500] '><span>Order</span></Link>
                <div className='title-container  text-right float-right'> 
                    <p className='title font-[600] text-[20px] rounded-[16px]'>{product.name}</p>
                    <p className='price font-[600] text-[17px] rounded-[16px]'>{product.price} birr</p>
                </div>
            </div>
</a>


            }
            </div>
    );
}

export default ProductCard;




