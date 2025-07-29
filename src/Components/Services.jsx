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

// import use effect
import { useEffect } from "react";

// AOS animations
import AOS from 'aos';
import 'aos/dist/aos.css';

// Services section
export function Services() {
    // AOS animations
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    // box content
    const boxes = [
        {
            link: "/service1",
            icon: <IoHomeOutline className="text-blue-800 text-3xl mb-6" />,
            name: "Home Loan",
            description: "Get your dream home with our competitive home loan solutions. Easy approvals and flexible repayment options.",
            btn: "Learn More →"
        },
        {
            link: "/service2",
            icon: <FiUsers className="text-blue-800 text-3xl mb-6" />,
            name: "Education Loan",
            description: "Simple and affordable funding to support your higher education journey.",
            btn: "Learn More →"
        },
        {
            link: "/service3",
            icon: <PiSuitcase className="text-blue-800 text-3xl mb-6" />,
            name: "Business Loan",
            description: "Empower your business growth with our tailored business loan solutions and competitive rates.",
            btn: "Learn More →"
        },
        {
            link: "/service4",
            icon: <FiUser className="text-blue-800 text-3xl mb-6" />,
            name: "Personal Loan",
            description: "Quick personal loans for your immediate needs with minimal documentation and fast approval.",
            btn: "Learn More →"
        },
        {
            link: "/service5",
            icon: <FiCreditCard className="text-blue-800 text-3xl mb-6" />,
            name: "Gold Loan",
            description: "Instant cash against your gold with low interest.",
            btn: "Learn More →"
        },
        {
            link: "/service6",
            icon: <FaCar className="text-blue-800 text-3xl mb-6" />,
            name: "Car Loan",
            description: "Drive your dream car with our affordable car loan options and quick processing.",
            btn: "Learn More →"
        },
        {
            link: "/service7",
            icon: <FiShield className="text-blue-800 text-3xl mb-6" />,
            name: "Credit Loan",
            description: "Easy, rewarding, and secure spending with flexible repayments.",
            btn: "Learn More →"
        },
        {
            link: "/service8",
            icon: <IoHomeOutline className="text-blue-800 text-3xl mb-6" />,
            name: "Loan Against Property",
            description: "Unlock your property's value with tailored loan solutions.",
            btn: "Learn More →"
        },
        {
            link: "/service9",
            icon: <FaStarOfLife className="text-blue-800 text-3xl mb-6" />,
            name: "Life Insurance",
            description: "Protect Your Loved One's Future With Our Reliable Life Insurance Plans.",
            btn: "Starting from ₹ 450/month* →"
        },
        {
            link: "/service10",
            icon: <MdHealthAndSafety className="text-blue-800 text-3xl mb-6" />,
            name: "Health Insurance",
            description: "Ensuring Your Health Is In Good Hands - Explore Our Top-notch Insurance Solutions.",
            btn: "Starting from ₹ 450/month* →"
        },
        {
            link: "/service11",
            icon: <SlCreditCard className="text-blue-800 text-3xl mb-6" />,
            name: "General Insurance",
            description: "Insurance Made Easy - Your Protection, Our Expertise.",
            btn: "Starting from ₹ 450/month* →"
        }
    ];

    return (
        <div className="py-12 px-4 bg-gray-50" id="services">
            <h1 className="text-black font-bold text-center min-a:mb-12 max-a:mb-10 max-b:mb-6 min-a:text-4xl max-a:text-4xl
            max-c:text-3xl max-c:mb-3 max-d:text-[26px] max-d:mb-0" data-aos="fade-up" data-aos-duration="1000">Our Services</h1>

            <div className="flex flex-row flex-wrap justify-center w-full min-c:gap-8 max-c:gap-4">
                {boxes.map((box, idx) => (
                    <Link
                        to={box.link}
                        key={idx}
                        className="p-8 min-e:w-[300px] max-e:w-[280px] max-sm:w-full rounded-lg shadow-lg hover:shadow-2xl
                        cursor-pointer duration-400" data-aos="fade-up" data-aos-duration="1000">
                        <div>
                            {box.icon}
                            <h3 className="text-2xl text-blue-800 mb-4 font-bold">{box.name}</h3>
                            <p className="text-[16px] tracking-wider text-gray-700 mb-6">{box.description}</p>
                            <button className="text-[14px] text-blue-800 font-bold">{box.btn}</button>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}