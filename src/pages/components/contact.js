import React, { useState } from 'react';

function Contact(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered is: ${name}`)
      }


    return ( 
       
        <div className='contact-detail relative py-[37px] px-[10px] h-[1400px] md:h-[700px] overflow-hidden'>
            <p className='contact-title text-[33px] font-[400]'>Contact us</p>
            <p className='contact-subtitle text-[28px] font-[400]'>Let's get in touch</p>

            
                <div className='contact-form absolute top-30 md:bottom-10 left-0 w-[98%] md:w-[45%]  rounded-tr-[100px]  rounded-bl-[100px] h-[470px] m-[5px] overflow-hidden z-1'>
                
                    <form onSubmit={handleSubmit} className='w-[80%] float-right items-left mr-[10px] overflow-hidden'> 
                            <input type="text" name='name' placeholder="name" value={name} onChange={(e) => setName(e.target.value)}  className=' block outline-none mx-auto mt-[38px] w-[100%] border-b-[1.5px] border-solid p-[10px] bg-transparent text-[19px] font-[400]'/>
                            <input type="text" name='email' placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} className=' block outline-none mx-auto mt-[38px] w-[100%] border-b-[1.5px] border-solid p-[10px] bg-transparent text-[19px] font-[400]'/>
                            <textarea type="textarea" name='comment' placeholder={"comment"} rows="5" value={comment} onChange={(e) => setComment(e.target.value)} className='block outline-none mx-auto mt-[38px] rounded-[15px] w-[100%] text-left border-[1.5px] border-solid p-[10px] bg-transparent text-[19px] font-[400]'/>
                            <input type="submit" name='submit' value={"submit"} className='border-none rounded-[25px] block outline-none mx-auto mt-[28px] py-[8px] w-[60%]  text-[19px] font-[400]'/>

                    </form>
                </div>
                <div className='contact-image absolute top-[580px] md:top-[20%] right-0 w-[95%] md:w-[53%] h-[350px] md:h-[70%] m-[10px] rounded-[30px]'></div>
        </div>
    );
}

export default Contact;