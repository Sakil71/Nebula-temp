import { CgMenuGridO } from "react-icons/cg";
import { PiOpenAiLogoFill } from "react-icons/pi";
import { SiAirtable, SiFramer } from "react-icons/si";

const Services = () => {
    return (
        <section className="py-32">
            <h1 className="text-5xl md:text-8xl mb-12">Our <span className="text-green-200">services</span></h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div data-aos="fade-right" className="bg-[#080807] border border-[#282825] px-4 md:px-5 py-10 rounded-lg w-full h-[620px]">
                    <div className="border border-[#282825] rounded-lg flex flex-col gap-1 py-8 justify-center px-3 md:px-5 ">
                        <div className="flex justify-between items-center border border-[#282825] rounded-lg py-2 px-4">
                            <div className="flex items-center gap-4">
                                <SiFramer className="text-xl border border-[#23533d] w-12 h-12 rounded-md p-4 bg-[#102B1F]" />
                                <div>
                                    <h1 className="text-green-200 text-sm">Framer</h1>
                                    <p className="text-sm opacity-50">New contact form entry</p>
                                </div>
                            </div>
                            <button className="opacity-50"><CgMenuGridO /></button>
                        </div>

                        <div className="w-full flex justify-center">
                            <button className="border rounded-full text-green-200 border-[#63b08d] w-4 h-4 bg-[#23533d] flex justify-center items-center text-xs">+</button>
                        </div>

                        <div className="flex justify-between items-center border border-[#282825] rounded-lg py-2 px-4">
                            <div className="flex items-center gap-4">
                                <SiAirtable className="text-xl border border-[#23533d] w-12 h-12 rounded-md p-4 bg-[#102B1F]" />
                                <div>
                                    <h1 className="text-green-200 text-sm">Airtable</h1>
                                    <p className="text-sm opacity-50">Add data to Airtable</p>
                                </div>
                            </div>
                            <button className="opacity-50"><CgMenuGridO /></button>
                        </div>

                        <div className="w-full flex justify-center">
                            <button className="border rounded-full text-green-200 border-[#63b08d] w-4 h-4 bg-[#23533d] flex justify-center items-center text-xs">+</button>
                        </div>

                        <div className="flex justify-between items-center border border-[#282825] rounded-lg py-2 px-4">
                            <div className="flex items-center gap-4">
                                <PiOpenAiLogoFill className="text-xl border border-[#23533d] w-12 h-12 rounded-md p-[15px] bg-[#102B1F]" />
                                <div>
                                    <h1 className="text-green-200 text-sm">OpenAI</h1>
                                    <p className="text-sm opacity-50">Write welcome message</p>
                                </div>
                            </div>
                            <button className="opacity-50"><CgMenuGridO /></button>
                        </div>
                    </div>

                    <h1 className="text-4xl mt-16 mb-2"> Workflow automations</h1>
                    <p className="opacity-70">We automate your workflows by connecting your favourite applications. Boosting efficiency and enhancing productivity.</p>
                </div>
            </div>
        </section>
    );
};

export default Services;