import { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { MdArrowOutward } from 'react-icons/md';

const Navbar = () => {
    const [hoverTitle, setHoverTitle] = useState(false);
    const [open, setOpen] = useState(false);
    const menu = ['Process', 'Services', 'Work', 'Plans', 'Team'];

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 450) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`${sticky ? 'md:sticky md:flex justify-center top-0 z-50' : ''} sticky top-0 md:static z-20`}>
            <div className='py-6 flex justify-between items-center text-white relative'>
                {/* Title */}
                <div className={`${sticky ? 'md:hidden' : 'flex items-center gap-2'}`}>
                    <div className='hidden md:block border w-3 h-3 rounded-full bg-green-200'></div>
                    <div
                        className="overflow-hidden h-[34px] w-[110px] cursor-pointer"
                        onMouseEnter={() => setHoverTitle(true)}
                        onMouseLeave={() => setHoverTitle(false)}
                    >
                        <h1 className={`relative transition-transform duration-500 text-green-200 ${hoverTitle ? 'translate-y-[-30px]' : 'translate-y-1'}`}>NEBULA</h1>
                        <h1 className={`relative transition-transform duration-500 text-green-200 ${hoverTitle ? 'translate-y-[-20px]' : 'translate-y-10'}`}>NEBULA</h1>
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <div onClick={() => setOpen(!open)} className='cursor-pointer lg:hidden z-40'>
                    {open ? '' : <HiOutlineMenuAlt4 className='border rounded-full border-gray-700 w-11 h-11 p-3' />}
                </div>

                {/* Nav Links */}
                <div className={`${open
                    ? 'flex flex-col items-start border border-gray-800 pt-1 text-3xl w-[95%] md:w-[350px] h-[420px] z-50 gap-y-3 rounded-md opacity-100 bg-black px-10 transform translate-x-[-50%] left-[50%] bg-opacity-60 backdrop-blur-3xl'
                    : 'w-0 h-0 opacity-0'} 
                absolute md:static lg:flex lg:items-center gap-10 lg:border rounded-lg border-gray-800 lg:py-6 lg:px-4 lg:w-auto lg:opacity-100 transition-all duration-700 right-8 top-6 text-white overflow-hidden  md:backdrop-blur-3xl`}
                >
                    <div className={`${open ? 'flex justify-between items-center w-full' : 'hidden'}`}>
                        <div className='border w-4 h-4 rounded-full bg-green-200'></div>
                        <div>
                            <AiOutlineClose onClick={() => setOpen(!open)} className='w-12 h-12 cursor-pointer p-3 text-green-200' />
                        </div>
                    </div>

                    {menu.map((item) => (
                        <button key={item} className={`${open ? 'px-4' : ''} relative group`}>
                            <h1 className='mb-1'>{item}</h1>
                            {
                                open ?
                                    ''
                                    :
                                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out origin-left"></span>
                            }
                        </button>
                    ))}

                    <button className={`${open ? 'px-4' : ''} flex items-center justify-center gap-1 relative group`}>
                        <h1 className='mb-1'>Contact</h1>
                        <MdArrowOutward className='text-green-200 transition-transform duration-500 group-hover:rotate-45 ease-in' />
                        {
                            open ?
                                ''
                                :
                                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out origin-left"></span>
                        }
                    </button>

                    {/* Lighting Button */}
                    <div className={`${sticky ? 'md:block' : ''} hidden`}>
                        <button className='lighting-button hover:shadow-[0px_-1px_20px_-1px_#adeac9] transition-all duration-1000 ease-in hover:border border-[#adeac9]'></button>
                    </div>
                </div>

                {/* Lighting Button */}
                <div className={`${sticky ? 'hidden' : 'hidden lg:block'}`}>
                    <button className='lighting-button hover:shadow-[0px_-1px_20px_-1px_#adeac9] transition-all duration-1000 ease-in hover:border border-[#adeac9]'></button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
