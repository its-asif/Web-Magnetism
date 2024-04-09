import React from 'react';

const LatestInsights = () => {
    return (
        <div className='my-20'>

            <div
                style={{
                    backgroundImage: 'url("UpperWaveBg.png")',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
                className='pt-32 flex flex-col justify-between'
            >
                <h1 className='text-2xl md:text-4xl font-semibold mb-6 text-center text-white'>
                    Latest Insight
                </h1>
                
                <div className='grid grid-cols-1 md:grid-cols-3 mx-20 gap-6 bottom-0'>
                    <div class="rounded-t-lg  shadow-lg sm:p-8">
                        <img src="insight1.png" alt="" />
                    </div>
                </div>

            </div>
            
                <div className='grid grid-cols-1 md:grid-cols-3 mx-20 gap-6'>

                </div>

        </div>
    );
};

export default LatestInsights;