import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const OurWork = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // three cards on large screens
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1, // screens smaller than 768px
                }
            }
        ]
    };


    return (
        <div className='my-20'>
            <div className='flex flex-col md:flex-row justify-between p-10'>
                <div className='w-full md:w-1/2'>
                    <h1 className='text-2xl md:text-4xl font-semibold mb-6'>
                        Our Work
                    </h1>
                    <p className='text-lg'>
                        We don’t claim to be gurus or wizards. We’re just a super experienced, passionate team who knows how to get results for our clients. All our work is custom and thoughtfully designed, written, and developed with your business goals in mind.
                    </p>
                </div>
                
                <div className="mt-8 flex flex-wrap gap-4 items-end">
                    <button
                    style={{
                        background: 'linear-gradient(102.67deg, #5B53F9 7.43%, #AC71D6 46.26%, #FF8E57 104.5%)'
                    }}
                    className='flex items-center gap-x-2 text-white px-8 py-4 rounded-full border-2 h-fit'>
                        VIEW FULL PORTFOLIO <GoArrowUpRight />
                    </button>
                </div>
            </div>

            <style>
                {`
                    .slick-dots li button:before {
                        color: #a855f7; 
                        font-size: 20px;
                    }

                    .slick-dots li.slick-active button:before {
                        color: #5b53f9; 
                    }
                `}
            </style>

            <Slider {...settings} className='mx-20 md:mx-0'>
                {/* card1 */}
                <div className='px-0 md:px-10'>
                    <div className="rounded-lg">
                        <img src="work1.png" className="rounded-lg w-full h-auto"  alt="" />
                    </div>

                    <div className="py-2">
                        <h1 className="text-2xl font-semibold " >
                            Redesign of b2b website
                        </h1>
                        <p className="text-justify py-2">
                            Web design
                        </p>
                    </div>
                </div>

                {/* card2 */}
                <div className='px-0 md:px-10'>
                    <div className="rounded-lg">
                        <img src="work2.png" className="rounded-lg w-full h-auto"  alt="" />
                    </div>

                    <div className="py-2">
                        <h1 className="text-2xl font-semibold " >
                            Mobile application
                        </h1>
                        <p className="text-justify py-2">
                            App development
                        </p>
                    </div>
                </div>
                
                {/* card3 */}
                <div className='px-0 md:px-10'>
                    <div className="rounded-lg">
                        <img src="work3.png" className="rounded-lg w-full h-auto"  alt="" />
                    </div>

                    <div className="py-2">
                        <h1 className="text-2xl font-semibold " >
                            E-commerce shop
                        </h1>
                        <p className="text-justify py-2">
                            Web development
                        </p>
                    </div>
                </div>
            </Slider>

            {/* <div className="flex justify-center items-center mb-20">
                <div className='font-bold text-purple-500 mx-6 text-xl pb-1'> &lt; </div>
                <div className="flex gap-4">
                    <div className="w-4 h-4 border-2 bg-purple-500 rounded-full"></div>
                    <div className="w-4 h-4 border-2 border-purple-500 rounded-full"></div>
                    <div className="w-4 h-4 border-2 border-purple-500 rounded-full"></div>
                </div>
                <div className='font-bold text-purple-500 mx-6 text-xl pb-1'> &gt; </div>
            </div> */}
        </div>
    );
};

export default OurWork;
