// import components
import { Navbar, Footer, Header, Button, Item } from "./Service1";
import { IoIosArrowForward } from "react-icons/io";
import { IoMenu, IoClose } from "react-icons/io5";

// import use state
import { useState } from "react";

// react icons
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// service 8 : Loan Against Property
export function ServiceEight() {
    return (
        <div className="w-full overflow-x-hidden">
            <Navbar />
            <Header />
            <Info />
            <Footer />
        </div>
    )
}

// info function
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
            title: "High Loan Amounts",
            description: "Get substantial funding based on the market value of your owned property."
        },
        {
            title: "Lower Interest Rates",
            description: "Enjoy competitive rates due to the secured nature of the loan."
        },
        {
            title: "Flexible Usage",
            description: "Use the funds for business expansion, education, weddings, medical emergencies, or debt consolidation."
        },
        {
            title: "Retain Ownership",
            description: "Continue using your property while accessing funds, as ownership remains with you during the loan term."
        },
        {
            title: "Longer Repayment Tenure",
            description: "Benefit from extended tenures, reducing your monthly EMI burden."
        }
    ];

    // eligibility list
    const eligibilityList = [
        "Nationality: You need to be a Citizen of India with documents to prove your claim.",
        "Occupation and Income: Your lender will require you to furnish details regarding your occupation and income to prove your professional and financial stability to determine your creditworthiness.",
        "Credit History: Your three-digit Credit Score, indicative of your track record in respect of repayment of loans, and other forms of credit will be a deciding factor to prove your eligibility for a LAP.",
        "Banking Relationship: Should you have a healthy relationship with your lender, you will not be disapproved for a LAP. Additionally, your lender will offer you better terms and conditions in respect of loan value, interest rates, period of the loan, hidden charges, and processing fees.",
        "Market Value of Property: Your lender retains the right to decide the loan amount and terms and conditions of your mortgage loan based on the market value of your collateral property. Besides, the market value of the mortgaged property must be higher than the loan amount calculated on the current value of your property.",
        "Title of Property: Your lender will require you to be the current existent owner of the property, and in case of a co-application, you will require to prove multiple ownership clear title. Besides, the property must not be mortgaged with any other financial institution."
    ];

    // rates
    const rateRows = [
        { label: "Loan Processing Fees", value: "0.25% to 2% of Loan Amount" },
        { label: "Loan Cancellation", value: "Nill - 5% (according to Bank/NBFC)" },
        { label: "Stamp Duty Charges", value: "As per the Value of the Property and State Tax" },
        { label: "Legal Fees", value: "As per actual" },
        { label: "Penal Charges", value: "Usually 2% per month" },
        { label: "EMI / Cheque Bounce Charges", value: "Approx 500/-" },
        { label: "Foreclosure", value: "Nill to 4% (According to bank /NBFC)" }
    ];

    // FAQ data
    const faqData = [
        {
            question: "How long does the loan approval process take?",
            answer: "Typically, our loan approval process takes 3–7 working days from document submission."
        },
        {
            question: "Can I prepay my loan?",
            answer: "Yes, you can prepay your loan with minimal or no prepayment charges."
        },
        {
            question: "What is the maximum loan tenure?",
            answer: "We offer loans with a maximum tenure of 30 years."
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
                        min-g:mb-6 max-g:mb-3">About Loan Against Property</h2>

                        <p className='min-g:text-[18px] max-g:text-[17px] min-g:leading-relaxed min-g:mb-4 max-g:mb-3
                        text-gray-700'>
                            A loan against property (LAP) allows you to leverage the value of your residential or commercial
                            property to secure funds for various personal or business needs. Since it's a secured loan, it
                            comes with attractive interest rates and higher loan amounts.
                        </p>

                        <h3 className='min-g:text-2xl max-g:text-[22px] font-bold min-g:my-6 max-g:my-4 text-blue-800'>
                            Key Benefits and Uses:</h3>

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
                        text-gray-700'>To qualify for a loan with Capital Care Finance Company, you must meet the following
                            criteria:
                        </p>

                        <ul className='list-disc pl-6 min-g:text-[18px] max-g:text-[17px] mb-6 text-gray-700 space-y-2'>
                            {eligibilityList.map(item => (
                                <li className="min-g:leading-relaxed" key={item}>{item}</li>
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

                        <ul className='list-disc pl-6 min-g:text-[18px] max-g:text-[17px] min-g:leading-relaxed mb-6
                        text-gray-700 space-y-2'>
                            {["Proof of identity/residence", "Proof of income", "Property-related documents",
                                "Proof of Business (for self-employed)", "Account statement for the last 6 months"]
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