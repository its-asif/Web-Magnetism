import { HiOutlineChatAlt2, HiOutlineGlobe } from 'react-icons/hi';
import { MdSwipeDown } from 'react-icons/md';

const WhyChooseUs = () => {
    return (
        <div
            style={{
                backgroundColor: '#f3f2ff',
                borderRadius: '30%',
            }}
            className='my-20 w-full min-h-96 py-10 pb-16' 
        >
            <div
                className=' p-10'
            >
                <h2
                    className='text-3xl md:text-4xl font-semibold text-center'
                >Why Choose Us 
                </h2>

                {/* Cards */}
                <div className='grid grid-cols-1 gap-10 md:grid-cols-3 mt-10'>
                    {/* card 1 */}
                    <div className='flex flex-col items-center justify-center bg-white rounded-xl p-4'>
                        <div className='flex flex-col items-center justify-center'>
                            <div className='flex flex-row items-center justify-start gap-4'>
                                <div className='flex flex-row items-center justify-center gap-8 bg-purple-500 rounded-xl p-6'>
                                    <MdSwipeDown className='text-4xl text-white' />
                                
                                </div>
                                <h3 className='text-2xl font-semibold text-gray-800'>Take Control of Your Entire Marketing Landscape</h3>
                            </div>
                                <p className='text-lg font-normal text-gray-500'>We've curated top-tier teams under one roof, enabling you to bypass the complexities of overseeing a network of agencies and internal hires.</p>
                        </div>
                    </div>


                    {/* card 2 */}
                    <div className='flex flex-col items-center justify-center bg-white rounded-xl p-4'>
                        <div className='flex flex-col items-center justify-center'>
                            <div className='flex flex-row items-center justify-start gap-4'>
                                <div className='flex flex-row items-center justify-center gap-8 bg-purple-500 rounded-xl p-6'>
                                    <HiOutlineGlobe className='text-4xl text-white' />
                                
                                </div>
                                <h3 className='text-2xl font-semibold text-gray-800'>
                                    Your Business's Dedicated Marketing Wing
                                </h3>
                            </div>
                                <p className='text-lg font-normal text-gray-500'>
                                    Even if your business is modest in size, having a well-versed extension focused on digital marketing provides a distinct competitive edge.
                                </p>
                        </div>
                    </div>


                    {/* card 3 */}
                    <div className='flex flex-col items-center justify-center bg-white rounded-xl p-4'>
                        <div className='flex flex-col items-center justify-center'>
                            <div className='flex flex-row items-center justify-start gap-4'>
                                <div className='flex flex-row items-center justify-center gap-8 bg-purple-500 rounded-xl p-6'>
                                    <HiOutlineChatAlt2 className='text-4xl text-white' />
                                
                                </div>
                                <h3 className='text-2xl font-semibold text-gray-800'>
                                    A Reliable Collaborator
                                </h3>
                            </div>
                                <p className='text-lg font-normal text-gray-500'>
                                    Our exceptional team members function seamlessly as an integral part of your team, fully committed to your success and the sanctity of your brand.
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;