import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


// card
export const Card = ({img}) => <div className="px-0 md:px-10">
<div className='shadow-lg' >
    <div className="rounded-t-xl w-full h-auto">
        <img src={`${img}`} className=" w-full h-1/2" alt="" />
    </div>

    <div className="p-4 bg-white rounded-b-xl">
        <h1 className="text-xl font-semibold " >
            Websites accesibility and why it matters
        </h1>
        <p className="text-justify py-4">
            Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus vulputate aen dolor sit amet conss ...
        </p>
        

        <div className="flex justify-between my-4">
            <div className="25.01.2024">Maria Bend, Director</div>
            <div
                style={{
                    background:
                        'linear-gradient(103.47deg, #5B53F9 22.39%, #AC71D6 46.68%, #FF8E57 83.1%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                }}
                className="font-bold cursor-pointer"
            >
                Read more
            </div>
        </div>

    </div>
</div>
</div> 



const LatestInsights = () => {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3, // three cards on large screens
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1, // screens smaller than 768px
                    dots: true,
                    infinite: true,
                }
            }
        ]
    };


    return (
        <div className='mt-20'>

            <div
                style={{
                    backgroundImage: 'url("UpperWaveBg.png")',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%',
                }}
                className='py-16 pt-64 flex flex-col justify-between '
            >
                <h1 className='text-2xl md:text-4xl font-semibold mb-6 text-center text-white'>
                    Latest Insight
                </h1>

                <style>
                    {`
                        .slick-dots li button:before {
                            color: #a855f7; 
                            font-size: 14px;
                            margin-top: 10px;
                        }

                        .slick-dots li.slick-active button:before {
                            color: #5b53f9; 
                        }
                    `}
                </style>
                
                {/* Cards */}
                <Slider {...settings} className='mx-10 md:mx-0'>

                        <Card img='insight1.png'/>

                        <Card img='insight2.png'/>

                        <Card img='insight3.png'/>

                </Slider>
                
            </div>
            

        </div>
    );
};

export default LatestInsights;