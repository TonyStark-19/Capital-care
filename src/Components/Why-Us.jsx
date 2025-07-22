// react icons
import { GrUserExpert } from "react-icons/gr";
import { AiOutlineStock } from "react-icons/ai";
import { SlCreditCard } from "react-icons/sl";

// Why-us secction
export function WhyUS() {
    // benifits
    const benifits = [
        {
            icon: <GrUserExpert className="text-blue-800 text-3xl" />,
            name: "Expert Guidance",
            description: "Professional team with years of experience"
        },
        {
            icon: <AiOutlineStock className="text-blue-800 text-3xl" />,
            name: "Fast Processing",
            description: "Quick approvals with minimal documentation"
        },
        {
            icon: <SlCreditCard className="text-blue-800 text-3xl" />,
            name: "Competitive Rates",
            description: "Best-in-market rates for all services"
        }
    ];

    // benifits2
    const benefits2 = [
        { name: "Competitive Commission Rates" },
        { name: "Exclusive Partner Portal" },
        { name: "Marketing Support" },
        { name: "Dedicated Relationship Manager" }
    ];

    return (
        <>
            <div className="py-12 px-6">
                <h1 className="text-black text-4xl font-bold text-center mb-12">Why Choose Us</h1>

                <div className="flex flex-row justify-center gap-5">
                    {benifits.map((benifit, idx) => (
                        <div className="w-[30%] flex flex-col justify-center items-center p-8" key={idx}>
                            <div className="bg-gray-100 rounded-[50%] p-4.5 mb-6">{benifit.icon}</div>
                            <h3 className="text-[20px] font-bold mb-2.5">{benifit.name}</h3>
                            <p className="text-[16px] text-gray-700">{benifit.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-row justify-center gap-5 py-5 px-10">
                <div className="p-8 w-[44%] rounded-lg shadow-lg hover:shadow-2xl duration-300">
                    <h2 className="text-2xl font-bold pb-2.5 border-b-2 border-gray-300 mb-5
                    text-blue-900">Capital Care Finance Company Referral Program</h2>
                    <p className="text-[16px] text-gray-700">Refer your friends, family, or peers to Capital Care Finance
                        Company for any of our offerings — Personal Loan, Business Loan, Mortgage Loan, Car Loan, Overdraft,
                        or Insurance — and earn exciting cashback rewards! 💸</p>
                    <p className="text-[16px] text-gray-700 mt-4">The more you refer, the more you earn!</p>
                    <p className="text-[16px] text-gray-700 mt-4 mb-6">It's simple — help others get the financial support
                        they need, and enjoy rewards in return.</p>
                    <a href="https://docs.google.com/document/d/1YbktntrfZA1sNRSAIYoZ9hnLEncbHHg4B8JEu1GPlLI/edit?usp=sharing">
                        <button className="py-2.5 px-6 text-[16px] font-bold text-white bg-blue-900 hover:bg-blue-950
                         rounded-4xl transition cursor-pointer">Know More</button>
                    </a>
                </div>

                <div className="p-8 w-[44%] rounded-lg shadow-lg hover:shadow-2xl duration-300">
                    <h2 className="text-2xl font-bold pb-2.5 border-b-2 border-gray-300 mb-5 text-blue-900">
                        Become A Partner</h2>
                    <p className="text-[16px] text-gray-700">Earning Opportunity for all existing agents with Capital Care
                        Finance Company Loan Partner Program</p>
                    <p className="text-[16px] text-gray-700 mt-4">Join our exclusive partnership network and unlock
                        these benefits:</p>

                    <div className="my-5 flex flex-row flex-wrap gap-4">
                        {benefits2.map((benifit, idx) => (
                            <div className="py-2.5 px-4 text-[14px] bg-gray-200 rounded-lg" key={idx}>
                                <span className="text-blue-900 text-[16px] mr-1.5">✓</span> {benifit.name}
                            </div>
                        ))}
                    </div>

                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdMrZDEQCbhDQ-4fQHWgkQNLatwP0cXlhYg-z_eIporEpYOhQ/viewform?usp=header">
                        <button className="py-2.5 px-6 text-[16px] font-bold text-white bg-blue-900 hover:bg-blue-950
                         transition rounded-4xl cursor-pointer">Apply</button>
                    </a>
                </div>
            </div>
        </>
    )
}