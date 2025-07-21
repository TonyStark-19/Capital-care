// react icons
import { IoHomeOutline } from "react-icons/io5";
import { FiUsers, FiUser, FiCreditCard, FiShield } from "react-icons/fi";
import { PiSuitcase } from "react-icons/pi";
import { FaCar } from "react-icons/fa";
import { FaStarOfLife } from "react-icons/fa6";
import { MdHealthAndSafety } from "react-icons/md";
import { SlCreditCard } from "react-icons/sl";

// import link
import { Link } from 'react-router-dom';

// Services section
export function Services() {
    return (
        <div className="py-12 px-4 bg-gray-50" id="services">
            <h1 className="text-black text-4xl font-bold text-center mb-12">Our Services</h1>

            <div className="flex flex-row flex-wrap justify-center w-full gap-8">
                <Link to="/service1" className="p-8 w-[20%] rounded-lg shadow-lg hover:shadow-2xl cursor-pointer duration-400">
                    <div>
                        <IoHomeOutline className="text-blue-800 text-3xl mb-6" />
                        <h3 className="text-2xl text-blue-800 mb-4 font-bold">Home Loan</h3>
                        <p className="text-[16px] tracking-wider text-gray-700 mb-6">Get your dream home with our competitive
                            home loan solutions. Easy approvals and flexible repayment options.</p>
                        <button className="text-[14px] text-blue-800 font-bold">Learn More →</button>
                    </div>
                </Link>

                <Link to="/service2" className="p-8 w-[20%] rounded-lg shadow-lg hover:shadow-2xl cursor-pointer duration-400">
                    <div>
                        <FiUsers className="text-blue-800 text-3xl mb-6" />
                        <h3 className="text-2xl text-blue-800 mb-4 font-bold">Education Loan</h3>
                        <p className="text-[16px] tracking-wider text-gray-700 mb-6">Simple and affordable funding to support
                            your higher education journey.</p>
                        <button className="text-[14px] text-blue-800 font-bold">Learn More →</button>
                    </div>
                </Link>

                <Link to="/service3" className="p-8 w-[20%] rounded-lg shadow-lg hover:shadow-2xl cursor-pointer duration-400">
                    <div>
                        <PiSuitcase className="text-blue-800 text-3xl mb-6" />
                        <h3 className="text-2xl text-blue-800 mb-4 font-bold">Business Loan</h3>
                        <p className="text-[16px] tracking-wider text-gray-700 mb-6">Empower your business growth with our
                            tailored business loan solutions and competitive rates.</p>
                        <button className="text-[14px] text-blue-800 font-bold">Learn More →</button>
                    </div>
                </Link>

                <Link to="/service4" className="p-8 w-[20%] rounded-lg shadow-lg hover:shadow-2xl cursor-pointer duration-400">
                    <div>
                        <FiUser className="text-blue-800 text-3xl mb-6" />
                        <h3 className="text-2xl text-blue-800 mb-4 font-bold">Personal Loan</h3>
                        <p className="text-[16px] tracking-wider text-gray-700 mb-6">Quick personal loans for your immediate needs
                            with minimal documentation and fast approval.</p>
                        <button className="text-[14px] text-blue-800 font-bold">Learn More →</button>
                    </div>
                </Link>

                <Link to="/service5" className="p-8 w-[20%] rounded-lg shadow-lg hover:shadow-2xl cursor-pointer duration-400">
                    <div>
                        <FiCreditCard className="text-blue-800 text-3xl mb-6" />
                        <h3 className="text-2xl text-blue-800 mb-4 font-bold">Gold Loan</h3>
                        <p className="text-[16px] tracking-wider text-gray-700 mb-6">Instant cash against your gold with
                            low interest.</p>
                        <button className="text-[14px] text-blue-800 font-bold">Learn More →</button>
                    </div>
                </Link>

                <Link to="/service6" className="p-8 w-[20%] rounded-lg shadow-lg hover:shadow-2xl cursor-pointer duration-400">
                    <div>
                        <FaCar className="text-blue-800 text-3xl mb-6" />
                        <h3 className="text-2xl text-blue-800 mb-4 font-bold">Car Loan</h3>
                        <p className="text-[16px] tracking-wider text-gray-700 mb-6">Drive your dream car with our affordable
                            car loan options and quick processing.</p>
                        <button className="text-[14px] text-blue-800 font-bold">Learn More →</button>
                    </div>
                </Link>

                <Link to="/service7" className="p-8 w-[20%] rounded-lg shadow-lg hover:shadow-2xl cursor-pointer duration-400">
                    <div>
                        <FiShield className="text-blue-800 text-3xl mb-6" />
                        <h3 className="text-2xl text-blue-800 mb-4 font-bold">Credit Card</h3>
                        <p className="text-[16px] tracking-wider text-gray-700 mb-6">Easy, rewarding, and secure spending
                            with flexible repayments.</p>
                        <button className="text-[14px] text-blue-800 font-bold">Learn More →</button>
                    </div>
                </Link>

                <Link to="/service8" className="p-8 w-[20%] rounded-lg shadow-lg hover:shadow-2xl cursor-pointer duration-400">
                    <div>
                        <IoHomeOutline className="text-blue-800 text-3xl mb-6" />
                        <h3 className="text-2xl text-blue-800 mb-4 font-bold">Loan Against Property</h3>
                        <p className="text-[16px] tracking-wider text-gray-700 mb-6">Unlock your property's value with tailored
                            loan solutions..</p>
                        <button className="text-[14px] text-blue-800 font-bold">Learn More →</button>
                    </div>
                </Link>

                <div className="p-8 w-[20%] rounded-lg shadow-lg hover:shadow-2xl cursor-pointer duration-400">
                    <FaStarOfLife className="text-blue-800 text-3xl mb-6" />
                    <h3 className="text-2xl text-blue-800 mb-4 font-bold">Life Insurance</h3>
                    <p className="text-[16px] tracking-wider text-gray-700 mb-6">Protect Your Loved One's Future With
                        Our Reliable Life Insurance Plans.</p>
                    <button className="text-[14px] text-blue-800 font-bold">Starting from ₹ 450/month* →</button>
                </div>

                <div className="p-8 w-[20%] rounded-lg shadow-lg hover:shadow-2xl cursor-pointer duration-400">
                    <MdHealthAndSafety className="text-blue-800 text-3xl mb-6" />
                    <h3 className="text-2xl text-blue-800 mb-4 font-bold">Health Insurance</h3>
                    <p className="text-[16px] tracking-wider text-gray-700 mb-6">Ensuring Your Health Is In Good Hands
                        - Explore Our Top-notch Insurance Solutions.</p>
                    <button className="text-[14px] text-blue-800 font-bold">Starting from ₹ 450/month* →</button>
                </div>

                <div className="p-8 w-[20%] rounded-lg shadow-lg hover:shadow-2xl cursor-pointer duration-400">
                    <SlCreditCard className="text-blue-800 text-3xl mb-6" />
                    <h3 className="text-2xl text-blue-800 mb-4 font-bold">General Insurance</h3>
                    <p className="text-[16px] tracking-wider text-gray-700 mb-6">Insurance Made Easy - Your Protection,
                        Our Expertise.</p>
                    <button className="text-[14px] text-blue-800 font-bold">Starting from ₹ 450/month* →</button>
                </div>
            </div>
        </div>
    )
}