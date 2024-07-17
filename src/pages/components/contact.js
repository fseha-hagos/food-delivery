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
        <div className='contact-detail'>
            <p className='contact-title'>Contact us</p>
            <p className='contact-subtitle'>Let's get in touch</p>

            
                <div className='contact-form'>
                    <form onSubmit={handleSubmit}>
                       
                            <input type="text" name='name' placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
                            <input type="text" name='email' placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <textarea type="textarea" name='comment' placeholder={"comment"} rows="5" value={comment} onChange={(e) => setComment(e.target.value)} />
                        <input type="submit" name='submit' value={"submit"}/>

                    </form>
                </div>
                <div className='contact-image'></div>
        </div>
    );
}

export default Contact;