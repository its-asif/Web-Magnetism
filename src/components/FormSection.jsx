import React from 'react';

const FormSection = () => {
    return (
        <div className=' bg-[#f3f2ff] p-10 py-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-40'>
                <div>
                    <h1 className='text-4xl font-semibold'>
                        Let's Talk About Your Project
                    </h1>
                    <p className='my-4'>
                        Do you have a project in mind, that you feel our approach would work well for?
                    </p>
                    <p>
                        We’re always happy to discuss your project with you and put together a free proposal.
                    </p>
                </div>

                <div>
                    <div className='bg-white rounded-lg py-10'>
                        <h1 className='font-semibold text-center'> Just fill out the form below  to get started.</h1>
                        
                        {/* input  */}
                        <div className='flex flex-col gap-4 mt-4 justify-center items-center'>
                            {/* Name */}
                            <input placeholder='Name' type='text' id='name' 
                                className=' border-2 border-opacity-50 p-2 rounded-lg w-80 border-[#CACACA]'
                            />
                            
                            {/* Email */}
                            <input placeholder='Email' type='email' id='email' 
                                className=' border-2 border-opacity-50 p-2 rounded-lg w-80 border-[#CACACA]'
                            />
                            
                            {/* Company */}
                            <input placeholder='Company' type='text' id='company' 
                                className=' border-2 border-opacity-50 p-2 rounded-lg w-80 border-[#CACACA]'
                            />
                            
                            {/* Phone number */}
                            <input placeholder='Phone Number' type='number' id='phone' 
                                className=' border-2 border-opacity-50 p-2 rounded-lg w-80 border-[#CACACA]'
                            />

                            {/* file */}
                            <input type='file' id='file' placeholder='Send us your brief'
                                className=' border-2 border-opacity-50 p-2 rounded-lg w-80 border-[#CACACA]'
                            />
                            
                            {/* Message */}
                            <textarea placeholder='Message' id='message' 
                                className=' border-2 border-opacity-50 p-2 rounded-lg w-80 border-[#CACACA]'
                            />

                            {/* checkbox */}
                            <div className='flex items-center gap-2 ml-8'>
                                <input type='checkbox' id='checkbox' />
                                <label htmlFor='checkbox'
                                    className='text-sm'
                                >I agree to have my information stored  
                                <span className='text-[#fd8e5a] ml-1'>Privacy Policy</span>. </label>
                            </div>


                            <div className="">
                                    <button
                                    style={{
                                        background: 'linear-gradient(103.22deg, #5B53F9 0%, #AC71D6 40.58%, #FF8E57 101.45%)',
                                    }}
                                    className='text-white rounded-full border-2 border-opacity-50 w-80 p-4'>
                                        Send your message 
                                    </button>

                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormSection;