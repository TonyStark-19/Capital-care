// import components
import { Navbar, Footer, Header, Button, Item } from "./Service1";
import { IoIosArrowForward } from "react-icons/io";
import { IoMenu, IoClose } from "react-icons/io5";

// import use state
import { useState } from "react";

// react icons
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// service 2 : education loan
export function ServiceTwo() {
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
            title: "Fund Higher Education",
            description: "Cover expenses for tuition, books, accommodation, and more, whether studying in India or abroad."
        },
        {
            title: "Flexible Repayment Options",
            description: "Start repayment after course completion, often with a grace period for job placement."
        },
        {
            title: "Build a Financial Foundation",
            description: "Establish a credit history early while investing in a better future."
        }
    ];

    // eligibility list
    const eligibilityList = [
        "Age: Most lenders have a minimum and maximum age requirement for loan applicants. Typically,you need to be of legal age (18 or older) to apply for a loan.",
        "Course/Program Eligibility: Education loans are often tied to specific educational programs or courses. Lenders may have a list of eligible institutions and programs that qualify for loans.",
        "Co-borrower or Guarantor: If you have limited credit history or income, some lenders might require a co-borrower or guarantor (usually a parent or guardian) who will share the responsibility of repaying the loan if you are unable to do so.",
        "Income/Financial Ability: Some lenders may consider your ability to repay the loan based on your income or your co-borrower's income.",
        "Credit History: Student's as well as their co-borrower/guarantor's credit history and credit score can play a significant role in determining your eligibility for an education loan. A good credit history can improve your chances of approval and may lead to more favorable loan terms."
    ];

    // rates
    const rateRows = [
        { label: "Loan Processing Fees", value: "0.5% to 2% of Loan Amount" },
        { label: "Loan Cancellation", value: "0" },
        { label: "Stamp Duty Charges", value: "As per the Value of the Property and State Tax" },
        { label: "Legal Fees", value: "As per actual" },
        { label: "Penal Charges", value: "Usually 2% per month" },
        { label: "EMI / Cheque Bounce Charges", value: "Approx 590/- per Bounce" }
    ];

    // FAQ data
    const faqData = [
        {
            question: "How long does the loan approval process take?",
            answer: "Typically, our loan approval process takes 3–7 working days from document submission."
        },
        {
            question: "Can I prepay my education loan?",
            answer: "Yes, you can prepay your education loan with minimal or no prepayment charges."
        },
        {
            question: "What is the maximum loan tenure?",
            answer: "We offer education loans with a maximum tenure of 30 years."
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
                        min-g:mb-6 max-g:mb-3">About Education Loan</h2>

                        <p className='min-g:text-[18px] max-g:text-[17px] min-g:leading-relaxed min-g:mb-4 max-g:mb-3
                        text-gray-700'>
                            An education loan provides financial assistance to students and their families, covering tuition
                            fees and other academic-related expenses. It allows learners to pursue higher education without
                            the burden of upfront costs.
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
                        text-gray-700'>To qualify for a personal loan, you
                            have to meet certain criteria. Below are the important factors that lenders take into consideration
                            to decide your eligibility for a personal loan.
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

                        <p className='min-g:text-[18px] max-g:text-[17px] min-g:leading-relaxed min-g:mb-4 max-g:mb-3
                        text-gray-700'>Documentation: You will likely need to provide various documents as part of your loan
                            application, such as proof of identity, proof of admission, income documents, and more for both Student
                            as well as the Guarantor or co-borrower.
                        </p>

                        <ul className='list-disc pl-6 min-g:text-[18px] max-g:text-[17px] min-g:leading-relaxed mb-6
                        text-gray-700 space-y-2'>
                            {["Student-Applicant", "Co-applicant/Guarantor", "Income Proof for salaried Co-applicant/Guarantor",
                                "Income Proof for Self-employed Co-applicant/ Guarantor"]
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