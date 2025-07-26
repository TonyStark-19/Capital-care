// import components
import { Navbar, Footer, Header } from "./Service1";

// import use state
import { useState } from "react";

// react icons
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// service 11 : General Insurance
export function ServiceEleven() {
    return (
        <>
            <Navbar />
            <Header />
            <About />
            <Types />
            <Apply />
            <Faq />
            <Footer />
        </>
    )
}

// about
function About() {
    return (
        <div className="p-12 flex flex-col justify-center items-center">
            <h1 className="text-black text-4xl font-bold text-center mb-12">What is General Insurance?</h1>

            <div className="flex flex-col justify-center items-center gap-5 shadow-lg px-4 py-6 rounded-lg w-[80%]">
                <p className="text-[17px] text-gray-700 text-center w-[90%]">General insurance is like a shield for things other
                    than your health or life. It covers your car, home, travel, and more. If something bad happens, like an
                    accident, theft, or damage, the insurance company helps you pay for the repairs or replacements. It's like
                    having a backup plan for unexpected events that could cost you a lot of money.
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
            name: "Motor Insurance",
            description: "Motor insurance is coverage for your vehicle, protecting you from financial losses due to accidents, theft, or damage."
        },
        {
            name: "Health Insurance",
            description: "Health insurance covers your medical expenses, helping you afford healthcare services and treatments when you're sick or injured."
        },
        {
            name: "Travel Insurance",
            description: "Travel insurance offers coverage for unexpected events during your trips, including trip cancellations, medical emergencies, lost luggage, and more."
        },
        {
            name: "Home Insurance",
            description: "Home insurance provides financial protection for your home and belongings against events like theft, fire, and natural disasters"
        },
        {
            name: "Marine Insurance",
            description: "Marine insurance covers losses and damages to ships and cargo during sea voyages, providing financial protection for maritime activities."
        },
        {
            name: "Rural Insurance",
            description: "Rural insurance provides coverage for agricultural assets, livestock, and rural properties, protecting farmers and rural communities from financial losses due to various risks."
        },
        {
            name: "Mobile Insurance",
            description: "Mobile insurance covers the cost of repairing or replacing your smartphone if it gets damaged, stolen, or lost."
        },
        {
            name: "Bicycle Insurance",
            description: "Bicycle insurance provides coverage for your bicycle against theft, damage, and accidents."
        }
    ];

    return (
        <div className="p-12">
            <h1 className="text-black text-4xl font-bold text-center mb-12">Types Of General Insurance</h1>

            <div className="flex flex-row flex-wrap justify-center w-full gap-8">
                {boxes.map((box, idx) => (
                    <div key={idx} className="p-8 w-[25%] rounded-lg shadow-lg hover:shadow-2xl duration-400">
                        <h3 className="text-2xl text-blue-800 mb-4 font-bold">{box.name}</h3>
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
        <div className="p-12">
            <h1 className="text-black text-4xl font-bold text-center mb-5">Ready to Protect Your Family's Future?</h1>

            <div className="flex flex-col justify-center items-center">
                <p className="text-[20px] text-gray-700 mb-5">Get the right General insurance coverage tailored to your needs.
                    Our experts are ready to help you find the perfect policy.</p>
                <button className="py-3 px-8 bg-red-500 hover:bg-red-600 duration-300 text-white text-[18px] font-semibold
                 rounded-2xl cursor-pointer">Apply Now</button>
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
            question: "What is General insurance, and how does it work?",
            answer: "For detailed answers to this question, please contact a licensed insurance professional."
        },
        {
            question: "Who needs General insurance?",
            answer: "For detailed answers to this question, please contact a licensed insurance professional."
        },
        {
            question: "What types of General insurance are there?",
            answer: "For detailed answers to this question, please contact a licensed insurance professional."
        },
        {
            question: "How much General insurance coverage do I need?",
            answer: "For detailed answers to this question, please contact a licensed insurance professional."
        },
        {
            question: "What is the difference between term and permanent General insurance?",
            answer: "For detailed answers to this question, please contact a licensed insurance professional."
        },
        {
            question: "How are General insurance premiums determined?",
            answer: "For detailed answers to this question, please contact a licensed insurance professional."
        },
        {
            question: "Can I change my General insurance policy after purchasing it?",
            answer: "For detailed answers to this question, please contact a licensed insurance professional."
        },
        {
            question: "Is General insurance taxable?",
            answer: "For detailed answers to this question, please contact a licensed insurance professional."
        },
        {
            question: "Can I have multiple General insurance policies?",
            answer: "For detailed answers to this question, please contact a licensed insurance professional."
        }
    ];

    return (
        <div className="p-12">
            <h1 className="text-black text-4xl font-bold text-center mb-12">Frequently Asked Questions</h1>

            <div className="flex justify-center">
                <div className="flex flex-col gap-4 mb-6 w-[80%]">
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