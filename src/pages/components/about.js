import React from 'react';

function About(props) {
    return (
        <div className='about-detail'>
            <div className='left-slice'></div>
            <div className='right-slice'>
                <div className='about-logo-container'>
                    <img src={require("../assets/logo.png")} alt={"Carlie Anglemire"} style={{width:"180px", height: "180px"}}/>
                    <p className='text text1'>call us</p>
                    <p className='text text2'>+2519********</p>
                    <div className='text contacts'>
                        <span><img src={require("../assets/fb.png")} alt={"facebook"} style={{width:"50px", height: "50px"}}/></span>
                        <span><img src={require("../assets/telegram.png")} alt={"telegram"} style={{width:"50px", height: "50px"}}/></span>
                        <span><img src={require("../assets/insta.png")} alt={"instagram"} style={{width:"50px", height: "50px"}}/></span>
                    </div>
                </div>
                <div className='about-content'>
                    <div >
                        <h3>About us</h3>
                        <p><a href='#'>Price</a></p>
                        <p><a href='#'>Menu</a></p>
                    </div>
                    <div>
                        <h3>Services</h3>
                        <p><a href='#'>Delivery</a></p>
                        <p><a href='#'>Packaging</a></p>
                    </div>
                    <div>
                        <h3>Schedules</h3>
                        <p><a>sun - sat</a></p>
                        <p><a>7:30 AM - 10:30 PM</a></p>
                        <p><a>royal@gmil.com</a></p>
                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;