/* eslint-disable react/prop-types */
const ToggleButton = ({ setIsOn, isOn }) => {
    const toggleSwitch = () => {
        setIsOn(!isOn);
    };

    return (
        <button
            onClick={toggleSwitch}
            className={`relative inline-flex items-center h-10 rounded-full w-20 border border-[#282825]`}
        >
            {/* Display "Off" when isOn is false and "On" when true */}
            <span className={`absolute left-2  transition-opacity duration-0  ${isOn ? 'text-gray-400' : 'translate-x-0 opacity-0'}`}>
                Off
            </span>
            <span className={`absolute right-2  transition-opacity duration-0  ${isOn ? 'opacity-0' : 'translate-x-0 text-green-200'}`}>
                On
            </span>
            <span
                className={`transform transition-all duration-500 ease-in-out absolute left-1 top-1 w-7 h-7 rounded-full z-20 ${isOn ? 'translate-x-11 bg-gray-400' : 'translate-x-0 bg-green-300'}`}
            />
        </button>
    );
};

export default ToggleButton;
