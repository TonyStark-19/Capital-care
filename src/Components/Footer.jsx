// react icons
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

// import link
import { Link } from 'react-scroll';

// footer section
export function Footer() {
    return (
        <div className="pt-12 pb-8 px-5 bg-blue-950 text-white">
            <div className="flex flex-row justify-evenly">
                <div className="flex flex-col">
                    <h4 className="text-[18px] font-bold mb-4">Capital Care Finance Company</h4>
                    <p>Your trusted partner in financial solutions.</p>
                </div>

                <div className="flex flex-col">
                    <h4 className="text-[18px] font-bold mb-4">Quick Links</h4>
                    <ul>
                        <li className="text-[16px] mb-2 cursor-pointer hover:ml-1 duration-300">
                            <Link
                                to="home"
                                smooth={true}
                                duration={500}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="text-[16px] mb-2 cursor-pointer hover:ml-1 duration-300">
                            <Link
                                to="about"
                                smooth={true}
                                duration={500}
                                offset={-60}
                            >
                                About
                            </Link>
                        </li>
                        <li className="text-[16px] mb-2 cursor-pointer hover:ml-1 duration-300">
                            <Link
                                to="services"
                                smooth={true}
                                duration={500}
                                offset={-60}
                            >
                                Services
                            </Link>
                        </li>
                        <li className="text-[16px] mb-2 cursor-pointer hover:ml-1 duration-300">
                            <Link
                                to="contact"
                                smooth={true}
                                duration={500}
                                offset={-60}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col">
                    <h4 className="text-[18px] font-bold mb-4">Services</h4>
                    <ul>
                        <li className="text-[16px] mb-2 cursor-pointer">Home Loan</li>
                        <li className="text-[16px] mb-2 cursor-pointer">Business Loan</li>
                        <li className="text-[16px] mb-2 cursor-pointer">Personal Loan</li>
                        <li className="text-[16px] mb-2 cursor-pointer">Insurance</li>
                    </ul>
                </div>

                <div className="flex flex-col">
                    <h4 className="text-[18px] font-bold mb-4">Connect With Us</h4>

                    <div className="flex flex-row gap-3">
                        <a href="https://www.facebook.com/share/18heUSmytm/?mibextid=wwXIfr">
                            <div className="border-2 border-white rounded-[50%] p-2 hover:bg-white hover:text-[#39559e] 
                        cursor-pointer duration-300">
                                <FaFacebook className="text-xl" />
                            </div>
                        </a>

                        <a href="https://www.instagram.com/ccfcfirst?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                            <div className="border-2 border-white rounded-[50%] p-2 hover:bg-white hover:text-[#e1306c] 
                        cursor-pointer duration-300">
                                <FaInstagram className="text-xl" />
                            </div>
                        </a>

                        <a href="https://www.linkedin.com/company/capital-care-finance-company/posts/?feedView=all">
                            <div className="border-2 border-white rounded-[50%] p-2 hover:bg-white hover:text-[#2980b0] 
                        cursor-pointer duration-300">
                                <FaLinkedin className="text-xl" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div className="text-[16px] text-align w-full pt-12">
                <p className="text-center">© 2025 Capital Care Finance Company. All rights reserved.</p>
            </div>
        </div>
    )
} 