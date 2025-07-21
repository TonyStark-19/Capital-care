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

// service 6 : car loan
export function ServiceSix() {
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
                        <h2 className='text-4xl font-bold mb-4'>About Car Loan</h2>

                        <p className='text-[18px] leading-relaxed mb-4 text-gray-700'>
                            A car loan helps you finance the purchase of a new or used vehicle. Spread the cost over time with
                            manageable monthly payments.
                        </p>

                        <h3 className='text-2xl font-semibold mb-4 text-blue-800'>Key Benefits and Uses:</h3>

                        <div className='mb-4'>
                            <p className='text-[18px] text-gray-800 mb-2'>
                                <span className='font-semibold text-blue-700'>Flexible Financing: </span>Choose a repayment
                                term that fits your budget and lifestyle.
                            </p>
                            <p className='text-[18px] text-gray-800 mb-2'>
                                <span className='font-semibold text-blue-700'>Affordable Ownership: </span>Avoid paying the full
                                car price upfront and preserve your savings.
                            </p>
                            <p className='text-[18px] text-gray-800 mb-2'>
                                <span className='font-semibold text-blue-700'>Wide Eligibility: </span>Available for salaried,
                                self-employed individuals, and business owners.
                            </p>
                        </div>

                        <Item />
                        <Button />
                    </>
                )}

                {selectedSection === "eligibility" && (
                    <>
                        <h2 className='text-4xl font-bold mb-6'>Eligibility Criteria</h2>

                        <p className='text-[18px] leading-relaxed mb-4 text-gray-700'>
                            To qualify for a Car loan with Capital Care Finance Company, you must meet the following criteria:
                        </p>

                        <h3 className='text-xl font-semibold mt-5 mb-3 text-blue-700'>For Salaried Individuals:</h3>

                        <ul className='list-inside list-disc pl-5 space-y-2 text-gray-700 text-[18px]'>
                            <li>Individuals who are at least 21 years old at the time of loan application and no older than 60
                                at the end of the loan tenure</li>
                            <li>Individuals who have worked for at least two years, with at least one year with the current
                                employer</li>
                            <li>Individuals with a minimum earning of Rs. 3,00,000 per year, including the income of the
                                spouse/co-applicant.</li>
                        </ul>

                        <h3 className='text-xl font-semibold mt-5 mb-3 text-blue-700'>For Self-Employed:</h3>

                        <ul className='list-inside list-disc pl-5 space-y-2 text-gray-700 text-[18px] mb-6'>
                            <li>Individuals who are at least 21 years old at the time of application and no older than 65 at the
                                end of the loan tenure.</li>
                            <li>Those who have been in business for at least two years.</li>
                            <li>Should earn at least Rs. 3,000,000 per year</li>
                        </ul>

                        <Button />
                    </>
                )}

                {selectedSection === "documentation" && (
                    <>
                        <h2 className='text-4xl font-bold mb-6'>Required Documentation</h2>

                        <ul className='list-inside list-disc pl-5 space-y-2 text-gray-700 text-[18px] mb-6'>
                            <li>Identity Proof (Aadhaar/PAN/Passport)</li>
                            <li>Address Proof</li>
                            <li>KYC documents (Valid Photo ID Proofs)</li>
                            <li>Last 2 years' ITR as proof of income</li>
                            <li>Salary Slip (latest 3 months)</li>
                            <li>Salary account statement(latest 6 months)</li>
                            <li>Signature Verification Proof</li>
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
                                    <td className='text-[18px] py-2.5 px-4'>1.5% to 4% of Loan Amount</td>
                                </tr>
                                <tr className='even:bg-gray-100 hover:bg-gray-200 transition'>
                                    <td className='text-[18px] py-2.5 px-4'>Loan Cancellation</td>
                                    <td className='text-[18px] py-2.5 px-4'>Usually around Rs 5,000</td>
                                </tr>
                                <tr className='even:bg-gray-100 hover:bg-gray-200 transition'>
                                    <td className='text-[18px] py-2.5 px-4'>Stamp Duty Charges</td>
                                    <td className='text-[18px] py-2.5 px-4'>As Per Actuals</td>
                                </tr>
                                <tr className='even:bg-gray-100 hover:bg-gray-200 transition'>
                                    <td className='text-[18px] py-2.5 px-4'>Legal Fees</td>
                                    <td className='text-[18px] py-2.5 px-4'>As per actuals</td>
                                </tr>
                                <tr className='even:bg-gray-100 hover:bg-gray-200 transition'>
                                    <td className='text-[18px] py-2.5 px-4'>Penal Charges</td>
                                    <td className='text-[18px] py-2.5 px-4'>Usually @ 2% per month; 24% p.a.</td>
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