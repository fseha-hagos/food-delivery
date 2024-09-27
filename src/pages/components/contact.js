import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faSms, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { Fade } from 'react-reveal';

function Contact(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = () => {
return(
    alert("Thank you for leaving comment!")
)
    }
    return (
        <div className='m-[10%]'>
            <div className='md:grid md:grid-cols-4 md:gap-12 '>
                <Fade left delay={400}>
                    <div className='text-slate-900 dark:text-slate-200 border-2 border-teal-600 text-center rounded w-full h-[250px] bg-teal-50 dark:bg-transparent'>
                        <FontAwesomeIcon icon={faPhone} size='3x' className='text-teal-600 my-4' />
                        <div className='font-bold text-lg'>CALL US</div>
                        <a href="tel:+25914758855" className='text-slate-800 dark:text-slate-300 cursor-pointer no-underline hover:text-teal-600 dark:hover:text-teal-400'>+25914758855</a>
                        <br />
                        <a href="tel:+25914679922" className='text-slate-800 dark:text-slate-300 cursor-pointer no-underline hover:text-teal-600 dark:hover:text-teal-400'>+25914679922</a>
                    </div>
                </Fade>
                <Fade left delay={200}>
                    <div className='text-slate-900 dark:text-slate-200 border-2 border-lime-600 text-center rounded w-full h-[250px] bg-lime-50 dark:bg-transparent'>
                        <FontAwesomeIcon icon={faSms} size='3x' className='text-lime-600 my-4' />
                        <div className='font-bold text-lg'>SMS</div>
                        <a href="sms:+25914758855" className='text-slate-800 dark:text-slate-300 no-underline cursor-pointer hover:text-lime-600 dark:hover:text-lime-400'>+25914758855</a>
                        <br />
                        <a href="sms:+25914679922" className='text-slate-800 dark:text-slate-300 cursor-pointer no-underline hover:text-lime-600 dark:hover:text-lime-400'>+25914679922</a>
                    </div>
                </Fade>
                <Fade right delay={200}>
                    <div className='text-slate-900 dark:text-slate-200 border-2 border-indigo-600 text-center rounded w-full h-[250px] bg-indigo-50 dark:bg-transparent'>
                        <FontAwesomeIcon icon={faEnvelope} size='3x' className='text-indigo-600 my-4' />
                        <div className='font-bold text-lg'>EMAIL</div>
                        <a href="mailto:royaldelivery@gmail.com" className='text-slate-800 dark:text-slate-300 no-underline cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400'>royaldelivery@gmail.com</a>
                    </div>
                </Fade>
                <Fade right delay={400}>
                    <div className='text-slate-900 dark:text-slate-200 border-2 border-pink-600 text-center rounded w-full h-[250px] bg-pink-50 dark:bg-transparent'>
                        <FontAwesomeIcon icon={faTelegram} size='3x' className='text-pink-600 my-4' />
                        <div className='font-bold text-lg'>TELEGRAM</div>
                        <a href="https://t.me/RoyalDelivery1" target="_blank" rel="noopener noreferrer" className='hover:text-pink-600 dark:hover:text-pink-400 cursor-pointer no-underline text-slate-800 dark:text-slate-300'>RoyalDelivery1</a>
                        <br />
                        <a href="https://t.me/RoyalDelivery2" target="_blank" rel="noopener noreferrer" className='hover:text-pink-600 dark:hover:text-pink-400 cursor-pointer no-underline text-slate-800 dark:text-slate-300'>RoyalDelivery2</a>
                    </div>
                </Fade>
            </div>
            <Fade down delay={400}>
                <div className='flex flex-col items-center justify-center'>
                    <Fade up delay={800}>
                        <div className='flex flex-col items-center my-5 justify-center rounded-xl border-2 border-amber-600 w-[60%] h-auto bg-amber-100 dark:bg-transparent'>
                            <div className='font-bold text-2xl text-amber-600 my-3' >CONTACT US</div>
                            <p className=' text-amber-700 text-xl font-bold mb-4'>Let's get in touch</p>
                            <form onSubmit={handleSubmit} className='w-[60%]  text-center  overflow-hidden'>
                                <input type="text" name='name' placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}
                                    className='  outline-none mx-auto mt-4  w-[100%] p-[10px] rounded-xl border-1 border-amber-700 bg-transparent text-slate-800 dark:text-slate-200' />
                                <input type="email" name='email' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
                                    className=' outline-none mx-auto mt-4 w-[100%] rounded-xl border-1 border-amber-700 p-[10px] bg-transparent text-slate-800 dark:text-slate-200' />
                                <textarea type="textarea" name='comment' placeholder={"Leave your comment..."} rows="5" value={comment} onChange={(e) => setComment(e.target.value)}
                                    className='outline-none mx-auto mt-5 rounded-xl w-[100%] text-left border-1 border-amber-700 p-[10px] bg-transparent text-slate-800 dark:text-slate-200' />
                                <input type="submit" name='submit' value={"Submit"} className='text-center transition-transform duration-300 hover:scale-105 bg-amber-600 rounded-xl  outline-none my-5 py-2 w-[30%] text-slate-100  dark:text-slate-900' />

                            </form>
                        </div>
                    </Fade>
                </div>
            </Fade >
        </div >
    );
}

export default Contact;
