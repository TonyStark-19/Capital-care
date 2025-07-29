// import use state
import { useState } from 'react';

// import link
import { Link } from 'react-scroll';

// react icons
import { IoMenu, IoClose } from "react-icons/io5";

// Navbar component
export function Navbar() {
    // usestate for menu toggle
    const [menuOpen, setMenuOpen] = useState(false);

    const quickLinks = [
        { link: "home", name: "Home" },
        { link: "about", name: "About" },
        { link: "services", name: "Services" },
        { link: "contact", name: "Contact" }
    ];

    return (
        <div className="w-full py-4 flex justify-between items-center bg-white border-b-2 border-gray-300 fixed top-0 z-40
        min-a:px-40 max-a:px-6 max-f:px-3">
            {/* logo */}
            <div className="flex items-center gap-2 cursor-pointer max-f:mr-2.5">
                <img className="min-d:w-12 max-d:w-10" src="images/logo.png" alt="logo" />
                <div className="text-[18px] font-semibold">Capital Care Finance Company</div>
            </div>

            {/* Desktop Links */}
            <ul className="hidden md:flex items-center gap-8 text-[17px]">
                {quickLinks.map((quickLink, idx) => (
                    <li key={idx}>
                        <Link
                            to={quickLink.link}
                            smooth={true}
                            duration={500}
                            offset={-60}
                            className="cursor-pointer font-semibold text-gray-700 hover:text-blue-700"
                        >
                            {quickLink.name}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Mobile Menu Icon */}
            <button
                className="md:hidden text-3xl text-black"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <IoClose /> : <IoMenu />}
            </button>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute min-d:top-[70px] max-d:top-[65px] right-0 w-full bg-white shadow-md z-30 md:hidden">
                    <ul className="flex flex-col items-start py-5 px-6 space-y-4">
                        {quickLinks.map((quickLink, idx) => (
                            <li key={idx}>
                                <Link
                                    to={quickLink.link}
                                    smooth={true}
                                    duration={500}
                                    offset={-60}
                                    onClick={() => setMenuOpen(false)} // close menu on click
                                    className="block font-semibold text-gray-700 hover:text-blue-700"
                                >
                                    {quickLink.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}