// react icons
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

// footer section
export function Footer() {
    return (
        <div className="py-12 px-5 bg-blue-950 text-white">
            <div className="flex flex-row justify-evenly">
                <div className="flex flex-col">
                    <h4 className="text-[18px] font-bold mb-4">Capital Care Finance Company</h4>
                    <p>Your trusted partner in financial solutions.</p>
                </div>

                <div className="flex flex-col">
                    <h4 className="text-[18px] font-bold mb-4">Quick Links</h4>
                    <ul>
                        <li className="text-[16px] mb-2 cursor-pointer">Home</li>
                        <li className="text-[16px] mb-2 cursor-pointer">About</li>
                        <li className="text-[16px] mb-2 cursor-pointer">Services</li>
                        <li className="text-[16px] mb-2 cursor-pointer">Contact</li>
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
                        <div className="border-2 border-white rounded-[50%] p-2 hover:bg-white hover:text-[#39559e] 
                        cursor-pointer">
                            <FaFacebook className="text-xl" />
                        </div>

                        <div className="border-2 border-white rounded-[50%] p-2 hover:bg-white hover:text-[#e1306c] 
                        cursor-pointer">
                            <FaInstagram className="text-xl" />
                        </div>

                        <div className="border-2 border-white rounded-[50%] p-2 hover:bg-white hover:text-[#2980b0] 
                        cursor-pointer">
                            <FaLinkedin className="text-xl" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-[16px] text-align w-full pt-12">
                <p className="text-center">© 2025 Capital Care Finance Company. All rights reserved.</p>
            </div>
        </div>
    )
} 