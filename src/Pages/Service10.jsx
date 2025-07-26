// import components
import { Navbar, Footer, Header } from "./Service1";

// import use state
import { useState } from "react";

// react icons
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// service 10 : Health Insurance
export function ServiceTen() {
    return (
        <>
            <Navbar />
            <Header />
            <About />
            <Types />
            <Buy />
            <Terms />
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
            <h1 className="text-black text-4xl font-bold text-center mb-12">What is Health Insurance?</h1>

            <div className="flex flex-col justify-center items-center gap-5 shadow-lg px-4 py-6 rounded-lg w-[80%]">
                <p className="text-[17px] text-gray-700 text-center w-[90%]">Health insurance is a type of coverage that helps
                    you manage the cost of medical expenses and healthcare services. When you have health insurance, the
                    insurance company pays a part or the entire amount of your medical bills, depending on the terms of the
                    policy. This financial protection ensures that you can access necessary medical treatments without
                    having to bear the full financial burden. Health insurance plans can cover a range of healthcare services,
                    including doctor visits, hospital stays, surgeries, medications, and preventive care, depending on the
                    specific plan you choose.
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
            name: "Individual Health Insurance",
            description: "This policy provides medical coverage to a single person. It covers expenses such as hospitalization, surgery, doctor consultations, and prescribed medications. The sum insured is dedicated solely to the insured individual and is based on their age, health history, and coverage needs."
        },
        {
            name: "Family Floater Health Insurance",
            description: "A family floater policy covers all family members under one plan and one sum insured. The total coverage can be used by any member as needed, making it cost-effective for families, especially when not all members require frequent medical attention."
        },
        {
            name: "Group Health Insurance",
            description: "Usually provided by employers, this policy covers a group of people—typically employees of a company. It offers basic health coverage and sometimes includes dependents. While it’s affordable and requires no medical checks, it may offer limited benefits compared to individual plans."
        },
        {
            name: "Critical Illness Insurance",
            description: "This plan provides a lump-sum payout if the insured is diagnosed with a serious illness like cancer, kidney failure, or heart disease. The payout can be used not just for treatment, but also for managing daily expenses, recovery, and income loss."
        },
        {
            name: "Senior Citizen Health Insurance",
            description: "Tailored for individuals over 60 years, these plans address age-related health concerns and usually cover pre-existing illnesses, regular checkups, and treatments. Premiums are higher due to increased risk, and some policies may include co-payments."
        },
        {
            name: "Maternity Health Insurance",
            description: "This plan covers maternity-related expenses, including pre- and post-natal care, delivery (normal or C-section), and newborn baby coverage. It often comes with a waiting period and is ideal for those planning a family in the near future."
        },
        {
            name: "Personal Accident Insurance",
            description: "This insurance provides coverage in case of accidents leading to death, permanent or partial disability, or injury. It helps manage medical bills and offers compensation based on the severity of the incident."
        },
        {
            name: "Disease-Specific Insurance",
            description: "Focused on particular illnesses such as diabetes, cancer, or heart disease, these policies provide targeted coverage. They are designed to manage long-term treatment costs and may offer benefits like regular screenings and disease management tools."
        }
    ];

    return (
        <div className="p-12">
            <h1 className="text-black text-4xl font-bold text-center mb-12">Types Of Health Insurance</h1>

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

// who should buy
function Buy() {
    // boxes
    const boxes = [
        "Individuals without employer-provided coverage who want to secure protection against high medical costs and hospital bills.",
        "Families with dependents, to ensure all members, including children and elderly parents, have access to necessary healthcare without financial stress.",
        "Senior citizens who are more likely to face health issues and need coverage tailored to age-related conditions and pre-existing illnesses.",
        "Young adults starting their careers, as buying early results in lower premiums and continuous coverage without waiting periods..",
        "People with a history of health issues or a family medical history that increases the risk of future illnesses, ensuring timely and affordable care.",
        "People with limited savings, to avoid depleting personal funds or taking on debt during unexpected medical treatments."
    ];
    return (
        <div className="p-12">
            <h1 className="text-black text-4xl font-bold text-center mb-12">Who Should Buy a Health Insurance Policy?</h1>

            <div className="flex flex-row flex-wrap justify-center w-full gap-8">
                {boxes.map((box, idx) => (
                    <div key={idx} className="p-5 w-[20%] rounded-lg bg-blue-100">
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
        { name: "Premium", description: "The amount you pay periodically (monthly, quarterly, or annually) to keep your health insurance policy active." },
        { name: "Sum Assured", description: "The maximum amount the insurer will pay for medical expenses in a policy year; it is the total coverage offered." },
        { name: "Policy Term", description: "The duration for which the health insurance policy is valid and provides coverage, usually one year, renewable annually." },
        { name: "Co-Payment", description: "A fixed percentage of the medical bill that the insured must pay out-of-pocket; the insurer covers the remaining amount." },
        { name: "Network Hospitals", description: "Hospitals tied up with the insurer to offer cashless treatment, where the insurer directly settles the bill with the hospital." },
        { name: "Underwriting", description: "The process of assessing an applicant's risk and determining policy eligibility and premiums." },
        { name: "Cashless Facility", description: "A benefit where policyholders can get treated at network hospitals without paying upfront; the insurer pays the expenses directly." },
        { name: "Waiting Period", description: "The time frame during which certain illnesses, treatments, or pre-existing diseases are not covered under the policy." },
        { name: "Daycare Procedure", description: "Medical procedures or surgeries that don’t require 24-hour hospitalization and are still covered by the insurance." },
        { name: "Restoration Benefit", description: "A feature that restores the full sum insured if it gets exhausted during the policy year due to claims." }
    ];

    return (
        <div className="p-12">
            <h1 className="text-black text-4xl font-bold text-center mb-12">Key Terms in Health Insurance</h1>

            <div className="flex flex-row flex-wrap justify-center w-full gap-8">
                {boxes.map((box, idx) => (
                    <div className="p-5 w-[20%] rounded-lg bg-blue-100">
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
        <div className="p-12">
            <h1 className="text-black text-4xl font-bold text-center mb-5">Ready to Protect Your Family's Future?</h1>

            <div className="flex flex-col justify-center items-center">
                <p className="text-[20px] text-gray-700 mb-5">Get the right Health insurance coverage tailored to your needs.
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
            question: "What is Health insurance, and how does it work?",
            answer: "For detailed answers to this question, please contact a licensed insurance professional."
        },
        {
            question: "Who needs Health insurance?",
            answer: "For detailed answers to this question, please contact a licensed insurance professional."
        },
        {
            question: "What types of Health insurance are there?",
            answer: "For detailed answers to this question, please contact a licensed insurance professional."
        },
        {
            question: "How much Health insurance coverage do I need?",
            answer: "For detailed answers to this question, please contact a licensed insurance professional."
        },
        {
            question: "What is the difference between term and permanent Health insurance?",
            answer: "For detailed answers to this question, please contact a licensed insurance professional."
        },
        {
            question: "How are Health insurance premiums determined?",
            answer: "For detailed answers to this question, please contact a licensed insurance professional."
        },
        {
            question: "Can I change my Health insurance policy after purchasing it?",
            answer: "For detailed answers to this question, please contact a licensed insurance professional."
        },
        {
            question: "Is Health insurance taxable?",
            answer: "For detailed answers to this question, please contact a licensed insurance professional."
        },
        {
            question: "Can I have multiple Health insurance policies?",
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