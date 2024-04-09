import { GoArrowUpRight } from "react-icons/go";
import WhyChooseUs from "./WhyChooseUs";
import { HiOutlineGlobe } from "react-icons/hi";


const OurBospokeWebSite = () => {
    return (
        <div
            style={{
                background: 'linear-gradient(102.26deg, #5B53F9 -13.11%, #AC71D6 36.24%, #FF8E57 110.26%)',
                borderRadius: '30% 30% 0 0',
            }}
        >
            <WhyChooseUs/>

            <div className="grid grid-cols-1 md:grid-cols-2 my-10 pb-20">

                {/* left side */}
                <div className="mx-auto w-3/4">
                    <h1
                        className="text-3xl font-semibold  md:text-4xl text-white"
                    >Our bespoke website include the fllowing</h1>
                    <p 
                        className="sm:block text-justify text-white mt-4"
                    > Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit Blandit sodales lacus vulputate aenean aliquam accumsa</p>

                    <div className="mt-8 flex flex-wrap  gap-4">
                        <button
                        style={{
                            background: 'linear-gradient(93.05deg, #FF66C4 5.8%, rgba(242, 74, 177, 0) 98.1%)',    
                        }}
                        className='flex items-center gap-x-2 text-white px-8 py-4 rounded-full border-2'>
                            CONTACT US <GoArrowUpRight />
                        </button>

                    </div>
                </div>
                        
                {/* right side */}
                <div>

                    
                    {/* cards */}
                    <div className="grid grid-cols-1 gap-4 mx-10">
                        
                            {/* card 1 */}
                            <div className='flex flex-col items-center justify-center bg-white rounded-xl p-4'>
                                <div className='flex flex-col '>
                                        <div className='flex flex-row items-center justify-center gap-8 bg-purple-500 rounded-xl p-6 w-20 h-20'>
                                            <HiOutlineGlobe className='text-4xl text-white' />
                                        
                                        </div>
                                        <h3 className='text-2xl font-bold text-gray-800 my-4'>Bespoke Design</h3>
                                    
                                        <p className='text-md font-normal text-gray-500'>
                                        Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit m accumsan ipsum.
                                        </p>
                                </div>
                            </div>


                            {/* card 2 */}
                            <div className='flex flex-col items-center justify-center bg-white rounded-xl p-4'>
                                <div className='flex flex-col '>
                                        <div className='flex flex-row items-center justify-center gap-8 bg-purple-500 rounded-xl p-6 w-20 h-20'>
                                            <HiOutlineGlobe className='text-4xl text-white' />
                                        
                                        </div>
                                        <h3 className='text-2xl font-bold text-gray-800 my-4'>Mobile Optimised</h3>
                                    
                                        <p className='text-md font-normal text-gray-500'>
                                        Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit m accumsan ipsum.
                                        </p>
                                </div>
                            </div>

                            {/* card 3 */}
                            <div className='flex flex-col items-center justify-center bg-white rounded-xl p-4'>
                                <div className='flex flex-col '>
                                        <div className='flex flex-row items-center justify-center gap-8 bg-purple-500 rounded-xl p-6 w-20 h-20'>
                                            <HiOutlineGlobe className='text-4xl text-white' />
                                        
                                        </div>
                                        <h3 className='text-2xl font-bold text-gray-800 my-4'>SEO Optimised</h3>
                                    
                                        <p className='text-md font-normal text-gray-500'>
                                        Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit m accumsan ipsum.
                                        </p>
                                </div>
                            </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OurBospokeWebSite;