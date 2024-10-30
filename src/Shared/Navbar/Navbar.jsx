import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { MdArrowOutward } from 'react-icons/md';

const Navbar = () => {
    const [hoverTitle, setHoverTitle] = useState(false);
    const [open, setOpen] = useState(false);
    const menu = ['Process', 'Services', 'Work', 'Plans', 'Team'];

    return (
        <div className='py-6 flex justify-between items-center bg-transparent text-white relative'>
            {/* Title */}
            <div className='text-green-200 text-xl flex items-center gap-2'>
                <div className='border w-3 h-3 rounded-full bg-green-200'></div>
                <div
                    className="overflow-hidden h-[34px] w-[110px] cursor-pointer"
                    onMouseEnter={() => setHoverTitle(true)}
                    onMouseLeave={() => setHoverTitle(false)}
                >
                    <h1 className={`relative transition-transform duration-500 ${hoverTitle ? 'translate-y-[-30px]' : 'translate-y-1'}`}>NEBULA</h1>
                    <h1 className={`relative transition-transform duration-500 ${hoverTitle ? 'translate-y-[-27px]' : 'translate-y-10'}`}>NEBULA</h1>
                </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div onClick={() => setOpen(!open)} className='cursor-pointer lg:hidden z-40'>
                {open ? '' : <HiOutlineMenuAlt4 className='border rounded-full border-gray-700 w-11 h-11 p-3' />}
            </div>

            {/* Nav Links */}
            <div className={`${open
                ? 'flex flex-col items-start pt-1 text-3xl w-[450px] h-[500px] bg-inherit z-30 gap-y-3 rounded-md opacity-100'
                : 'w-0 h-0 opacity-0'} 
                absolute md:static lg:flex lg:items-center gap-10 lg:border rounded-lg border-gray-800 lg:py-6 lg:px-4 lg:w-auto lg:opacity-100 transition-all duration-700 right-8 top-6 text-white overflow-hidden`}
            >
                <div className={`${open ? 'flex justify-between items-center w-full px-5' : 'hidden'}`}>
                    <div className='border w-4 h-4 rounded-full bg-green-200'></div>
                    <div>
                        <AiOutlineClose onClick={() => setOpen(!open)} className='w-12 h-12 cursor-pointer p-3' />
                    </div>
                </div>

                {menu.map((item) => (
                    <button key={item} className={`${open ? 'px-10' : ''} relative group`}>
                        <h1 className='mb-1'>{item}</h1>
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out origin-left"></span>
                    </button>
                ))}

                <button className={`${open ? 'px-10' : ''} flex items-center justify-center gap-1 relative group`}>
                    <h1 className='mb-1'>Contact</h1>
                    <MdArrowOutward className='text-green-200 transition-transform duration-500 group-hover:rotate-45 ease-in' />
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out origin-left"></span>
                </button>
            </div>

            {/* Lighting Button */}
            <div className='hidden lg:block'>
                <button className='lighting-button hover:shadow-[0px_-1px_20px_-1px_#adeac9] transition-all duration-1000 ease-in hover:border border-[#adeac9]'></button>
            </div>
        </div>
    );
};

export default Navbar;
