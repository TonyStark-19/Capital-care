// import components
import { Navbar, Footer, Header } from "./Service1";

// import use state
import { useState } from "react";

// react icons
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// import use effect
import { useEffect } from "react";

// AOS animations
import AOS from 'aos';
import 'aos/dist/aos.css';

// service 11 : General Insurance
export function ServiceEleven() {
    // AOS animations
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    return (
        <div className="w-full overflow-x-hidden">
            <Navbar />
            <Header />
            <About />
            <Types />
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
            max-f:text-[26px]" data-aos="fade-up" data-aos-duration="1000">What is General Insurance?</h1>

            <div className="flex flex-col justify-center items-center gap-5 shadow-lg px-4 py-6 rounded-lg min-a:w-[80%]
                max-a:w-full" data-aos="fade-up" data-aos-duration="1000">
                <p className="text-[16px] text-gray-700 min-c:text-center w-[98%]">General insurance is like a shield for
                    things other than your health or life. It covers your car, home, travel, and more. If something bad happens,
                    like an accident, theft, or damage, the insurance company helps you pay for the repairs or replacements.
                    It's like having a backup plan for unexpected events that could cost you a lot of money.
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
        <div className="min-c:p-12 max-c:p-6 max-c:pt-8">
            <h1 className="text-black font-bold text-center min-c:mb-10 max-c:mb-6 min-c:text-4xl max-c:text-3xl 
            max-f:text-[26px]" data-aos="fade-up" data-aos-duration="1000">Types Of General Insurance</h1>

            <div className="flex flex-row flex-wrap justify-center w-full min-c:gap-8 max-c:gap-4">
                {boxes.map((box, idx) => (
                    <div key={idx} className="p-8 min-a:w-[25%] max-a:w-[300px] max-e:w-[280px] max-sm:w-full rounded-lg shadow-lg 
                    hover:shadow-2xl duration-400" data-aos="fade-up" data-aos-duration="1000">
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
        <div className="min-c:p-12 max-c:p-6 max-c:pt-8" data-aos="fade-up" data-aos-duration="1000">
            <h1 className="text-black font-bold text-center min-c:mb-8 max-c:mb-6 min-c:text-4xl max-c:text-3xl 
            max-f:text-[26px]">Ready to Protect Your Family's Future?</h1>

            <div className="flex flex-col justify-center items-center">
                <p className="text-center text-gray-700 mb-5 max-a:w-[800px] max-c:w-[500px] max-g:w-full min-b:text-[20px]
                max-b:text-[18px] max-c:text-[17px]">Get the right General insurance coverage tailored to your needs. Our experts
                    are ready to help you find the perfect policy.
                </p>
                <button className="bg-red-500 hover:bg-red-600 duration-300 text-white font-semibold rounded-2xl
                    cursor-pointer shadow-lg min-c:py-3 min-c:px-8 max-c:py-2 max-c:px-5 min-c:text-[18px] max-c:text-[17px]">
                    Apply Now
                </button>
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
        <div className="min-c:p-12 max-c:p-6 max-c:pt-8">
            <h1 className="text-black font-bold text-center min-c:mb-10 max-c:mb-6 min-c:text-4xl max-c:text-3xl 
            max-f:text-[26px]" data-aos="fade-up" data-aos-duration="1000">Frequently Asked Questions</h1>

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
        <div className="rounded-md shadow-md overflow-hidden border border-gray-200" data-aos="fade-up" data-aos-duration="1000">
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
                    className={`px-5 bg-white text-gray-800 border-t border-gray-200 transition-all duration-300 
                    ease-in-out overflow-hidden ${isOpen ? 'max-h-[300px] py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
                >
                    {answer}
                </div>
            )}
        </div>
    );
}