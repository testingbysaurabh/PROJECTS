import React from 'react'
import logo from '../assets/logo-D73hmps3.png';
import restaurant from '../assets/restaurant.png';
import grocery from '../assets/grocery.png'
import dineout from '../assets/dineout.png'
import genie from '../assets/genie.png'
import left from '../assets/left.png'
import right from '../assets/right.png'
import { Link, useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate=useNavigate()
    return (
        <>
            <div className='bg-[#FF5200] font-gilroy text-white w-[100%] min-h-[100vh]'>
                {/* Navbar idhar hai */}
                <nav className='flex justify-between p-20 items-center h-[100px]'>
                    <div className='w-[170px] transition-transform duration-200 hover:scale-105'>
                        <img src={logo} />
                    </div>

                    <div className='flex gap-7'>
                        <button className='cursor-pointer font-medium'>Swiggy Corporate</button>
                        <button className='cursor-pointer font-medium'>Partner with us</button>
                        <button className='group flex items-center gap-2 transition-transform duration-200 hover:scale-105 border cursor-pointer border-white px-6 py-3 rounded hover:bg-white hover:text-[#FF5200]'>
                            <p className='font-medium'>Get the App</p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 25 25"
                                className="w-5 h-5 mt-[5px] text-white group-hover:text-[#FF5200]"
                            >
                                <g id="Right">
                                    <polygon
                                        points="17.5 5.999 16.793 6.706 22.086 11.999 1 11.999 1 12.999 22.086 12.999 16.792 18.294 17.499 19.001 24 12.499 17.5 5.999"
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    />
                                </g>
                            </svg>
                        </button>


                        <button className='bg-black px-5 py-2 rounded cursor-pointer hover:bg-white hover:text-black transition-transform duration-200 hover:scale-105'>Sign In</button>
                    </div>
                </nav>
                {/* LEFT AND RIGTH IMG */}
                <div className='relstive'> <img src={left} className='drop-shadow-[0_30px_9px_rgba(000,000,000,0.5)] w-[250px] absolute top-[90px] bottom-[100px]' /></div>
                <div className='relstive'> <img src={right} className='drop-shadow-[0_30px_9px_rgba(000,000,000,0.5)] w-[240px] absolute  bottom-[0px] right-0' /></div>
                {/* Section Idhar hai */}
                <section className='w-[100%] flex flex-col justify-center items-center '>

                
                        <p className='text-[50px] font-bold text-shimmer '>Order food & groceries. </p>
                    <p className='text-[45px] font-bold leading-none  text-shimmer '>Discover best restaurants. Swiggy it!</p>
                

                    <div className='mt-[60px] text-black relative'>
                        <input
                        onClick={()=>navigate('/search')}
                         className='cursor-pointer border-none bg-white rounded h-[50px] w-[400px] placeholder-gray-400 px-2 focus:outline-none focus:border-none' placeholder='Search for restaurant, item or more' />
                        <svg className='w-[17px] fill-black absolute right-[25px] top-1/3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                    </div>

                    <div className='flex justify-between w-[60%] mt-10'>
                        {/* For restaurants */}
                        <Link to={'/restaurants'} className='group'>
                            <div className='flex flex-col justify-start items-start pl-4 bg-white rounded-tl-[35px] group-hover:drop-shadow-[0_0px_20px_rgba(255,255,255,0.5)]  drop-shadow-[0_30px_9px_rgba(000,000,000,0.5)]  pt-4 transition-transform duration-200 hover:scale-105'>
                                <h1 className='font-bold text-black leading-5'>FOOD DELIVERY</h1>
                                <p className='text-gray-400 text-[13px] font-medium  tracking-tight' >FROM RESTAURANT</p>
                                <p className='px-2 bg-red-300 text-[10px] rounded-[10px] font-bold leading-5'>UPTO 60% OFF</p>
                                <div className='flex items-center'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 25 25"
                                        className="transition-transform duration-200 hover:scale-110 w-8 h-8 border bg-[#FF5200] rounded-full p-2 fill-current mt-[5px] font-bold"
                                    >

                                        <g id="Right">
                                            <polygon
                                                points="17.5 5.999 16.793 6.706 22.086 11.999 1 11.999 1 12.999 22.086 12.999 16.792 18.294 17.499 19.001 24 12.499 17.5 5.999"
                                                fill="#ffffff"
                                                stroke="#ffffff"
                                                strokeWidth="2"
                                            />
                                        </g>
                                    </svg>
                                    <div className='w-[100px] h-[60px] overflow-hidden relative ml-4'>
                                        <img src={restaurant} className='w-[200px] relative  left-[20px]' />

                                    </div>
                                </div>

                            </div></Link>


                        {/* For grocery */}
                        <Link to={'/grocery'} className='group'>
                            <div className='transition-transform duration-200 hover:scale-105 rounded-tl-[35px] group-hover:drop-shadow-[0_0px_20px_rgba(255,255,255,0.5)] drop-shadow-[0_30px_9px_rgba(000,000,000,0.5)] flex flex-col justify-start items-start pt-4 pl-4 bg-white rounded-[2px]'>
                                <h1 className='font-bold text-black leading-5'>INSTAMART</h1>
                                <p className='text-gray-400 text-[13px] font-medium tracking-tight' >INSTANT GROCERY</p>
                                <p className='px-2 bg-red-300 text-[10px] rounded-[10px] font-bold leading-5'>UPTO 60% OFF</p>
                                <div className='flex items-center'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 25 25"
                                        className="transition-transform duration-200 hover:scale-110 w-8 h-8 border bg-[#FF5200] rounded-full p-2 fill-current mt-[5px] font-bold"
                                    >

                                        <g id="Right">
                                            <polygon
                                                points="17.5 5.999 16.793 6.706 22.086 11.999 1 11.999 1 12.999 22.086 12.999 16.792 18.294 17.499 19.001 24 12.499 17.5 5.999"
                                                fill="#ffffff"
                                                stroke="#ffffff"
                                                strokeWidth="2"
                                            />
                                        </g>
                                    </svg>
                                    <div className='w-[100px] h-[60px] overflow-hidden relative ml-4'>
                                        <img src={grocery} className='w-[200px] relative  left-[20px]' />

                                    </div>
                                </div>

                            </div></Link>



                        {/*for dineout */}
                        <Link to={'/dineout'} className='group'>
                            <div className='transition-transform duration-200 hover:scale-105 rounded-tl-[35px] group-hover:drop-shadow-[0_0px_20px_rgba(255,255,255,0.5)] drop-shadow-[0_30px_9px_rgba(000,000,000,0.5)] pt-4 flex flex-col justify-start items-start pl-4 bg-white rounded-[2px]'>
                                <h1 className='font-bold text-black  leading-5'>DINEOUT</h1>
                                <p className='text-gray-400 text-[13px] font-medium tracking-tight' >EAT OUT & SAVE MORE</p>
                                <p className='px-2 bg-red-300 text-[10px] rounded-[10px] font-bold leading-5'>UPTO 50% OFF</p>
                                <div className='flex items-center'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 25 25"
                                        className="transition-transform duration-200 hover:scale-110 w-8 h-8 border bg-[#FF5200] rounded-full p-2 fill-current mt-[5px] font-bold"
                                    >

                                        <g id="Right">
                                            <polygon
                                                points="17.5 5.999 16.793 6.706 22.086 11.999 1 11.999 1 12.999 22.086 12.999 16.792 18.294 17.499 19.001 24 12.499 17.5 5.999"
                                                fill="#ffffff"
                                                stroke="#ffffff"
                                                strokeWidth="2"
                                            />
                                        </g>
                                    </svg>
                                    <div className='w-[100px] h-[60px] overflow-hidden relative ml-4'>
                                        <img src={dineout} className='w-[200px] relative  left-[20px]' />

                                    </div>
                                </div>

                            </div></Link>


                        {/* genie */}
                        <Link to={'/genie'} className='group'>
                            <div className='transition-transform duration-200 hover:scale-105 rounded-tl-[35px] group-hover:drop-shadow-[0_0px_20px_rgba(255,255,255,0.5)] drop-shadow-[0_30px_9px_rgba(000,000,000,0.5)] flex flex-col pt-4 justify-start items-start pl-4 bg-white rounded-[2px]'>
                                <h1 className='font-bold text-black leading-5'>GENIE</h1>
                                <p className='text-gray-400 text-[13px] font-medium tracking-tight' > PICK-UP & DROP</p>
                                <p className='px-2 bg-red-300 text-[10px]  rounded-[10px] font-bold leading-5'>FAST DELIVERY</p>
                                <div className='flex items-center'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 25 25"
                                        className="transition-transform duration-200 hover:scale-105 w-8 h-8 border bg-[#FF5200] rounded-full p-2 fill-current mt-[5px] font-bold"
                                    >

                                        <g id="Right">
                                            <polygon
                                                points="17.5 5.999 16.793 6.706 22.086 11.999 1 11.999 1 12.999 22.086 12.999 16.792 18.294 17.499 19.001 24 12.499 17.5 5.999"
                                                fill="#ffffff"
                                                stroke="#ffffff"
                                                strokeWidth="2"
                                            />
                                        </g>
                                    </svg>
                                    <div className='w-[100px] h-[60px] overflow-hidden relative ml-4'>
                                        <img src={genie} className='w-[200px] relative  left-[20px]' />

                                    </div>
                                </div>

                            </div></Link>
                    </div>
                </section>


            </div>
        </>
    )
}

export default Home