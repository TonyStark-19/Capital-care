// react icons
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

// import link
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

// footer section
export function Footer() {
    // quick links
    const quickLinks = [
        { link: "home", name: "Home" },
        { link: "about", name: "About" },
        { link: "services", name: "Services" },
        { link: "contact", name: "Contact" }
    ];

    // service links
    const serviceLinks = [
        { link: "/service1", name: "Home Loan" },
        { link: "/service3", name: "Business Loan" },
        { link: "/service4", name: "Personal Loan" },
        { link: "/service9", name: "Insurance" }
    ];

    // social links
    const socialLinks = [
        {
            link: "https://www.facebook.com/share/18heUSmytm/?mibextid=wwXIfr",
            icon: <FaFacebook className="text-xl" />,
            hover: "hover:text-[#39559e]"
        },
        {
            link: "https://www.instagram.com/ccfcfirst?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
            icon: <FaInstagram className="text-xl" />,
            hover: "hover:text-[#e1306c]"
        },
        {
            link: "https://www.linkedin.com/company/capital-care-finance-company/posts/?feedView=all",
            icon: <FaLinkedin className="text-xl" />,
            hover: "hover:text-[#2980b0]"
        }
    ];

    return (
        <div className="pb-8 px-5 bg-blue-950 text-white min-e:pt-12 max-e:pt-8">
            <div className="min-c:flex min-c:flex-row min-c:justify-evenly max-c:grid max-c:grid-cols-2 max-c:gap-6 
            max-f:grid-cols-1 max-f:gap-4">
                <div className="flex flex-col">
                    <h4 className="text-[18px] font-bold mb-4">Capital Care Finance Company</h4>
                    <p>Your trusted partner in financial solutions.</p>
                </div>

                <div className="flex flex-col">
                    <h4 className="text-[18px] font-bold mb-4">Quick Links</h4>
                    <ul>
                        {quickLinks.map((quickLink, idx) => (
                            <li className="text-[16px] mb-2 cursor-pointer text-gray-100 duration-300 hover:underline"
                                key={idx}>
                                <Link
                                    to={quickLink.link}
                                    smooth={true}
                                    duration={500}
                                    offset={-60}
                                >
                                    {quickLink.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col">
                    <h4 className="text-[18px] font-bold mb-4">Services</h4>
                    <ul>
                        {serviceLinks.map((serviceLink, idx) => (
                            <li key={idx} className="text-[16px] mb-2 cursor-pointer hover:underline">
                                <RouterLink to={serviceLink.link}>{serviceLink.name}</RouterLink>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col">
                    <h4 className="text-[18px] font-bold mb-4">Connect With Us</h4>

                    <div className="flex flex-row gap-3">
                        {socialLinks.map((socialLink, idx) => (
                            <a href={socialLink.link} key={idx} target="_blank" rel="noopener noreferrer">
                                <div className={`border-2 border-white rounded-[50%] p-2 hover:bg-white ${socialLink.hover} 
                                cursor-pointer duration-300`}>
                                    {socialLink.icon}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="text-[16px] w-full pt-12">
                <p className="text-center">© 2025 Capital Care Finance Company. All rights reserved.</p>
            </div>
        </div>
    )
}