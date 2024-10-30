import { useState } from "react";
import ToggleButton from "../../Utilities/ToggleButton";

const Process = () => {
    const [isOn, setIsOn] = useState(false);

    return (
        <div className="py-32">
            <h1 className="text-5xl md:text-8xl mb-12">Our <span className="text-green-200">process</span></h1>
            <div className="grid grid-cols-3 gap-4">

                <div className="border border-[#282825] px-7 py-10 rounded-lg w-full h-[450px]">
                    <div className="border border-[#282825] px-5 py-7 rounded-lg flex flex-col gap-5">
                        <div className="border border-[#282825] px-3 py-4 flex rounded-lg gap-5 justify-center items-center">
                            <ToggleButton isOn={isOn} setIsOn={setIsOn}></ToggleButton>
                            <h1>Subscription</h1>
                        </div>
                        <div className="border border-[#282825] px-3 py-4 flex rounded-lg gap-5 justify-center">
                            <button className="border border-gray-700 bg-transparent px-4 py-[3px] rounded-md text-sm">Basic</button>

                            <button className={`${!isOn ? 'bg-[#102B1F] text-green-200 shadow-[0px_-1px_20px_-1px_#292E27]' : ''} border border-gray-700 px-4 py-[3px] rounded-md text-sm`}>Pro</button>

                            <button className="border border-gray-700 bg-transparent px-4 py-[3px] rounded-md text-sm">Custrom</button>
                        </div>
                    </div>

                    <h1 className="text-4xl mt-16 mb-2"><span className="text-green-200">01.</span> Subscribe</h1>
                    <p className="opacity-70">Choose your preferred plan to start and cancel or pause at anytime you like. So you&apos;re as flexible as your business&apos; needs.</p>
                </div>
            </div>

        </div>
    );
};

export default Process;