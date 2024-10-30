import { useState } from 'react';
import { MdArrowOutward } from 'react-icons/md';

const Navbar = () => {
    const [hoverTitle, setHoverTitle] = useState(false);

    return (
        <div className='px-10 py-6 flex justify-between items-center'>
            <div className='text-green-200 text-xl flex items-center gap-2'>
                <div className='border w-3 h-3 rounded-full text-xl bg-green-200'></div>


                <div
                    className="overflow-hidden absolute h-[34px] w-[110px] cursor-pointer"
                    onMouseEnter={() => setHoverTitle(true)}
                    onMouseLeave={() => setHoverTitle(false)}
                >
                    <h1
                        className={`relative transition-transform duration-300 ease-in ${hoverTitle ? 'translate-y-[-30px] left-5' : 'translate-y-2px] left-5'
                            }`}
                    >
                        NEBULA
                    </h1>
                    <h1
                        className={`relative transition-transform duration-300 ease-in ${hoverTitle ? 'translate-y-[-27px] left-5' : 'translate-y-[10px] left-5'
                            }`}
                    >
                        NEBULA
                    </h1>
                </div>



            </div>

            <div className='flex gap-8 text-white border border-[rgb(39,37,37)] rounded-lg px-4 py-2 text-sm'>
                <button className='relative group'>
                    <h1 className='mb-1'>Process</h1>
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out origin-left"></span>
                </button>

                <button className='relative group'>
                    <h1 className='mb-1'>Services</h1>
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out origin-left"></span>
                </button>
                <button className='relative group'>
                    <h1 className='mb-1'>Work</h1>
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out origin-left"></span>
                </button>
                <button className='relative group'>
                    <h1 className='mb-1'>Plans</h1>
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out origin-left"></span>
                </button>
                <button className='relative group'>
                    <h1 className='mb-1'>Team</h1>
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out origin-left"></span>

                </button>
                <button className='flex items-center gap-1 relative group'>
                    <h1 className='mb-1'>Contact</h1>
                    <MdArrowOutward className='text-green-200 transition-transform duration-500 group-hover:rotate-45 ease-in' />
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out origin-left"></span>

                </button>
            </div>

            <button className='lighting-button hover:shadow-[0px_-1px_20px_-1px_#adeac9] transition-all duration-1000 ease-out hover:border border-[#adeac9]'></button>



        </div>
    );
};

export default Navbar;