import { FaFacebookF, FaInstagram, FaTelegramPlane, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

const Footer = () => {
    return (
        <div className="bg-[#1c0c26] p-10 md:px-20 text-white">
            <div className="flex flex-col gap-10 mb-10">

                {/* buttons */}
                <div className="flex flex-row justify-between">

                    {/* button */}
                    <div className="mt-8 flex flex-wrap gap-4">
                        <button
                        style={{
                            background: 'linear-gradient(104.47deg, #5B53F9 6.8%, #AC71D6 47.4%, #FF8E57 108.31%)'
                        }}
                        className='flex items-center gap-x-2 text-white p-4 rounded-md'>
                            <img src="logo.png" alt="" className="w-48" />
                        </button>

                    </div>

                    <div className="mt-8 hidden md:flex md:flex-wrap gap-4 ">
                        <button
                        style={{
                            background: 'linear-gradient(102.67deg, #5B53F9 7.43%, #AC71D6 46.26%, #FF8E57 104.5%)'
                        }}
                        className='flex items-center gap-x-2 text-white px-8 py-2 md:py-4 rounded-full '>
                            CONTACT US <GoArrowUpRight />
                        </button>

                    </div>
                </div>

                {/* line */}
                <hr 
                    style={{
                        background: 'linear-gradient(102.67deg, #5B53F9 7.43%, #AC71D6 46.26%, #FF8E57 104.5%)',
                        height: '1px',
                        border: 'none',
                    }}  
                />


                <div className="grid grid-cols-1 md:grid-cols-5">

                    {/* Col 1 & 2 */}
                    <div className="md:col-span-2 mx-8">
                        <h1 className="font-bold border-b-2 py-2 md:py-4">Services</h1>

                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div>
                                <h1 className="font-bold py-2 md:py-4">Digital Marketing</h1>
                                <h1 className="font-thin py-2 md:py-4">Email Nurture</h1>
                                <h1 className="font-thin py-2 md:py-4">SEO</h1>
                                <h1 className="font-thin py-2 md:py-4">Social Media Marketing</h1>
                                <h1 className="font-thin py-2 md:py-4">Conversion Rate Optimization</h1>
                                <h1 className="font-thin py-2 md:py-4">Copy Writing</h1>
                                <h1 className="font-thin py-2 md:py-4">Email Marketing</h1>
                                <h1 className="font-thin py-2 md:py-4">Remarketing</h1>
                                <h1 className="font-thin py-2 md:py-4">PPC</h1>
                            </div>
                            <div>
                                <h1 className="font-bold py-2 md:py-4">Web Design</h1>
                                <h1 className="font-thin py-2 md:py-4">Bespoke Web Design</h1>
                                <h1 className="font-thin py-2 md:py-4">Web Design</h1>
                                <h1 className="font-thin py-2 md:py-4">Web Redesign</h1>
                                <h1 className="font-thin py-2 md:py-4">UI/UX Design</h1>
                                <h1 className="font-thin py-2 md:py-4">Brand Identity and Logo</h1>
                                <h1 className="font-bold py-2 md:py-4">App Development</h1>
                            </div>
                        </div>
                    </div>

                    {/* Col 3 */}
                    <div className="mx-8">
                        <h1 className="font-bold border-b-2 py-2 md:py-4">Home</h1>
                        <h1 className="font-bold border-b-2 py-2 md:py-4">About us</h1>
                        <h1 className="font-bold border-b-2 py-2 md:py-4">Contact us</h1>
                    </div>

                    {/* Col 4 */}
                    <div className="mx-8">
                        <h1 className="font-bold border-b-2 py-2 md:py-4">Resources</h1>
                        <h1 className="font-thin py-2 md:py-4">Our Work</h1>
                        <h1 className="font-thin py-2 md:py-4">Insights</h1>
                    </div>

                    {/* Col 5 */}
                    <div className="mx-8">
                        <h1 className="font-bold border-b-2 py-2 md:py-4">Social Media</h1>
                        <h1 className="font-thin py-2 md:py-4 flex gap-2 items-center"> <FaFacebookF  className="bg-[#785EEB] text-white rounded-full p-1 h-6 w-6"/> Facebook</h1>
                        <h1 className="font-thin py-2 md:py-4 flex gap-2 items-center"> <FaInstagram className="bg-[#785EEB] text-white rounded-full p-1 h-6 w-6 "/> Instagram</h1>
                        <h1 className="font-thin py-2 md:py-4 flex gap-2 items-center"> <FaTwitter className="bg-[#785EEB] text-white rounded-full p-1 h-6 w-6 "/> Twitter</h1>
                        <h1 className="font-thin py-2 md:py-4 flex gap-2 items-center"> <FaTelegramPlane className="bg-[#785EEB] text-white rounded-full p-1 h-6 w-6 "/> Telegram</h1>
                        <h1 className="font-thin py-2 md:py-4 flex gap-2 items-center"> <FaYoutube className="bg-[#785EEB] text-white rounded-full p-1 h-6 w-6 "/> YouTube</h1>
                        <h1 className="font-thin py-2 md:py-4 flex gap-2 items-center"> <FaTiktok className="bg-[#785EEB] text-white rounded-full p-1 h-6 w-6 "/> Tiktok</h1>

                    </div>

                </div>

            </div>

            <div className="mb-8 flex flex-wrap gap-4 md:hidden">
                <button
                style={{
                    background: 'linear-gradient(102.67deg, #5B53F9 7.43%, #AC71D6 46.26%, #FF8E57 104.5%)'
                }}
                className='flex items-center gap-x-2 text-white px-8 py-2 md:py-4 rounded-full '>
                    CONTACT US <GoArrowUpRight />
                </button>

            </div>

            <p 
                className="text-center text-[#9E9E9E] text-sm"
            >©Copyright. 2024 Web Magnetism All rights reserved I Terms and condition I Privacy Policy.</p>
        </div>
    );
};

export default Footer;