// import link
import { Link } from 'react-scroll';

// react icons
import { IoMenu } from "react-icons/io5";

// Navbar component
export function Navbar() {
    // quick links
    const quickLinks = [
        { link: "home", name: "Home" },
        { link: "about", name: "About" },
        { link: "services", name: "Services" },
        { link: "contact", name: "Contact" }
    ];

    return (
        <div className="w-full py-4 flex flex-row justify-between min-a:px-30 max-a:px-10 max-b:px-6 max-f:px-4
        bg-white border-2 border-b-gray-300 top-0 fixed z-40">
            <div className="flex flex-row items-center min-f:gap-2 max-f:gap-0 cursor-pointer">
                <img className="min-f:w-12 max-f:w-11" src="images/logo.png" alt="logo"></img>
                <div className="min-f:text-[18px] max-f:text-[16px] font-semibold">Capital Care Finance Company</div>
            </div>

            <ul className="flex flex-row items-center min-a:text-[17px] max-a:text-[17px] max-b:text-[16px] min-a:gap-8 
            max-a:gap-8 max-c:gap-6 max-e:hidden">
                {quickLinks.map((quickLink, idx) => (
                    <li
                        key={idx}>
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

            <button className="text-4xl text-black min-e:hidden cursor-pointer">
                <IoMenu />
            </button>
        </div>
    )
}