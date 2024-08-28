import React from 'react';
import Navbar from './components/navbar';

function PaymentPage(props) {
    return (

           

<div  className='bg-custom_background dark:bg-slate-900'>
<Navbar />
<h1 className='text-slate-900 dark:text-slate-200 text-center'>this page is secured page, you are logged in if you are seeng this page.</h1>   <h1 className='text-slate-900 dark:text-slate-200 text-center'> this is page for payment.</h1>
</div>
            
        
    );
}

export default PaymentPage;