import { useEffect, useRef, useState } from "react";
import ToggleButton from "../../Utilities/ToggleButton";
import { FaGithub, FaStripe } from "react-icons/fa";
import { SlSocialSkype } from "react-icons/sl"; // Make sure this icon is imported
import Marquee from "react-fast-marquee";
import { PiCursor, PiOpenAiLogoFill } from "react-icons/pi";
import Globe from 'react-globe.gl';

const Process = () => {
    const [isOn, setIsOn] = useState(false);
    // eslint-disable-next-line react/jsx-key
    const requestIcons1 = [<FaGithub />, <FaStripe />, <SlSocialSkype />, <FaGithub />, <PiOpenAiLogoFill />, <FaGithub />];
    // eslint-disable-next-line react/jsx-key
    const requestIcons2 = [<FaGithub />, <FaStripe />, <SlSocialSkype />, <FaGithub />, <FaGithub />, <FaGithub />];

    const globeRef = useRef();

    useEffect(() => {
        if (globeRef.current) {
            globeRef.current.controls().autoRotate = true;       // Enable auto-rotation
            globeRef.current.controls().autoRotateSpeed = 2;   // Set rotation speed
        }
    }, []);

    return (
        <div className="py-32">
            <h1 className="text-5xl md:text-8xl mb-12">Our <span className="text-green-200">process</span></h1>
            {/* Process */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
                {/* div 1 */}
                <div data-aos="fade-right" className="bg-[#080807] border border-[#282825] px-4 md:px-7 py-10 rounded-lg w-full h-[500px]">
                    <div className="border border-[#282825] md:px-5 px-3 py-7 rounded-lg flex flex-col gap-5">
                        <div className="border border-[#282825] px-3 py-4 flex rounded-lg gap-5 justify-center items-center">
                            <ToggleButton isOn={isOn} setIsOn={setIsOn} />
                            <h1>Subscription</h1>
                        </div>
                        <div className="border border-[#282825] px-3 py-4 flex rounded-lg gap-5 justify-center">
                            <button className="border border-gray-700 bg-transparent px-4 py-[3px] rounded-md text-sm">Basic</button>
                            <button className={`${!isOn ? 'bg-[#102B1F] text-green-200 shadow-[0px_-1px_20px_-1px_#292E27]' : ''} border border-gray-700 px-4 py-[3px] rounded-md text-sm`}>Pro</button>
                            <button className="border border-gray-700 bg-transparent px-4 py-[3px] rounded-md text-sm">Custom</button>
                        </div>
                    </div>

                    <h1 className="text-4xl mt-16 mb-2"><span className="text-green-200">01.</span> Subscribe</h1>
                    <p className="opacity-70">Choose your preferred plan to start and cancel or pause at anytime you like. So you&apos;re as flexible as your business&apos; needs.</p>
                </div>

                {/* div 2 */}
                <div data-aos="fade-up" className="bg-[#080807] border border-[#282825] px-5 md:px-7 py-10 rounded-lg w-full h-[500px]">
                    <div className="border border-[#282825] px-5 py-6 rounded-lg overflow-hidden">
                        <Marquee className="" speed={15} gradient={true} gradientWidth={30} gradientColor={'black'}>
                            <ul className="flex gap-3 overflow-hidden mb-4 mr-3">
                                {requestIcons1.map((reqIcon, index) => (
                                    <li
                                        className="p-4 flex items-center justify-center rounded-md border border-[#1e4232] text-4xl bg-[#161916] hover:bg-[#183A2A] cursor-pointer"
                                        key={index}
                                    >
                                        {reqIcon}
                                    </li>
                                ))}
                            </ul>
                        </Marquee>
                        <Marquee className="" speed={15} gradient={true} gradientWidth={30} gradientColor={'black'} direction="right">
                            <ul className="flex gap-3 overflow-hidden mr-3">
                                {requestIcons2.map((reqIcon, index) => (
                                    <li
                                        className="p-4 flex items-center justify-center rounded-md border border-[#1e4232] text-4xl bg-[#161916] hover:bg-[#183A2A] cursor-pointer"
                                        key={index}
                                    >
                                        {reqIcon}
                                    </li>
                                ))}
                            </ul>
                        </Marquee>

                    </div>


                    <h1 className="text-4xl mt-16 mb-2"><span className="text-green-200">02.</span> Request</h1>
                    <p className="opacity-70">Start requesting the workflow-automations and AI applications you need, your developers are right there to transform your ideas into reality.</p>
                </div>

                {/* div 3 */}
                <div data-aos="fade-left" className="bg-[#080807] border border-[#282825] px-4 md:px-7 py-10 rounded-lg w-full h-[500px]">
                    <div className="border border-[#282825] rounded-lg flex flex-col gap-5">
                        <div className="relative w-full h-[200px] overflow-hidden group">
                            {/* Background image */}
                            <div
                                className="absolute  top-5 left-5 w-[90%] h-full  bg-center transition-transform duration-1000 ease-out transform group-hover:translate-y-[-200px] opacity-50"

                            >
                                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus praesentium voluptas, tempore veritatis sint quo ab repellat quia maxime earum iste nobis esse libero nisi rerum mollitia dolore eaque, neque placeat. Illo voluptas molestias ullam eum, rem nobis vel fugit qui pariatur tenetur quam totam architecto quaerat, aliquid a quas necessitatibus! Facere provident laudantium tenetur reprehenderit ipsum amet sint nisi eum dolorem dolore aut, facilis ratione excepturi aspernatur veritatis architecto, neque at maiores minima ea tempora. Mollitia expedita molestiae recusandae iusto quos sapiente deleniti quibusdam. Cum corrupti eveniet mollitia incidunt fugiat aut itaque, placeat debitis. Obcaecati exercitationem ab enim quam.</h1>
                            </div>

                            {/* Centered content */}
                            <div className="relative z-10 flex h-full">
                                <div className="">
                                    <PiCursor className="text-lg text-green-200 transition-transform duration-500 ease-in-out absolute top-12 right-32 transform group-hover:-translate-y-[-25px] group-hover:-translate-x-[10px]" />

                                    <button className="border px-5 text-green-200 py-2 bg-[#102B1F] border-[#3C5B46] rounded-lg text-sm absolute top-16 right-10 transition-transform duration-500 ease-in-out transform group-hover:-translate-y-[-25px] group-hover:-translate-x-[25px]">Tibor B</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h1 className="text-4xl mt-16 mb-2"><span className="text-green-200">03.</span> Build</h1>
                    <p className="opacity-70">Our developers swiftly begin building your custom solutions, prioritising speed without compromising on quality.</p>
                </div>

            </section>

            {/* Test and optimise ,  Become an industry leader*/}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div data-aos="fade-right" className="bg-[#080807] border border-[#282825] px-4 md:px-7 py-10 rounded-lg w-full h-[500px]">
                    <div className="border border-[#282825] rounded-lg flex flex-col gap-5 py-8 justify-center  px-4 md:px-7 ">
                        <div>
                            <h1 className="mb-2 opacity-70">Speed</h1>
                            <div className="relative w-full h-6 border border-[#303b25] rounded-full cursor-pointer group">
                                <div className="absolute bg-[#bad1a5] w-1/4 group-hover:w-1/3 h-4 top-[50%] left-[45%] rounded-r-full bg-gradient-to-r from-black to-transparent translate-y-[-50%] transform md:group-hover:translate-x-[90px] group-hover:translate-x-[56px] duration-1000"></div>
                            </div>
                        </div>
                        <div>
                            <h1 className="mb-2 opacity-70">Security</h1>
                            <div className="relative w-full h-6 border border-[#303b25] rounded-full cursor-pointer group">
                                <div className="absolute bg-[#bad1a5] w-1/4 group-hover:w-1/3 h-4 top-[50%] left-[60%] rounded-r-full bg-gradient-to-r from-black to-transparent translate-y-[-50%] transform md:group-hover:translate-x-[20px] group-hover:translate-x-[12px] duration-1000"></div>
                            </div>
                        </div>
                        <div>
                            <h1 className="mb-2 opacity-70">Accuracy</h1>
                            <div className="relative w-full h-6 border border-[#303b25] rounded-full cursor-pointer group">
                                <div className="absolute bg-[#bad1a5] w-1/4 group-hover:w-1/3 h-4 top-[50%] left-[25%] rounded-r-full bg-gradient-to-r from-black to-transparent translate-y-[-50%] transform md:group-hover:translate-x-[185px] group-hover:translate-x-[105px] duration-1000"></div>
                            </div>
                        </div>

                    </div>

                    <h1 className="text-4xl mt-16 mb-2"><span className="text-green-200">04.</span> Test & optimise</h1>
                    <p className="opacity-70">You either approve or request revisions - we&apos;re dedicated to refining our builds until you&apos;re fully satisfied.</p>
                </div>


                {/* Globe */}
                <div data-aos="fade-left" className="bg-[#080807] border border-[#282825] px-4 md:px-7 py-10 rounded-lg w-full h-[500px]">
                    <div className="border border-[#282825] rounded-lg overflow-hidden">

                        <Globe
                            width={400}
                            height={270}
                            ref={globeRef}
                            globeImageUrl="https://i.ibb.co.com/SNgQJnf/globe.png"
                            enableZoom={false}
                            animateIn={true}
                            backgroundColor="#000000"
                            waitForGlobeReady={false}
                            atmosphereColor="#87A281"
                        />
                    </div>

                    <h1 className="text-4xl mt-16 mb-2"><span className="text-green-200">05.</span>  Become an industry leader</h1>
                    <p className="opacity-70">Continue requesting as many workflow-automations and AI-applications as you wish, and transform your organisation into a worldwide industry leader</p>
                </div>
            </section>
        </div>
    );
};

export default Process;
