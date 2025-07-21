// import components
import { Navbar } from "./Service1";
import { Footer } from "./Service1";
import { Header } from "./Service1";
import { Button } from "./Service1";
import { faqData } from "./data/faqData";
import { Item } from "./Service1";

// import use state
import { useState } from "react";

// react icons
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// service 4 : personal Loan
export function ServiceFour() {
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
                                ? "bg-gray-300"
                                : "hover:bg-gray-300"
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
                        <h2 className='text-4xl font-bold mb-4'>About Personal Loan</h2>

                        <p className='text-[18px] leading-relaxed mb-4 text-gray-700'>
                            A personal loan offers a convenient and versatile financing solution, as it doesn’t require any
                            collateral or security. This unsecured nature provides you with the freedom to use the funds
                            however you see fit.
                        </p>

                        <p className='text-[18px] leading-relaxed mb-4 text-gray-700'>
                            Here are some practical ways a personal loan can support your financial needs:
                        </p>

                        <div className='mb-4'>
                            <p className='text-[18px] text-gray-800 mb-2'>
                                <span className='font-semibold text-blue-700'>Simplified Debt Management: </span>Merge several
                                high-interest debts into one manageable loan with a potentially lower interest rate, helping you
                                save on interest and stay organized.
                            </p>
                            <p className='text-[18px] text-gray-800 mb-2'>
                                <span className='font-semibold text-blue-700'>Home Improvement Projects: </span>Upgrade or
                                remodel your home with ease, boosting its market value and enhancing your comfort.
                            </p>
                            <p className='text-[18px] text-gray-800 mb-2'>
                                <span className='font-semibold text-blue-700'>Medical Support: </span>Tackle unforeseen
                                healthcare costs, such as surgeries or urgent treatments, without straining your savings.
                            </p>
                            <p className='text-[18px] text-gray-800 mb-2'>
                                <span className='font-semibold text-blue-700'>Urgent Financial Needs: </span>Quickly access
                                funds for unexpected events like vehicle repairs or other emergencies, helping you stay
                                financially stable in times of need.
                            </p>
                        </div>

                        <Item />
                        <Button />
                    </>
                )}

                {selectedSection === "eligibility" && (
                    <>
                        <h2 className='text-4xl font-bold mb-6'>Eligibility Criteria</h2>

                        <p className='text-[18px] text-gray-800 mb-4'>To qualify for a Personal Loan with Capital Care Finance
                            Company, you must meet the following criteria:
                        </p>

                        <ul className='list-disc pl-6 text-[18px] text-gray-800 space-y-2 mb-6'>
                            <li>Age: 21-60 years</li>
                            <li>Employment: Salaried or Self-employed professionals</li>
                            <li>Net monthly income should be 15,000/- for salaried and self-employed, yearly transactions should
                                be a minimum of 2 lakhs</li>
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
                                    <td className='text-[18px] py-2.5 px-4'>2999/- to 5% of Loan Amount</td>
                                </tr>
                                <tr className='even:bg-gray-100 hover:bg-gray-200 transition'>
                                    <td className='text-[18px] py-2.5 px-4'>Loan Cancellation</td>
                                    <td className='text-[18px] py-2.5 px-4'>3000 -5% of loan amount</td>
                                </tr>
                                <tr className='even:bg-gray-100 hover:bg-gray-200 transition'>
                                    <td className='text-[18px] py-2.5 px-4'>Stamp Duty Charges</td>
                                    <td className='text-[18px] py-2.5 px-4'>150/- to 300/-</td>
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