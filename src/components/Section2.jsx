import { GoArrowUpRight } from "react-icons/go";

const Section2 = () => {
    return (
        <div>
            <section>
                <div className="mx-auto py-8">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="py-8 md:py-12 lg:px-16 lg:py-24">
                            <div className="mx-auto ">
                            <h1 className="text-3xl font-semibold  md:text-4xl">
                                Welcome to Web Magnetism
                            </h1>

                            <p className="sm:mt-4 sm:block text-justify">
                                Your hub for bespoke web design and digital marketing success. We seamlessly merge creativity and SEO expertise to craft visually stunning websites that magnetize audiences.
                                <br/>
                                Our digital marketing, from SEO mastery to impactful campaigns, ensures your brand's resonance online. At Web Magnetism, we're not just designers; we're digital architects, sculpting unique online experiences that elevate your brand.
                                <br/>
                                Navigate the digital landscape with confidence – choose Web Magnetism for tailored web design and strategic digital marketing, where innovation meets results for a compelling online journey.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <button
                                style={{
                                    background: 'linear-gradient(102.67deg, #5B53F9 7.43%, #AC71D6 46.26%, #FF8E57 104.5%)'
                                }}
                                className='flex items-center gap-x-2 text-white px-8 py-4 rounded-full border-2'>
                                    ABOUT US <GoArrowUpRight />
                                </button>

                            </div>
                            </div>
                        </div>

                        <div className=" flex items-center">
                            <img
                            alt=""
                                src="image section 2.png"
                                className="mx-auto w-96px h-auto"
                            />

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Section2;