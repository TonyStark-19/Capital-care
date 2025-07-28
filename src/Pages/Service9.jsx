// import components
import { Navbar, Footer, Header } from "./Service1";

// import use state
import { useState } from "react";

// react icons
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// service 9 : Life Insurance
export function ServiceNine() {
    return (
        <div className="w-full overflow-x-hidden">
            <Navbar />
            <Header />
            <About />
            <Types />
            <Buy />
            <Terms />
            <Apply />
            <Faq />
            <Footer />
        </div>
    )
}

// about
function About() {
    return (
        <div className="flex flex-col justify-center items-center min-c:p-12 max-c:p-6 max-c:pt-8">
            <h1 className="text-black font-bold text-center min-c:mb-8 max-c:mb-3 min-c:text-4xl max-c:text-3xl 
            max-f:text-[26px]">What is Life Insurance?</h1>

            <div className="flex flex-col justify-center items-center gap-5 shadow-lg px-4 py-6 rounded-lg min-a:w-[80%]
                max-a:w-full">
                <p className="text-[16px] text-gray-700 min-a:w-[90%] max-a:w-[98%]">Life insurance is a financial
                    contract or arrangement between an individual (the policyholder) and an insurance company. In this arrangement,
                    the policyholder pays regular premiums to the insurance company, and in return, the insurance company
                    provides a death benefit to the policyholder's designated beneficiaries upon the policyholder's death.
                    Life insurance is designed to provide financial protection and support to the policyholder's loved ones or
                    beneficiaries in the event of their passing.
                </p>
            </div>
        </div>
    )
}

// types
function Types() {
    // boxes
    const boxes = [
        {
            name: "Term Life Insurance",
            description: "A long-term, pure financial protection strategy designed to safeguard your family's financial well-being. Term insurance provides coverage for a specific period (term), such as 10, 20, or 30 years. If the policyholder dies within the term, a predetermined amount is paid to their beneficiaries."
        },
        {
            name: "Whole Life Insurance",
            description: "Offers lifetime coverage, extending until age 99, ensuring long-lasting life protection. Includes a savings component and higher premiums than term insurance."
        },
        {
            name: "Unit Linked Insurance Plan (ULIP)",
            description: "Allows investment in a diversified mix of equity and debt funds, with a 5-year lock-in period for partial withdrawals."
        },
        {
            name: "Endowment Plan",
            description: "Ensures the guaranteed receipt of the intended sum at the policy's maturity, providing financial security."
        },
        {
            name: "Money Back Plan",
            description: "Aids in the management of cash flows, particularly for goals like financing your child's education or marriage."
        },
        {
            name: "Retirement Plan",
            description: "Helps you build a substantial retirement fund or establish a pension to secure your golden years."
        },
        {
            name: "Child Insurance Plan",
            description: "Safely invest in your child's higher education and marriage goals while providing life insurance coverage."
        },
        {
            name: "Group Insurance Plan",
            description: "Beneficial for corporations and other organizations to protect their employees and customers from unforeseen risks."
        },
        {
            name: "Savings & Investment Plans",
            description: "Direct your savings toward achieving future financial objectives."
        }
    ];

    return (
        <div className="min-c:p-12 max-c:p-6 max-c:pt-8">
            <h1 className="text-black font-bold text-center min-c:mb-8 max-c:mb-6 min-c:text-4xl max-c:text-3xl 
            max-f:text-[26px]">Types Of Life Insurance</h1>

            <div className="flex flex-row flex-wrap justify-center w-full min-c:gap-8 max-c:gap-4">
                {boxes.map((box, idx) => (
                    <div key={idx} className="p-8 min-e:w-[300px] max-e:w-[280px] max-sm:w-full rounded-lg shadow-lg 
                    hover:shadow-2xl duration-400">
                        <h3 className="text-2xl text-blue-800 mb-4 font-bold">{box.name}</h3>
                        <p className="text-[16px] tracking-wide text-gray-700">{box.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

// who should buy
function Buy() {
    // boxes
    const boxes = [
        "Individuals with financial dependents, such as spouses, children, or aging parents.",
        "Breadwinners who contribute significantly to the household income.",
        "Anyone with outstanding debts, such as mortgages, loans, or credit card balances.",
        "Parents who want to ensure their children's education and future financial security.",
        "Business owners looking to protect their businesses and provide for their families in case of their demise.",
        "Individuals with specific financial goals, such as leaving an inheritance or legacy.",
        "Those who want to ensure their funeral and final expenses are covered without burdening their family.",
        "People seeking to build cash value or investment opportunities through certain life insurance policies, like whole life or universal life."
    ];
    return (
        <div className="min-c:p-12 max-c:p-6 max-c:pt-8">
            <h1 className="text-black font-bold text-center min-c:mb-8 max-c:mb-6 min-c:text-4xl max-c:text-3xl 
            max-f:text-[26px]">Who Should Buy a Life Insurance Policy?</h1>

            <div className="flex flex-row flex-wrap justify-center w-full min-c:gap-8 max-c:gap-4">
                {boxes.map((box, idx) => (
                    <div key={idx} className="p-5 min-g:w-[230px] max-g:w-[210px] max-f:w-full rounded-lg bg-blue-100 shadow-lg">
                        <p className="text-[16px] tracking-wide text-gray-700">{box}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

// Key terms
function Terms() {
    // boxes
    const boxes = [
        { name: "Premium", description: "The regular payment made for the life insurance policy." },
        { name: "Beneficiary", description: "The person or entity who receives the death benefit upon the insured's passing." },
        { name: "Death Benefit", description: "The payout given to the beneficiary upon the insured's death." },
        { name: "Policy Term", description: "The duration for which the life insurance policy is valid." },
        { name: "Sum Assured", description: "The sum of money the policy pays to the beneficiary." },
        { name: "Underwriting", description: "The process of assessing an applicant's risk and determining policy eligibility and premiums." },
        { name: "Cash Value", description: "The savings component in some policies that can grow over time." },
        { name: "Riders", description: "Optional policy add-ons that offer extra coverage or benefits." },
        { name: "Term Insurance", description: "Provides coverage for a specified period with lower premiums." },
        { name: "Permanent Insurance", description: "Offers lifetime coverage with a savings component and higher premiums." }
    ];

    return (
        <div className="min-c:p-12 max-c:p-6 max-c:pt-8">
            <h1 className="text-black font-bold text-center min-c:mb-8 max-c:mb-6 min-c:text-4xl max-c:text-3xl 
            max-f:text-[26px]">Key Terms in Life Insurance</h1>

            <div className="flex flex-row flex-wrap justify-center w-full min-c:gap-8 max-c:gap-4">
                {boxes.map((box, idx) => (
                    <div className="p-5 min-g:w-[230px] max-g:w-[210px] max-f:w-full rounded-lg bg-blue-100 shadow-lg" key={idx}>
                        <h3 className="text-blue-400 text-xl font-semibold mb-2">{box.name}</h3>
                        <p className="text-[16px] tracking-wide text-gray-700">{box.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}


// apply
function Apply() {
    return (
        <div className="min-c:p-12 max-c:p-6 max-c:pt-8">
            <h1 className="text-black font-bold text-center min-c:mb-5 max-c:mb-3 min-b:text-4xl max-b:text-3xl max-c:text-[26px] 
            max-g:text-[23px]">
                Ready to Protect Your Family's Future?</h1>

            <div className="flex flex-col justify-center items-center">
                <p className="text-center text-gray-700 mb-5 max-a:w-[800px] max-c:w-[500px] max-g:w-full min-b:text-[20px]
                max-b:text-[18px] max-c:text-[17px]">Get the right life insurance coverage tailored to your needs. Our
                    experts are ready to help you find the perfect policy.</p>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSe3d9QEIBIzVWMhayLEl6YcKGs5KQxJiu2S1kWynfse4_lM8A/viewform">
                    <button className="bg-red-500 hover:bg-red-600 duration-300 text-white font-semibold rounded-2xl
                    cursor-pointer shadow-lg min-c:py-3 min-c:px-8 max-c:py-2 max-c:px-5 min-c:text-[18px] max-c:text-[17px]">
                        Apply Now
                    </button>
                </a>
            </div>
        </div>
    )
}

// FAQ
function Faq() {
    // for FAQs
    const [openIndex, setOpenIndex] = useState(null);

    // FAQ data
    const faqData = [
        {
            question: "What is life insurance, and how does it work?",
            answer: "For detailed answers to this question, please contact a licensed insurance professional."
        },
        {
            question: "Who needs life insurance?",
            answer: "For detailed answers to this question, please contact a licensed insurance professional."
        },
        {
            question: "What types of life insurance are there?",
            answer: "For detailed answers to this question, please contact a licensed insurance professional."
        },
        {
            question: "How much life insurance coverage do I need?",
            answer: "For detailed answers to this question, please contact a licensed insurance professional."
        },
        {
            question: "What is the difference between term and permanent life insurance?",
            answer: "For detailed answers to this question, please contact a licensed insurance professional."
        },
        {
            question: "How are life insurance premiums determined?",
            answer: "For detailed answers to this question, please contact a licensed insurance professional."
        },
        {
            question: "Can I change my life insurance policy after purchasing it?",
            answer: "For detailed answers to this question, please contact a licensed insurance professional."
        },
        {
            question: "Is life insurance taxable?",
            answer: "For detailed answers to this question, please contact a licensed insurance professional."
        },
        {
            question: "Can I have multiple life insurance policies?",
            answer: "For detailed answers to this question, please contact a licensed insurance professional."
        }
    ];

    return (
        <div className="min-c:p-12 max-c:p-6 max-c:pt-8">
            <h1 className="text-black font-bold text-center min-c:mb-8 max-c:mb-6 min-c:text-4xl max-c:text-3xl 
            max-f:text-[26px]">Frequently Asked Questions</h1>

            <div className="flex justify-center">
                <div className="flex flex-col gap-4 mb-6 min-b:w-[80%] max-b:w-full">
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
            </div>
        </div>
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
                <h3 className="min-f:text-[17px] max-f:text-[16px] font-semibold text-gray-700 text-left">{question}</h3>
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