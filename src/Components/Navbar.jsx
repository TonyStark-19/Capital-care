// Navbar component
export function Navbar() {
    return (
        <div className="w-full px-30 py-4 flex flex-row justify-between
        bg-white border-2 border-b-gray-300 fixed z-4">
            <div className="flex flex-row items-center gap-2 cursor-pointer">
                <img className="w-12" src="images\logo.png" alt="logo"></img>
                <div className="text-[18px] font-semibold">Capital Care Finance Company</div>
            </div>

            <ul className="flex flex-row items-center gap-8 text-[17px]">
                <li className="cursor-pointer font-semibold text-gray-700 hover:text-blue-700">Home</li>
                <li className="cursor-pointer font-semibold text-gray-700 hover:text-blue-700">About</li>
                <li className="cursor-pointer font-semibold text-gray-700 hover:text-blue-700">Services</li>
                <li className="cursor-pointer font-semibold text-gray-700 hover:text-blue-700">Contact</li>
            </ul>
        </div>
    )
}