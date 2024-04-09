
const Navbar = () => {
    return (
        <div
            className='absolute w-full h-20 bg-transparent flex justify-between items-center px-10'
        >
            <div>
                <img src="../../public/logo.png" alt="" />
            </div>

            <div className='cursor-pointer'>
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.333252 0.333344H6.66659V6.66668H0.333252V0.333344ZM0.333252 9.83334H6.66659V16.1667H0.333252V9.83334ZM6.66659 19.3333H0.333252V25.6667H6.66659V19.3333ZM9.83325 0.333344H16.1666V6.66668H9.83325V0.333344ZM16.1666 9.83334H9.83325V16.1667H16.1666V9.83334ZM9.83325 19.3333H16.1666V25.6667H9.83325V19.3333ZM25.6666 0.333344H19.3333V6.66668H25.6666V0.333344ZM19.3333 9.83334H25.6666V16.1667H19.3333V9.83334ZM25.6666 19.3333H19.3333V25.6667H25.6666V19.3333Z" fill="white"/>
                </svg>
            </div>
        </div>
    );
};

export default Navbar;