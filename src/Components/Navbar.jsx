// import link
import { Link } from 'react-scroll';

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
        <div className="w-full px-30 py-4 flex flex-row justify-between
        bg-white border-2 border-b-gray-300 top-0 fixed z-40">
            <div className="flex flex-row items-center gap-2 cursor-pointer">
                <img className="w-12" src="images/logo.png" alt="logo"></img>
                <div className="text-[18px] font-semibold">Capital Care Finance Company</div>
            </div>

            <ul className="flex flex-row items-center gap-8 text-[17px]">
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
        </div>
    )
}