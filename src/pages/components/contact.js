import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faSms, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';



function Contact(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered is: ${name}`)
    }


    return (

        // <div className='flex items-center justify-center m-5 '>
        //     <div className='w-1/2 '>
        //         <p className='font-bold text-left text-amber-500 text-4xl font-bold'>Contact us</p>
        //         <p className='text-left text-slate-400 text-2xl font-bold mb-5'>Let's get in touch</p>
        //         <div className=' bg-slate-800  w-1/2  rounded-tr-[20%]  rounded-bl-[20%] w-5/6 h-auto m-[5px] overflow-hidden '>
        //             <form onSubmit={handleSubmit} className='w-3/4  items-left mx-10 overflow-hidden'>
        //                 <input type="text" name='name' placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className=' block outline-none mx-auto mt-[38px] w-[100%] border-b-[1.5px]  border-slate-400 p-[10px] bg-transparent text-slate-200' />
        //                 <input type="email" name='email' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className=' block outline-none mx-auto mt-[38px] w-[100%] border-b-[1.5px] border-slate-400 p-[10px] bg-transparent text-slate-200' />
        //                 <textarea type="textarea" name='comment' placeholder={"Comment"} rows="5" value={comment} onChange={(e) => setComment(e.target.value)} className='block outline-none mx-auto mt-[38px] rounded-[15px] w-[100%] text-left border-[1.5px] border-slate-400 p-[10px] bg-transparent text-slate-200' />
        //                 <input type="submit" name='submit' value={"Submit"} className='transition-transform duration-300 hover:scale-105 bg-amber-500 rounded-xl block outline-none my-5 py-2 w-[30%]  text-slate-900' />
        //             </form>
        //         </div>
        //     </div>
        //     <img src='./assets/conver.jpg' alt='contact image' className='w-1/2' />

        // </div>

        <div className='m-[10%]'>
            <div className='md:grid md:grid-cols-4 md:gap-12 '>
                <div className='text-slate-200 border-2 border-teal-600 text-center rounded w-full h-[250px]'>
                    <FontAwesomeIcon icon={faPhone} size='3x' className='text-teal-600 my-4' />
                    <div className='font-bold text-lg'>PHONE NUMBER</div>
                    <div className='text-slate-300'>+25914758855</div>
                    <div className='text-slate-300'>+25197839300</div>
                </div>
                <div className='text-slate-200 border-2 border-lime-600 text-center rounded w-full h-[250px]'>
                    <FontAwesomeIcon icon={faSms} size='3x' className='text-lime-600 my-4' />
                    <div className='font-bold text-lg'>SMS</div>
                    <div className='text-slate-300'>+25914758855</div>
                    <div className='text-slate-300'>+25197839300</div>
                </div>
                <div className='text-slate-200 border-2 border-indigo-600 text-center rounded w-full h-[250px]'>
                    <FontAwesomeIcon icon={faEnvelope} size='3x' className='text-indigo-600 my-4' />
                    <div className='font-bold text-lg'>EMAIL</div>
                    <div className='text-slate-300'>royal@gmail.com</div>
                    <div className='text-slate-300'>royaldelivery@yahoo.com</div>
                </div>
                <div className='text-slate-200 border-2 border-pink-600 text-center rounded w-full h-[250px]'>
                    <FontAwesomeIcon icon={faTelegram} size='3x' className='text-pink-600 my-4' />
                    <div className='font-bold text-lg'>TELEGRAM</div>
                    <div className='text-slate-300'>@royalfooddelivery</div>
                    <div className='text-slate-300'>@royaldelivery</div>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <div className='flex flex-col items-center my-5 justify-center rounded-xl border-2 border-amber-600 w-[60%] h-auto'>
                    <div className='font-bold text-2xl text-amber-600 my-3' >CONTACT US</div>
                    <p className=' text-amber-700 text-xl font-bold mb-4'>Let's get in touch</p>
                    <form onSubmit={handleSubmit} className='w-[60%]  text-center  overflow-hidden'>
                        <input type="text" name='name' placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}
                            className='  outline-none mx-auto mt-4  w-[100%] p-[10px] rounded-xl border-1 border-amber-700 bg-transparent text-slate-200' />
                        <input type="email" name='email' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
                            className=' outline-none mx-auto mt-4 w-[100%] rounded-xl border-1 border-amber-700 p-[10px] bg-transparent text-slate-200' />
                        <textarea type="textarea" name='comment' placeholder={"Comment..."} rows="5" value={comment} onChange={(e) => setComment(e.target.value)}
                            className='outline-none mx-auto mt-5 rounded-xl w-[100%] text-left border-1 border-amber-700 p-[10px] bg-transparent text-slate-200' />
                        <input type="submit" name='submit' value={"Submit"} className='text-center transition-transform duration-300 hover:scale-105 bg-amber-600 rounded-xl  outline-none my-5 py-2 w-[30%]  text-slate-950' />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
