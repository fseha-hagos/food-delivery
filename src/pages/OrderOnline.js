import "@fontsource/lily-script-one";
import "./styles/home.css";
import menu from "./MenuRecipe";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Fade, Slide } from "react-reveal";
import image from "./assets/bgpizza-39d43bb340c543c7808076f899ced767.png"
import { useNavigate } from "react-router-dom";

function OrderOnline(props) {
    const navigate = useNavigate();

    return (
        <div className='relative bg-amber-50 dark:bg-slate-900'>
            <div className="bg-custom_background dark:bg-slate-900 relative w-[100%] min-h-[100vh]">

                <Navbar />
                <div className="order-online-wrapper h-[700px] w-[100%] mt-12 flex relative">
                    <div className="background-pizza absolute w-[300px] h-[300px] left-[-150px] bottom-0">
                    </div>
                    <div className="order-online-wrapper-left m-0 py-[10px] px-[20px] relative w-1/2 text-center ">
                        <Fade out>
                            <h2 className="text-[70px] text-custom_primary">Royal</h2>
                        </Fade>
                        <Fade out delay={600}>
                            <h3 className="m-0 p-0 text-[66px] text-slate-900 dark:text-slate-200">
                                Home Delivery
                            </h3>
                        </Fade>
                        <Fade out delay={800}>
                            {" "}
                            <p className="mt-5 text-center text-base text-slate-700 dark:text-slate-300 ">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magnaaliqua
                            </p>
                        </Fade>
                        <Fade up delay={1000}>
                            <a href="/menu" >
                                <button className='transition-transform duration-300 hover:scale-110 text-amber-600 dark:text-amber-500 border-2 border-amber-500 my-5 py-1 px-4  rounded-full text-xl hover:text-white dark:hover:text-slate-900 hover:bg-amber-500 '>
                                    Choose Recipe
                                </button>
                            </a>

                        </Fade>
                        <Slide left delay={200}>
                            <img src={image} alt="pizza image" className="w-1/3 h-auto -ml-[125px] mt-5" />
                        </Slide>
                    </div>

                    <div className="order-online-wrapper-right m-0 p-[20px] w-[50%]  relative overflow-hidden">
                        <Fade right delay={1000}>
                            {" "}
                            <div className="bike-container absolute top-[-40px] left-[100px] w-[400px] h-[480px]"></div>
                        </Fade>

                        <Slide right delay={200}>
                            <p className="absolute top-[550px] text-right text-right mr-5 text-base text-slate-700 dark:text-slate-400 ">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </p>
                        </Slide>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default OrderOnline;
