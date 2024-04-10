import { GoArrowUpRight } from "react-icons/go";

const Header = () => {
    return (
        <div>
            <section className=""
                style={{
                    background: 'linear-gradient(102.26deg, #5B53F9 -13.11%, #AC71D6 36.24%, #FF8E57 110.26%)',
                }}
            >
                <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
                    <div className="mx-auto max-w-xl text-center">
                    <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
                        WEB MAGNETISM
                    </h1>

                    <p className="mt-4 sm:text-xl/relaxed text-white">
                    Transforming Businesses with unique Web design and strategic digital marketing for impactful online visibility.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <button
                        style={{
                            background: `linear-gradient(93.05deg, #FF66C4 5.8%, rgba(242, 74, 177, 0) 98.1%)`,
                        }}
                        className='flex items-center gap-x-2 text-white px-8 py-4 rounded-full border-2'>
                            GET A PROPOSAL <GoArrowUpRight />
                        </button>

                    </div>
                    </div>
                </div>
            </section>

            {/* wave */}
            <section className="mx-auto w-full">
                <img src="Rectangle 17.png" alt="Wave Mosaic"
                    className='w-full'
                    style={{
                        background: 'linear-gradient(102.26deg, #5B53F9 -13.11%, #AC71D6 36.24%, #FF8E57 110.26%)',
                    }}
                />
            </section>


            
        </div>
    );
};

export default Header;