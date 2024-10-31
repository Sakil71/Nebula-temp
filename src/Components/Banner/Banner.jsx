import { useState } from "react";
import { IoArrowForwardSharp } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import ParticlesJs from "../../Particles/ParticlesJs";

const Banner = () => {
    const [servicesButton, setServicesButton] = useState(false);
    const [getInTouchButton, setGetInTouchButton] = useState(false);
    return (
        <div className="relative h-[400px] flex flex-col items-center justify-center">
            <ParticlesJs></ParticlesJs>
            {/* Central Blob Container */}
            <div className="absolute flex justify-center items-center w-1/2 h-1/2">
                <div className="absolute  w-64 h-64 bg-red-600 rounded-full mix-blend-screen filter blur-xl opacity-80 animate-blob"></div>
                <div className="absolute top-5 w-64 h-64 bg-green-500 rounded-full mix-blend-screen filter blur-xl opacity-80 animate-blob animation-delay-2000"></div>
                <div className="absolute right-32 w-64 h-64 bg-red-500 rounded-full mix-blend-screen filter blur-xl opacity-80 animate-blob animation-delay-6000"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center w-full text-center text-white space-y-4">
                <h1 className="text-5xl md:text-8xl font-bold">Driving growth with AI.</h1>
                <p className="hidden md:block text-lg">We craft workflow automations and bespoke AI solutions for forward-thinking companies.</p>

                <div className=" flex items-center gap-5">

                    <button className="overflow-hidden px-6 border rounded-md border-gray-500 bg-transparent"
                        onMouseEnter={() => setServicesButton(true)}
                        onMouseLeave={() => setServicesButton(false)}
                    >
                        <h1 className={`relative transition-transform duration-500 ${servicesButton ? 'translate-y-[-30px]' : 'translate-y-3'}`}>Our Services</h1>
                        <h1 className={`relative transition-transform duration-500 ${servicesButton ? 'translate-y-[-15px]' : 'translate-y-10'}`}>Our Services</h1>
                    </button>


                    <button className="overflow-hidden px-6 border rounded-md border-gray-500 bg-transparent"
                        onMouseEnter={() => setGetInTouchButton(true)}
                        onMouseLeave={() => setGetInTouchButton(false)}
                    >
                        <h1 className={`relative transition-transform duration-500 flex items-center gap-3 ${getInTouchButton ? 'translate-y-[-30px]' : 'translate-y-3'}`}>
                            <p>Get in touch</p>
                            <MdArrowOutward className='text-green-200 transition-transform duration-500 group-hover:rotate-45 ease-in' />
                        </h1>
                        <h1 className={`relative transition-transform duration-500 flex items-center gap-3 ${getInTouchButton ? 'translate-y-[-15px]' : 'translate-y-10'}`}>
                            <p>Get in touch</p>
                            <IoArrowForwardSharp className='text-green-200 transition-transform duration-500 group-hover:rotate-45 ease-in' />
                        </h1>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;


