// import components
import { Navbar, Footer, Header, Button, Item } from "./Service1";
import { IoIosArrowForward } from "react-icons/io";

// import use state
import { useState } from "react";

// react icons
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// service 7 : credit card loan
export function ServiceSeven() {
    return (
        <>
            <Navbar />
            <Header />
            <Info />
            <Footer />
        </>
    )
}

// info function
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
        { id: "faqs", label: "FAQs" },
    ];

    // loan types
    const loanOptions = [
        {
            title: "Easy Transactions",
            description: "Make cashless payments instantly, both online and offline."
        },
        {
            title: "Rewards & Cashback",
            description: "Earn points, discounts, and cashback on spending."
        },
        {
            title: "Build Credit History",
            description: "Responsible usage helps improve your credit score."
        }
    ];

    // eligibility list
    const eligibilityList = [
        "Age : Most credit card issuers require applicants to be a certain age, typically 18 or older. Some may have a higher age requirement.",
        "Income : Credit card issuers often have a minimum income requirement to ensure that applicants have the means to repay the credit card debt.",
        "Credit Score : A good credit score is important for credit card eligibility. A higher credit score indicates a history of responsible credit behavior and makes you more likely to be approved for a credit card with favorable terms.",
        "Residential Status : Depending on the issuer, you might need to provide proof of your current address or residency."
    ];

    // FAQ data
    const faqData = [
        {
            question: "How long does the loan approval process take?",
            answer: "Typically, our loan approval process takes 3–7 working days from document submission."
        },
        {
            question: "Can I prepay my credit card loan?",
            answer: "Yes, you can prepay your credit card loan with minimal or no prepayment charges."
        },
        {
            question: "What is the maximum loan tenure?",
            answer: "We offer credit card loans with a maximum tenure of 30 years."
        }
    ];

    return (
        <div className='w-[80%] shadow-xl flex flex-row mx-auto'>
            {/* Sidebar Tabs */}
            <div className='w-60 py-5 pr-5 bg-gray-100 flex flex-col gap-2.5'>
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
            <div className='w-full p-8'>
                {selectedSection === "features" && (
                    <>
                        <h2 className="text-4xl font-bold mb-4 relative text-blue-800 after:content-[''] after:block after:w-50
                        after:h-1 after:bg-blue-800 after:mt-3 after:mb-3 after:rounded-full">About Credit Card Loan</h2>

                        <p className='text-[18px] leading-relaxed mb-4 text-gray-700'>
                            A credit card is a revolving line of credit that lets you make purchases, pay bills, or withdraw cash,
                            with added perks and benefits.
                        </p>

                        <h3 className='text-2xl font-semibold mb-4 text-blue-800'>Key Benefits and Uses:</h3>

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
                        <h2 className="text-4xl font-bold mb-4 relative text-blue-800 after:content-[''] after:block after:w-50
                        after:h-1 after:bg-blue-800 after:mt-3 after:mb-3 after:rounded-full">Eligibility Criteria</h2>

                        <p className='text-[18px] leading-relaxed mb-4 text-gray-700'>
                            To qualify for a Credit Card loan with Capital Care Finance Company, you must meet the following
                            criteria:
                        </p>

                        <ul className='list-inside list-disc pl-5 space-y-2 text-gray-700 text-[18px] mb-6'>
                            {eligibilityList.map(item => (
                                <li className="leading-relaxed" key={item}>{item}</li>
                            ))}
                        </ul>

                        <Button />
                    </>
                )}

                {selectedSection === "documentation" && (
                    <>
                        <h2 className="text-4xl font-bold mb-4 relative text-blue-800 after:content-[''] after:block after:w-70
                        after:h-1 after:bg-blue-800 after:mt-3 after:mb-3 after:rounded-full">Required Documentation</h2>

                        <ul className='list-inside list-disc pl-5 space-y-2 text-gray-700 text-[18px] mb-6'>
                            {["Identity Proof (Aadhaar/PAN/Passport)", "Address Proof",
                                "KYC documents (Valid Photo ID Proofs)", "Last 2 years' ITR as proof of income"]
                                .map(item => (
                                    <li key={item}>{item}</li>
                                ))}
                        </ul>

                        <Button />
                    </>
                )}

                {selectedSection === "faqs" && (
                    <>
                        <h2 className="text-4xl font-bold mb-6 relative text-blue-800 after:content-[''] after:block after:w-70
                        after:h-1 after:bg-blue-800 after:mt-3 after:mb-3 after:rounded-full">Frequently Asked Questions</h2>

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

// faq item
function FAQItem({ question, answer, isOpen, onClick }) {
    return (
        <div className="rounded-md shadow-md overflow-hidden border border-gray-200">
            <button
                onClick={onClick}
                className="flex justify-between items-center w-full px-5 py-4 bg-blue-50 hover:bg-blue-100 transition-all
                cursor-pointer"
            >
                <h3 className="text-[17px] font-semibold text-gray-800">{question}</h3>
                <span>
                    {isOpen ? (
                        <FaChevronUp className="text-blue-600" />
                    ) : (
                        <FaChevronDown className="text-blue-600" />
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