// react icons
import { FaFacebook, FaInstagram, FaLinkedin, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoMenu, IoClose } from "react-icons/io5";

// import link
import { Link } from 'react-router-dom';

// import use state
import { useState } from "react";

// service 1 : home loan
export function ServiceOne() {
    return (
        <div className="w-full overflow-x-hidden">
            <Navbar />
            <Header />
            <Info />
            <Footer />
        </div>
    )
}

// Navbar component
export function Navbar() {
    // usestate for menu toggle
    const [menuOpen, setMenuOpen] = useState(false);

    const quickLinks = [
        { name: "Home" },
        { name: "About" },
        { name: "Services" },
        { name: "Contact" }
    ];

    return (
        <div className="w-full py-4 flex justify-between items-center bg-white border-b-2 border-gray-300 fixed top-0 z-40
        min-a:px-40 max-a:px-6 max-f:px-3">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer max-f:mr-2.5">
                <img className="min-d:w-12 max-d:w-10" src="images/logo.png" alt="logo" />
                <Link to="/">
                    <div className="text-[18px] font-semibold">Capital Care Finance Company</div>
                </Link>
            </div>

            {/* Desktop Links */}
            <ul className="hidden md:flex items-center gap-8 text-[17px]">
                {quickLinks.map((quickLink, idx) => (
                    <li
                        key={idx}>
                        <Link
                            to="/"
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
                <div className="absolute top-[70px] right-0 w-full bg-white shadow-md z-30 md:hidden">
                    <ul className="flex flex-col items-start py-5 px-6 space-y-4">
                        {quickLinks.map((quickLink, idx) => (
                            <li key={idx}>
                                <Link
                                    to="/"
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

// header image
export function Header() {
    return (
        <div className='relative min-a:h-120 max-a:h-100 w-full overflow-hidden'>
            <img
                src='images/insurance.jpeg'
                alt='business'
                className="w-full h-full object-cover">
            </img>

            <div className="absolute inset-0 bg-black/55 flex flex-col justify-center items-center min-f:p-8 max-f:p-5
             text-white rounded-lg">
                <h2 className="text-center font-bold mb-2 mt-18 min-a:text-[40px] max-a:text-[35px] max-c:text-[28px] 
                max-f:text-[23px]">The Care of Your Financial Needs</h2>
                <p className="mb-4 text-center min-a:text-[20px] max-a:text-[18px] max-f:text-[16px] max-c:w-[90%]">Your
                    trusted partner in financial solutions, providing seamless services in loans and insurance.</p>
                <Button />
            </div>
        </div>
    )
}

// button component
export function Button() {
    return (
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSe3d9QEIBIzVWMhayLEl6YcKGs5KQxJiu2S1kWynfse4_lM8A/viewform">
            <button className="text-white bg-blue-600 hover:bg-blue-700 shadow-lg hover:scale-105 transition-transform
            rounded-sm uppercase font-bold tracking-wide cursor-pointer min-e:text-[16px] max-e:text-[15px] min-e:px-6 min-e:py-2
            max-e:px-4.5 max-e:py-1.5">Apply</button>
        </a>
    );
}

// information
function Info() {
    // for navigating the options
    const [selectedSection, setSelectedSection] = useState("features");
    // for FAQs
    const [openIndex, setOpenIndex] = useState(null);
    // menu toggle
    const [menuOpen, setMenuOpen] = useState(false);

    // tabs
    const tabs = [
        { id: "features", label: "Features" },
        { id: "eligibility", label: "Eligibility" },
        { id: "documentation", label: "Documentation" },
        { id: "rates", label: "Rates & Fees" },
        { id: "faqs", label: "FAQs" },
    ];

    // loan types
    const loanOptions = [
        {
            title: "Loan for Building Your Home",
            description: "If you own land but need financial backing to construct your residence, this option provides the support required to bring your home to life—from laying the foundation to completing major construction work."
        },
        {
            title: "Loan for Home Expansion",
            description: "Planning to add more space or create an additional floor? Whether it's an annexe, extra room, or structural extension, this loan helps you grow your living space without financial strain."
        },
        {
            title: "Loan for Home Renovation",
            description: "Give your home a fresh look with a renovation loan that finances everything from fixing aging interiors to upgrading lighting, plumbing, and more—enhancing both comfort and aesthetics."
        },
        {
            title: "Housing Loan for NRIs",
            description: "For Non-Resident Indians looking to purchase residential property in India, this loan option offers dedicated support with a streamlined process tailored to overseas applicants."
        }
    ];

    // rates
    const rateRows = [
        { label: "Loan Processing Fees", value: "0.25% to 2% of Loan Amount" },
        { label: "Loan Cancellation", value: "Nill - 5% (according to Bank/NBFC)" },
        { label: "Stamp Duty Charges", value: "As per the Value of the Property and State Tax" },
        { label: "Legal Fees", value: "As per actual" },
        { label: "Penal Charges", value: "Usually 2% per month" },
        { label: "EMI / Cheque Bounce Charges", value: "Approx 500/-" }
    ];

    // FAQ data
    const faqData = [
        {
            question: "How long does the loan approval process take?",
            answer: "Typically, our loan approval process takes 3–7 working days from document submission."
        },
        {
            question: "Can I prepay my home loan?",
            answer: "Yes, you can prepay your home loan with minimal or no prepayment charges."
        },
        {
            question: "What is the maximum loan tenure?",
            answer: "We offer home loans with a maximum tenure of 30 years."
        }
    ];

    return (
        <div className='min-b:w-[80%] max-b:w-full shadow-xl flex flex-row mx-auto relative'>
            {/* Sidebar Tabs */}
            <div className={`min-c:w-70 max-c:w-full py-5 pr-5 bg-gray-100 flex flex-col gap-2.5 z-20 max-c:top-10 max-c:left-0
                max-c:h-full transition-transform duration-300 ease-in-out
                ${menuOpen ? "max-c:translate-x-0" : "max-c:-translate-x-full"} max-c:absolute`}>
                {tabs.map(tab => (
                    <div
                        key={tab.id}
                        onClick={() => {
                            setSelectedSection(tab.id);
                            setMenuOpen(false);
                        }}
                        className={`p-4 text-[17px] cursor-pointer rounded-r-xl duration-200 flex flex-row justify-between
                            items-center group text-blue-800
                            ${selectedSection === tab.id
                                ? "bg-blue-200/70"
                                : "hover:bg-blue-200/70"
                            }`}
                    >
                        {tab.label}
                        <IoIosArrowForward
                            className={`transition-colors
                            ${selectedSection === tab.id ? "text-blue-800" : "text-white group-hover:text-blue-800"}`}
                        />
                    </div>
                ))}
            </div>

            {/* Toggle Button for Sidebar (visible only on small screens) */}
            <button
                className="min-c:hidden text-3xl absolute left-0 top-0 z-20 text-blue-800 bg-gray-200 w-full p-2 flex
                justify-center items-center"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <IoClose /> : <IoMenu />}
            </button>

            {/* Content Section */}
            <div className='w-full min-c:pt-6 max-c:pt-14 pb-8 min-g:px-8 max-g:px-4'>
                {selectedSection === "features" && (
                    <>
                        <h2 className="font-bold text-blue-800 relative after:content-[''] after:block after:w-50 after:h-1
                        after:bg-blue-800 after:mt-1 after:mb-3 after:rounded-full min-g:text-[32px] max-g:text-[26px]
                        min-g:mb-6 max-g:mb-3">About Home Loan</h2>

                        <p className='min-g:text-[18px] max-g:text-[17px] min-g:leading-relaxed min-g:mb-4 max-g:mb-3
                        text-gray-700'>
                            Tailored Housing Finance Solutions to Build, Expand, or Upgrade Your Dream Home.
                        </p>

                        <p className='min-g:text-[18px] max-g:text-[17px] min-g:leading-relaxed min-g:mb-4 max-g:mb-3
                        text-gray-700'>
                            We collaborate with leading financial institutions to provide customized housing finance options
                            with attractive interest rates and manageable repayment plans, designed to suit your specific needs.
                        </p>

                        <div className='mb-4'>
                            {loanOptions.map((item, idx) => (
                                <p key={idx} className='min-g:text-[18px] max-g:text-[17px] min-g:leading-relaxed text-gray-700
                                mb-3'>
                                    <span className='font-semibold text-blue-700'>{item.title}: </span>{item.description}
                                </p>
                            ))}
                        </div>

                        <Item />
                        <Button />
                    </>
                )}

                {selectedSection === "eligibility" && (
                    <>
                        <h2 className="font-bold text-blue-800 relative after:content-[''] after:block after:w-50 after:h-1
                        after:bg-blue-800 after:mt-1 after:mb-3 after:rounded-full min-g:text-[32px] max-g:text-[26px]
                        min-g:mb-6 max-g:mb-3">Eligibility Criteria</h2>

                        <p className='min-g:text-[18px] max-g:text-[17px] min-g:leading-relaxed min-g:mb-4 max-g:mb-3
                        text-gray-700'>To qualify for a home loan with Capital Care Finance Company, you must meet the following
                            criteria:</p>

                        <ul className='list-disc pl-6 min-g:text-[18px] max-g:text-[17px] min-g:leading-relaxed mb-6
                        text-gray-700 space-y-2'>
                            {["Age: 21-65 years", "Employment: Salaried or Self-employed professionals",
                                "Minimum Income: ₹3,00,000 per annum", "Credit Score: 700 or above",
                                "Stable job/business history of at least 2 years"]
                                .map(item => (
                                    <li key={item}>{item}</li>
                                ))}
                        </ul>

                        <Button />
                    </>
                )}

                {selectedSection === "documentation" && (
                    <>
                        <h2 className="font-bold text-blue-800 relative after:content-[''] after:block min-g:after:w-70
                        max-g:after:w-50 after:h-1 after:bg-blue-800 after:mt-1 after:mb-3 after:rounded-full min-g:text-[32px]
                        max-g:text-[26px] min-g:mb-7 max-g:mb-3">Required Documentation</h2>

                        <h3 className='text-xl font-bold mt-5 mb-3 text-blue-700'>For Salaried Individuals:</h3>

                        <ul className='min-f:list-inside list-disc pl-5 space-y-2 min-g:text-[18px] max-g:text-[17px] min-g:mb-4
                        max-g:mb-3 text-gray-700'>
                            {["Identity Proof (Aadhaar/PAN/Passport)", "Address Proof", "Last 3 months' salary slips",
                                "Bank statements for the last 6 months", "Form 16 or Income Tax Returns"]
                                .map(item => (
                                    <li key={item}>{item}</li>
                                ))}
                        </ul>

                        <h3 className='text-xl font-bold mt-5 mb-3 text-blue-700'>For Self-Employed:</h3>

                        <ul className='min-f:list-inside list-disc pl-5 space-y-2 min-g:text-[18px] max-g:text-[17px]
                        text-gray-700 mb-6'>
                            {["Business registration documents", "Income Tax Returns for last 2 years",
                                "Profit & Loss statements", "Business bank statements"]
                                .map(item => (
                                    <li key={item}>{item}</li>
                                ))}
                        </ul>

                        <Button />
                    </>
                )}

                {selectedSection === "rates" && (
                    <>
                        <h2 className="font-bold text-blue-800 relative after:content-[''] after:block after:w-50 after:h-1
                        after:bg-blue-800 after:mt-1 after:mb-3 after:rounded-full min-g:text-[32px] max-g:text-[26px]
                        min-g:mb-6 max-g:mb-5">Rates & Fees</h2>

                        <table className='w-full border text-left text-gray-700 shadow rounded-md overflow-hidden mb-6'>
                            <thead className='bg-blue-100 text-blue-800'>
                                <tr>
                                    <th className='min-g:text-[18px] max-g:text-[17px] px-4 py-3 font-semibold'>Particulars</th>
                                    <th className='min-g:text-[18px] max-g:text-[17px] px-4 py-3 font-semibold'>Charges</th>
                                </tr>
                            </thead>

                            <tbody>
                                {rateRows.map((row, idx) => (
                                    <tr key={idx} className='even:bg-gray-100 hover:bg-gray-200 transition'>
                                        <td className='min-g:text-[18px] max-g:text-[16px] py-2.5 px-4'>{row.label}</td>
                                        <td className='min-g:text-[18px] max-g:text-[16px] py-2.5 px-4'>{row.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <Button />
                    </>
                )}

                {selectedSection === "faqs" && (
                    <>
                        <h2 className="font-bold text-blue-800 relative after:content-[''] after:block min-g:after:w-70
                        max-g:after:w-50 after:h-1 after:bg-blue-800 after:mt-1 after:mb-3 after:rounded-full min-g:text-[32px]
                        max-g:text-[26px] min-g:mb-7 max-g:mb-5">Frequently Asked Questions</h2>

                        <div className="flex flex-col gap-4 mb-6">
                            {faqData.map((faq, index) => (
                                <FAQItem
                                    key={index}
                                    question={faq.question}
                                    answer={faq.answer}
                                    isOpen={openIndex === index}
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                />
                            ))}
                        </div>

                        <Button />
                    </>
                )}
            </div>
        </div >
    )
}

// items div for feature section
export function Item() {
    return (
        <>
            <h3 className='min-g:text-2xl max-g:text-[22px] font-bold min-g:my-6 max-g:my-4 text-blue-800'>
                Why Choose Capital Care Finance Company?</h3>

            <div className='flex flex-wrap gap-4 mb-6'>
                {["Easy Documentation", "Quick Approval", "Higher Loan Amounts", "Flexible Repayment",
                    "Flexible Tenor", "Attractive Interest Rates", "Transparent Process"]
                    .map(item => (
                        <div key={item} className='bg-blue-50 text-blue-800 px-4 py-2 rounded shadow text-[15px] max-f:w-[95%]'>
                            {item}
                        </div>
                    ))}
            </div>
        </>
    )
}

// FAQ item
function FAQItem({ question, answer, isOpen, onClick }) {
    return (
        <div className="rounded-md shadow-md overflow-hidden border border-gray-200">
            <button
                onClick={onClick}
                className="flex justify-between items-center w-full px-5 py-4 bg-blue-50 hover:bg-blue-100 transition-all
                cursor-pointer"
            >
                <h3 className="min-g:text-[17px] max-g:text-[16px] text-left font-semibold text-gray-700">{question}</h3>
                <span>
                    {isOpen ? (
                        <FaChevronUp className="text-gray-700 ml-2.5" />
                    ) : (
                        <FaChevronDown className="text-gray-700 ml-2.5" />
                    )}
                </span>
            </button>

            {isOpen && (
                <div
                    className={`px-5 bg-white text-gray-800 border-t border-gray-200 transition-all duration-300 
                    ease-in-out overflow-hidden ${isOpen ? 'max-h-[300px] py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
                >
                    {answer}
                </div>
            )}
        </div>
    );
}

// footer section
export function Footer() {
    // quick links
    const quickLinks = [
        { name: "Home" },
        { name: "About" },
        { name: "Services" },
        { name: "Contact" }
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
                            <li className="text-[16px] mb-2 cursor-pointer duration-300"
                                key={idx}>
                                <Link
                                    to="/"
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
                            <li key={idx} className="text-[16px] mb-2 cursor-pointer">
                                <a href={serviceLink.link}>{serviceLink.name}</a>
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

            <div className="text-[16px] text-align w-full pt-12">
                <p className="text-center">© 2025 Capital Care Finance Company. All rights reserved.</p>
            </div>
        </div>
    )
} 