import { GoArrowUpRight } from "react-icons/go";

const OverviewOfServices = () => {
    return (
        <div className="w-full mt-10">
                <h1 className="text-3xl font-semibold  md:text-4xl text-center my-6 mt-28">
                    Overview Of Sevices
                </h1>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-3 mb-20 mx-10">

                {/* card1 */}
                <div >
                    <div className="rounded-lg w-full h-auto">
                        <img src="overview1.png" className="rounded-lg w-full h-auto" alt="" />
                    </div>

                    <div className="py-2">
                        <h1 className="text-2xl font-semibold " >
                            Bespoke Web Design
                        </h1>
                        <p className="text-justify py-4">
                            Lorem ipsum dolor sit amet consectetur. Eu massa turpis adipiscing libero rhoncus posuere tempus. Sed fringilla malesuada felis vitae. Montes mattis ultrices maecenas et. Ut ultricies viverra volutpat
                        </p>

                        <div class="mx-auto flex ">
                            <div class=" rounded-full p-1
                            bg-gradient-to-r from-[#5B53F9] via-[#AC71D6] to-[#FF8E57]
                            ">
                                <button class="flex items-center justify-center bg-white p-1 px-6 rounded-full font-semibold">
                                    Bespoke web design <GoArrowUpRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* card2 */}
                <div >
                    <div className="rounded-lg w-full h-auto">
                        <img src="overview2.png" className="rounded-lg w-full h-auto"  alt="" />
                    </div>

                    <div className="py-2">
                        <h1 className="text-2xl font-semibold " >
                            App development
                        </h1>
                        <p className="text-justify py-4">
                            Lorem ipsum dolor sit amet consectetur. Eu massa turpis adipiscing libero rhoncus posuere tempus. Sed fringilla malesuada felis vitae. Montes mattis ultrices maecenas et. Ut ultricies viverra volutpat
                        </p>

                        <div class="mx-auto flex ">
                            <div class=" rounded-full p-1
                            bg-gradient-to-r from-[#5B53F9] via-[#AC71D6] to-[#FF8E57]
                            ">
                                <button class="flex items-center justify-center bg-white p-1 px-6 rounded-full font-semibold">
                                    App development <GoArrowUpRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* card3 */}
                <div >
                    <div className="rounded-lg">
                        <img src="overview3.png" className="rounded-lg w-auto h-auto"  alt="" />
                    </div>

                    <div className="py-2">
                        <h1 className="text-2xl font-semibold " >
                            Digital Marketing
                        </h1>
                        <p className="text-justify py-4">
                            Lorem ipsum dolor sit amet consectetur. Eu massa turpis adipiscing libero rhoncus posuere tempus. Sed fringilla malesuada felis vitae. Montes mattis ultrices maecenas et. Ut ultricies viverra volutpat
                        </p>

                        <div class="mx-auto flex ">
                            <div class=" rounded-full p-1
                            bg-gradient-to-r from-[#5B53F9] via-[#AC71D6] to-[#FF8E57]
                            ">
                                <button class="flex items-center justify-center bg-white p-1 px-6 rounded-full font-semibold">
                                    Digital Marketing <GoArrowUpRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverviewOfServices;