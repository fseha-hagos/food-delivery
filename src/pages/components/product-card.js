import React from 'react';

function ProductCard() {
    return (
        <div className='card-container'>
            <div className='card-image-container'>
                <img src={require('../assets/a5dcb73787322a8244171b9eea44b9bd-1.jpg')} alt='produtcs for today'/>
            </div>
            <div className='card-content'>
                <div className='order'><span>Order</span></div>
                <div className='title-container'>
                    <p className='title'>Especial Burger</p>
                    <p className='price'>269.99 birr</p>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;