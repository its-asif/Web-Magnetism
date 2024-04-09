import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ClientReview = () => {
    const stars = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="#F17C20"
        >
            <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
        </svg>
    );

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Show three columns on large screens
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1, // Show one column for screens smaller than 768px
                },
            },
        ],
    };

    return (
        <div className="my-20">
            <h1 className="text-2xl md:text-4xl font-semibold mb-6 text-center">
                What Our Clients Say About Us
            </h1>

            <style>
                {`
                    .slick-dots li button:before {
                        color: #a855f7; 
                        font-size: 16px;
                    }

                    .slick-dots li.slick-active button:before {
                        color: #5b53f9; 
                    }
                `}
            </style>

            <Slider {...settings} className=''>
                {/* col1 */}
                <div className='px-10'>
                <div className="rounded-lg p-6 shadow-lg sm:p-8">
                    <div className="flex flex-col items-center gap-4">
                        <img
                            alt=""
                            src="person1.png"
                            className="size-14 rounded-full object-cover"
                        />

                        <div>
                            <div className="flex justify-center gap-0.5 text-green-500">
                                {Array(5).fill(stars)}
                            </div>
                        </div>
                    </div>

                    <p className="mt-4 text-gray-700">
                        Lorem ipsum dolor sit amet consectetur. Et adipiscing dolor sapien arcu
                        malesuada semper. Egestas purus nunc at velit erat dignissim
                    </p>

                    <div className="flex justify-between my-4">
                        <div className="font-semibold">Maria Bend, Director</div>
                        <div
                            style={{
                                fontWeight: 'bold',
                                background:
                                    'linear-gradient(103.47deg, #5B53F9 22.39%, #AC71D6 46.68%, #FF8E57 83.1%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent',
                            }}
                            className="font-bold"
                        >
                            Read more
                        </div>
                    </div>
                </div>
                </div>

                {/* col2 */}
                <div className='px-10'>
                <div className="rounded-lg p-6 shadow-lg sm:p-8">
                    <div className="flex flex-col items-center gap-4">
                        <img
                            alt=""
                            src="person2.png"
                            className="size-14 rounded-full object-cover"
                        />

                        <div>
                            <div className="flex justify-center gap-0.5 text-green-500">
                                {Array(5).fill(stars)}
                            </div>
                        </div>
                    </div>

                    <p className="mt-4 text-gray-700">
                        Lorem ipsum dolor sit amet consectetur. Et adipiscing dolor sapien arcu
                        malesuada semper. Egestas purus nunc at velit erat dignissim
                    </p>

                    <div className="flex justify-between my-4">
                        <div className="font-semibold">Maria Bend, Director</div>
                        <div
                            style={{
                                fontWeight: 'bold',
                                background:
                                    'linear-gradient(103.47deg, #5B53F9 22.39%, #AC71D6 46.68%, #FF8E57 83.1%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent',
                            }}
                            className="font-bold"
                        >
                            Read more
                        </div>
                    </div>
                </div>
                </div>

                {/* col3 */}
                <div className='px-10'>
                <div className="rounded-lg p-6 shadow-lg sm:p-8">
                    <div className="flex flex-col items-center gap-4">
                        <img
                            alt=""
                            src="person3.png"
                            className="size-14 rounded-full object-cover"
                        />

                        <div>
                            <div className="flex justify-center gap-0.5 text-green-500">
                                {Array(5).fill(stars)}
                            </div>
                        </div>
                    </div>

                    <p className="mt-4 text-gray-700">
                        Lorem ipsum dolor sit amet consectetur. Et adipiscing dolor sapien arcu
                        malesuada semper. Egestas purus nunc at velit erat dignissim
                    </p>

                    <div className="flex justify-between my-4">
                        <div className="font-semibold">Maria Bend, Director</div>
                        <div
                            style={{
                                fontWeight: 'bold',
                                background:
                                    'linear-gradient(103.47deg, #5B53F9 22.39%, #AC71D6 46.68%, #FF8E57 83.1%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent',
                            }}
                            className="font-bold"
                        >
                            Read more
                        </div>
                    </div>
                </div>
                </div>
            </Slider>

            
        </div>
    );
};

export default ClientReview;
