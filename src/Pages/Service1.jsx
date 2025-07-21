// react icons
import { FaFacebook, FaInstagram, FaLinkedin, FaChevronDown, FaChevronUp } from "react-icons/fa";

// import link
import { Link } from 'react-router-dom';

// import use state
import { useState } from "react";

// service 1 : home loan
export function ServiceOne() {
    return (
        <>
            <Navbar />
            <Header />
            <Info />
            <Footer />
        </>
    )
}

// Navbar component
export function Navbar() {
    return (
        <div className="w-full px-30 py-4 flex flex-row justify-between
        bg-white border-2 border-b-gray-300 top-0 fixed z-40">
            <div className="flex flex-row items-center gap-2 cursor-pointer">
                <img className="w-12" src="images\logo.png" alt="logo"></img>
                <div className="text-[18px] font-semibold">Capital Care Finance Company</div>
            </div>

            <ul className="flex flex-row items-center gap-8 text-[17px]">
                <li>
                    <Link
                        to="/"
                        className="cursor-pointer font-semibold text-gray-700 hover:text-blue-700"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/"
                        className="cursor-pointer font-semibold text-gray-700 hover:text-blue-700"
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        to="/"
                        className="cursor-pointer font-semibold text-gray-700 hover:text-blue-700"
                    >
                        Services
                    </Link>
                </li>
                <li>
                    <Link
                        to="/"
                        className="cursor-pointer font-semibold text-gray-700 hover:text-blue-700"
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    )
}

// header image
export function Header() {
    return (
        <div className='relative h-120 w-full overflow-hidden'>
            <img
                src='images/insurance.jpeg'
                alt='business'
                className="w-full h-full object-cover">
            </img>

            <div className="absolute inset-0 bg-black/55 flex flex-col justify-center items-center
            p-8 text-white rounded-lg">
                <h2 className="text-[40px] font-bold mb-2 mt-18">The Care of Your Financial Needs</h2>
                <p className="mb-4 text-[20px]">Your trusted partner in financial solutions, providing seamless services
                    in loans and insurance.</p>
                <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded transition 
                        cursor-pointer text-[16px] uppercase font-bold">
                    Apply
                </button>
            </div>
        </div>
    )
}

// button component
export function Button() {
    return (
        <button className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 shadow-md hover:scale-105 
        transition-transform rounded-lg text-[16px] uppercase font-bold tracking-wide">
            Apply
        </button>
    );
}

// information
function Info() {
    // for navigating the options
    const [selectedSection, setSelectedSection] = useState("features");
    // for FAQs
    const [openIndex, setOpenIndex] = useState(null);

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

    // tabs
    const tabs = [
        { id: "features", label: "Features" },
        { id: "eligibility", label: "Eligibility" },
        { id: "documentation", label: "Documentation" },
        { id: "rates", label: "Rates & Fees" },
        { id: "faqs", label: "FAQs" },
    ];

    return (
        <div className='w-[80%] shadow-xl flex flex-row mx-auto'>
            {/* Sidebar Tabs */}
            <div className='w-60 py-5 pr-5 bg-gray-100 flex flex-col gap-2.5'>
                {tabs.map(tab => (
                    <div
                        key={tab.id}
                        onClick={() => setSelectedSection(tab.id)}
                        className={`p-4 text-[17px] cursor-pointer rounded-r-xl duration-200
                            ${selectedSection === tab.id
                                ? "bg-blue-500 text-white"
                                : "hover:bg-blue-500 hover:text-white"
                            }`}
                    >
                        {tab.label}
                    </div>
                ))}
            </div>

            {/* Content Section */}
            <div className='w-full p-8'>
                {selectedSection === "features" && (
                    <>
                        <h2 className='text-4xl font-bold mb-4'>About Home Loan</h2>

                        <p className='text-[18px] leading-relaxed mb-4 text-gray-700'>
                            Tailored Housing Finance Solutions to Build, Expand, or Upgrade Your Dream Home.
                        </p>

                        <p className='text-[18px] leading-relaxed mb-4 text-gray-700'>
                            We collaborate with leading financial institutions to provide customized housing finance options
                            with attractive interest rates and manageable repayment plans, designed to suit your specific needs.
                        </p>

                        <div className='mb-4'>
                            <p className='text-[18px] text-gray-800 mb-2'>
                                <span className='font-semibold text-blue-700'>Loan for Building Your Home: </span>If you own
                                land but need financial backing to construct your residence, this option provides the support
                                required to bring your home to life—from laying the foundation to completing major construction
                                work.
                            </p>
                            <p className='text-[18px] text-gray-800 mb-2'>
                                <span className='font-semibold text-blue-700'>Loan for Home Expansion: </span>Planning to add
                                more space or create an additional floor? Whether it's an annexe, extra room, or structural
                                extension, this loan helps you grow your living space without financial strain.
                            </p>
                            <p className='text-[18px] text-gray-800 mb-2'>
                                <span className='font-semibold text-blue-700'>Loan for Home Renovation: </span>Give your home
                                a fresh look with a renovation loan that finances everything from fixing aging interiors to
                                upgrading lighting, plumbing, and more—enhancing both comfort and aesthetics.
                            </p>
                            <p className='text-[18px] text-gray-800 mb-2'>
                                <span className='font-semibold text-blue-700'>Housing Loan for NRIs: </span>For Non-Resident
                                Indians looking to purchase residential property in India, this loan option offers dedicated
                                support with a streamlined process tailored to overseas applicants.
                            </p>
                        </div>

                        <h3 className='text-2xl font-semibold mt-6 mb-4 text-blue-800'>Why Choose Capital Care Finance
                            Company?</h3>
                        <div className='flex flex-wrap gap-3 mb-6'>
                            {["Easy Documentation", "Quick Approval", "Higher Loan Amounts", "Flexible Repayment",
                                "Flexible Tenor", "Attractive Interest Rates", "Transparent Process"]
                                .map(item => (
                                    <div key={item} className='bg-blue-50 text-blue-800 px-4 py-2 rounded shadow text-[15px]'>
                                        {item}
                                    </div>
                                ))}
                        </div>

                        <Button />
                    </>
                )}

                {selectedSection === "eligibility" && (
                    <>
                        <h2 className='text-4xl font-bold mb-6'>Eligibility Criteria</h2>

                        <p className='text-[18px] text-gray-800 mb-4'>To qualify for a home loan with Capital Care Finance
                            Company, you must meet the following criteria:</p>

                        <ul className='list-disc pl-6 text-[18px] text-gray-800 space-y-2 mb-6'>
                            <li>Age: 21-65 years</li>
                            <li>Employment: Salaried or Self-employed professionals</li>
                            <li>Minimum Income: ₹3,00,000 per annum</li>
                            <li>Credit Score: 700 or above</li>
                            <li>Stable job/business history of at least 2 years</li>
                        </ul>

                        <Button />
                    </>
                )}

                {selectedSection === "documentation" && (
                    <>
                        <h2 className='text-4xl font-bold mb-6'>Required Documentation</h2>

                        <h3 className='text-xl font-semibold mt-5 mb-3 text-blue-700'>For Salaried Individuals:</h3>

                        <ul className='list-inside list-disc pl-5 space-y-2 text-gray-700 text-[18px]'>
                            <li>Identity Proof (Aadhaar/PAN/Passport)</li>
                            <li>Address Proof</li>
                            <li>Last 3 months' salary slips</li>
                            <li>Bank statements for the last 6 months</li>
                            <li>Form 16 or Income Tax Returns</li>
                        </ul>

                        <h3 className='text-xl font-semibold mt-5 mb-3 text-blue-700'>For Self-Employed:</h3>

                        <ul className='list-inside list-disc pl-5 space-y-2 text-gray-700 text-[18px] mb-6'>
                            <li>Business registration documents</li>
                            <li>Income Tax Returns for last 2 years</li>
                            <li>Profit & Loss statements</li>
                            <li>Business bank statements</li>
                        </ul>

                        <Button />
                    </>
                )}

                {selectedSection === "rates" && (
                    <>
                        <h2 className='text-4xl font-bold mb-6'>Rates & Fees</h2>

                        <table className='w-full border text-left text-gray-700 shadow rounded-md overflow-hidden mb-6'>
                            <thead className='bg-blue-100 text-blue-800'>
                                <tr>
                                    <th className='text-[18px] px-4 py-3 font-semibold'>Particulars</th>
                                    <th className='text-[18px] px-4 py-3 font-semibold'>Charges</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr className='even:bg-gray-100 hover:bg-gray-200 transition'>
                                    <td className='text-[18px] py-2.5 px-4'>Loan Processing Fees</td>
                                    <td className='text-[18px] py-2.5 px-4'>0.25% to 2% of Loan Amount</td>
                                </tr>
                                <tr className='even:bg-gray-100 hover:bg-gray-200 transition'>
                                    <td className='text-[18px] py-2.5 px-4'>Loan Cancellation</td>
                                    <td className='text-[18px] py-2.5 px-4'>Nill - 5% (according to Bank/NBFC)</td>
                                </tr>
                                <tr className='even:bg-gray-100 hover:bg-gray-200 transition'>
                                    <td className='text-[18px] py-2.5 px-4'>Stamp Duty Charges</td>
                                    <td className='text-[18px] py-2.5 px-4'>As per the Value of the Property and State Tax</td>
                                </tr>
                                <tr className='even:bg-gray-100 hover:bg-gray-200 transition'>
                                    <td className='text-[18px] py-2.5 px-4'>Legal Fees</td>
                                    <td className='text-[18px] py-2.5 px-4'>As per actual</td>
                                </tr>
                                <tr className='even:bg-gray-100 hover:bg-gray-200 transition'>
                                    <td className='text-[18px] py-2.5 px-4'>Penal Charges</td>
                                    <td className='text-[18px] py-2.5 px-4'>Usually 2% per month</td>
                                </tr>
                                <tr className='even:bg-gray-100 hover:bg-gray-200 transition'>
                                    <td className='text-[18px] py-2.5 px-4'>EMI / Cheque Bounce Charges</td>
                                    <td className='text-[18px] py-2.5 px-4'>Approx 500/-</td>
                                </tr>
                            </tbody>
                        </table>

                        <Button />
                    </>
                )}

                {selectedSection === "faqs" && (
                    <>
                        <h2 className='text-4xl font-bold mb-6'>Frequently Asked Questions</h2>

                        <div className="flex flex-col gap-4">
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

                        <div className="mt-6">
                            <Button />
                        </div>
                    </>
                )}
            </div>
        </div >
    )
}

// FAQ item
function FAQItem({ question, answer, isOpen, onClick }) {
    return (
        <div
            className="border border-gray-300 rounded-lg shadow-sm cursor-pointer transition overflow-hidden"
            onClick={onClick}
        >
            <div className="flex justify-between items-center px-6 py-4 bg-blue-50 hover:bg-blue-100 transition">
                <h4 className="text-[17px] font-semibold text-gray-800">{question}</h4>
                {isOpen ? <FaChevronUp className="text-blue-600" /> : <FaChevronDown className="text-blue-600" />}
            </div>

            <div className={`px-6 pb-4 pt-0 text-gray-700 text-[16px] leading-relaxed transition-all duration-300 ease-in-out 
                ${isOpen ? "max-h-[800px] opacity-100" : "max-h-0 overflow-hidden opacity-0"}`}>
                {answer}
            </div>
        </div>
    );
}

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
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="text-[16px] mb-2 cursor-pointer hover:ml-1 duration-300">
                            <Link
                                to="/"
                            >
                                About
                            </Link>
                        </li>
                        <li className="text-[16px] mb-2 cursor-pointer hover:ml-1 duration-300">
                            <Link
                                to="/"
                            >
                                Services
                            </Link>
                        </li>
                        <li className="text-[16px] mb-2 cursor-pointer hover:ml-1 duration-300">
                            <Link
                                to="/"
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