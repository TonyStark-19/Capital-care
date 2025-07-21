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

// service 8 : Loan Against Property
export function ServiceEight() {
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
                        <h2 className='text-4xl font-bold mb-4'>About Loan Against Property</h2>

                        <p className='text-[18px] leading-relaxed mb-4 text-gray-700'>
                            A loan against property (LAP) allows you to leverage the value of your residential or commercial
                            property to secure funds for various personal or business needs. Since it's a secured loan, it
                            comes with attractive interest rates and higher loan amounts.
                        </p>

                        <h3 className='text-2xl font-semibold mb-4 text-blue-800'>Key Benefits and Uses:</h3>

                        <div className='mb-4'>
                            <p className='text-[18px] text-gray-800 mb-2'>
                                <span className='font-semibold text-blue-700'>High Loan Amounts: </span>Get substantial funding
                                based on the market value of your owned property.
                            </p>
                            <p className='text-[18px] text-gray-800 mb-2'>
                                <span className='font-semibold text-blue-700'>Lower Interest Rates: </span>Enjoy competitive
                                rates due to the secured nature of the loan.
                            </p>
                            <p className='text-[18px] text-gray-800 mb-2'>
                                <span className='font-semibold text-blue-700'>Flexible Usage: </span>Use the funds for business
                                expansion, education, weddings, medical emergencies, or debt consolidation.
                            </p>
                            <p className='text-[18px] text-gray-800 mb-2'>
                                <span className='font-semibold text-blue-700'>Retain Ownership: </span>Continue using your
                                property while accessing funds, as ownership remains with you during the loan term.
                            </p>
                            <p className='text-[18px] text-gray-800 mb-2'>
                                <span className='font-semibold text-blue-700'>Longer Repayment Tenure: </span>Benefit from
                                extended tenures, reducing your monthly EMI burden.
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
                            To qualify for a loan with Capital Care Finance Company, you must meet the following criteria:
                        </p>

                        <ul className='list-inside list-disc pl-5 space-y-2 text-gray-700 text-[18px] mb-6'>
                            <li>Nationality: You need to be a Citizen of India with documents to prove your claim.</li>
                            <li>Occupation and Income: Your lender will require you to furnish details regarding your occupation
                                and income to prove your professional and financial stability to determine your creditworthiness.
                            </li>
                            <li>Credit History: Your three-digit Credit Score, indicative of your track record in respect of
                                repayment of loans, and other forms of credit will be a deciding factor to prove your eligibility
                                for a LAP.</li>
                            <li>Banking Relationship: Should you have a healthy relationship with your lender, you will not be
                                disapproved for a LAP. Additionally, your lender will offer you better terms and conditions in
                                respect of loan value, interest rates, period of the loan, hidden charges, and processing fees.
                            </li>
                            <li>Market Value of Property: Your lender retains the right to decide the loan amount and terms and
                                conditions of your mortgage loan based on the market value of your collateral property. Besides,
                                the market value of the mortgaged property must be higher than the loan amount calculated on the
                                current value of your property.</li>
                            <li>Title of Property: Your lender will require you to be the current existent owner of the property,
                                and in case of a co-application, you will require to prove multiple ownership clear title. Besides,
                                the property must not be mortgaged with any other financial institution.</li>
                        </ul>

                        <Button />
                    </>
                )}

                {selectedSection === "documentation" && (
                    <>
                        <h2 className='text-4xl font-bold mb-6'>Required Documentation</h2>

                        <ul className='list-inside list-disc pl-5 space-y-2 text-gray-700 text-[18px] mb-6'>
                            <li>Proof of identity/residence</li>
                            <li>Proof of income</li>
                            <li>Property-related documents</li>
                            <li>Proof of Business (for self-employed)</li>
                            <li>Account statement for the last 6 months</li>
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
                                <tr className='even:bg-gray-100 hover:bg-gray-200 transition'>
                                    <td className='text-[18px] py-2.5 px-4'>Foreclosure</td>
                                    <td className='text-[18px] py-2.5 px-4'>Nill to 4% (According to bank /NBFC)</td>
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