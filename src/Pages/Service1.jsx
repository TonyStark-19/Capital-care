// react icons
import { FaFacebook, FaInstagram, FaLinkedin, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

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
    // quick links
    const quickLinks = [
        { name: "Home" },
        { name: "About" },
        { name: "Services" },
        { name: "Contact" }
    ];

    return (
        <div className="w-full px-30 py-4 flex flex-row justify-between
        bg-white border-2 border-b-gray-300 top-0 fixed z-40">
            <div className="flex flex-row items-center gap-2 cursor-pointer">
                <img className="w-12" src="images/logo.png" alt="logo"></img>
                <Link to="/">
                    <div className="text-[18px] font-semibold">Capital Care Finance Company</div>
                </Link>
            </div>

            <ul className="flex flex-row items-center gap-8 text-[17px]">
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
                <Button />
            </div>
        </div>
    )
}

// button component
export function Button() {
    return (
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSe3d9QEIBIzVWMhayLEl6YcKGs5KQxJiu2S1kWynfse4_lM8A/viewform">
            <button className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 shadow-lg hover:scale-105 
        transition-transform rounded-sm text-[16px] uppercase font-bold tracking-wide cursor-pointer">
                Apply
            </button>
        </a>
    );
}

// information
function Info() {
    // for navigating the options
    const [selectedSection, setSelectedSection] = useState("features");
    // for FAQs
    const [openIndex, setOpenIndex] = useState(null);

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
        <div className='w-[80%] shadow-xl flex flex-row mx-auto'>
            {/* Sidebar Tabs */}
            <div className='w-70 py-5 pr-5 bg-gray-100 flex flex-col gap-2.5'>
                {tabs.map(tab => (
                    <div
                        key={tab.id}
                        onClick={() => setSelectedSection(tab.id)}
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

            {/* Content Section */}
            <div className='w-full pb-8 px-8 pt-6'>
                {selectedSection === "features" && (
                    <>
                        <h2 className="text-[32px] font-bold mb-6 text-blue-800 relative after:content-[''] after:block after:w-50
                        after:h-1 after:bg-blue-800 after:mt-1 after:mb-3 after:rounded-full">About Home Loan</h2>

                        <p className='text-[18px] leading-relaxed mb-4 text-gray-700'>
                            Tailored Housing Finance Solutions to Build, Expand, or Upgrade Your Dream Home.
                        </p>

                        <p className='text-[18px] leading-relaxed mb-4 text-gray-700'>
                            We collaborate with leading financial institutions to provide customized housing finance options
                            with attractive interest rates and manageable repayment plans, designed to suit your specific needs.
                        </p>

                        <div className='mb-4'>
                            {loanOptions.map((item, idx) => (
                                <p key={idx} className='text-[18px] leading-relaxed text-gray-800 mb-2'>
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
                        <h2 className="text-[32px] font-bold mb-6 text-blue-800 relative after:content-[''] after:block after:w-50
                        after:h-1 after:bg-blue-800 after:mt-1 after:mb-3 after:rounded-full">Eligibility Criteria</h2>

                        <p className='text-[18px] text-gray-800 mb-4'>To qualify for a home loan with Capital Care Finance
                            Company, you must meet the following criteria:</p>

                        <ul className='list-disc pl-6 text-[18px] text-gray-800 space-y-2 mb-6'>
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
                        <h2 className="text-[32px] font-bold mb-6 text-blue-800 relative after:content-[''] after:block after:w-70
                        after:h-1 after:bg-blue-800 after:mt-1 after:mb-3 after:rounded-full">Required Documentation</h2>

                        <h3 className='text-xl font-bold mt-5 mb-3 text-blue-700'>For Salaried Individuals:</h3>

                        <ul className='list-inside list-disc pl-5 space-y-2 text-gray-700 text-[18px]'>
                            {["Identity Proof (Aadhaar/PAN/Passport)", "Address Proof", "Last 3 months' salary slips",
                                "Bank statements for the last 6 months", "Form 16 or Income Tax Returns"]
                                .map(item => (
                                    <li key={item}>{item}</li>
                                ))}
                        </ul>

                        <h3 className='text-xl font-bold mt-5 mb-3 text-blue-700'>For Self-Employed:</h3>

                        <ul className='list-inside list-disc pl-5 space-y-2 text-gray-700 text-[18px] mb-6'>
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
                        <h2 className="text-[32px] font-bold mb-7 text-blue-800 relative after:content-[''] after:block after:w-50
                        after:h-1 after:bg-blue-800 after:mt-1 after:mb-3 after:rounded-full">Rates & Fees</h2>

                        <table className='w-full border text-left text-gray-700 shadow rounded-md overflow-hidden mb-6'>
                            <thead className='bg-blue-100 text-blue-800'>
                                <tr>
                                    <th className='text-[18px] px-4 py-3 font-semibold'>Particulars</th>
                                    <th className='text-[18px] px-4 py-3 font-semibold'>Charges</th>
                                </tr>
                            </thead>

                            <tbody>
                                {rateRows.map((row, idx) => (
                                    <tr key={idx} className='even:bg-gray-100 hover:bg-gray-200 transition'>
                                        <td className='text-[18px] py-2.5 px-4'>{row.label}</td>
                                        <td className='text-[18px] py-2.5 px-4'>{row.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <Button />
                    </>
                )}

                {selectedSection === "faqs" && (
                    <>
                        <h2 className="text-[32px] font-bold mb-7 text-blue-800 relative after:content-[''] after:block after:w-70
                        after:h-1 after:bg-blue-800 after:mt-1 after:mb-3 after:rounded-full">Frequently Asked Questions</h2>

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
            <h3 className='text-2xl font-bold mt-6 mb-6 text-blue-800'>Why Choose Capital Care Finance Company?</h3>

            <div className='flex flex-wrap gap-4 mb-6'>
                {["Easy Documentation", "Quick Approval", "Higher Loan Amounts", "Flexible Repayment",
                    "Flexible Tenor", "Attractive Interest Rates", "Transparent Process"]
                    .map(item => (
                        <div key={item} className='bg-blue-50 text-blue-800 px-4 py-2 rounded shadow text-[15px]'>
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
                <h3 className="text-[17px] font-semibold text-gray-700">{question}</h3>
                <span>
                    {isOpen ? (
                        <FaChevronUp className="text-gray-700" />
                    ) : (
                        <FaChevronDown className="text-gray-700" />
                    )}
                </span>
            </button>

            {isOpen && (
                <div
                    className={`
                    px-5 bg-white text-gray-800 border-t border-gray-200 
                    transition-all duration-300 ease-in-out overflow-hidden
                    ${isOpen ? 'max-h-[300px] py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}
                `}
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
        <div className="pt-12 pb-8 px-5 bg-blue-950 text-white">
            <div className="flex flex-row justify-evenly">
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