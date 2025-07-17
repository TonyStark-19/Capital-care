// react icons
import { GrUserExpert } from "react-icons/gr";
import { AiOutlineStock } from "react-icons/ai";
import { SlCreditCard } from "react-icons/sl";

// Why-us secction
export function WhyUS() {
    return (
        <>
            <div className="py-12 px-6">
                <h1 className="text-black text-4xl font-bold text-center mb-12">Why Choose Us</h1>

                <div className="flex flex-row justify-center gap-5">
                    <div className="w-[30%] flex flex-col justify-center items-center p-8">
                        <GrUserExpert className="text-blue-700 text-3xl mb-6" />
                        <h3 className="text-[20px] font-bold mb-2.5">Expert Guidance</h3>
                        <p className="text-[16px] text-gray-700">Professional team with years of experience</p>
                    </div>

                    <div className="w-[30%] flex flex-col justify-center items-center p-8">
                        <AiOutlineStock className="text-blue-700 text-3xl mb-6" />
                        <h3 className="text-[20px] font-bold mb-2.5">Fast Processing</h3>
                        <p className="text-[16px] text-gray-700">Quick approvals with minimal documentation</p>
                    </div>

                    <div className="w-[30%] flex flex-col justify-center items-center p-8">
                        <SlCreditCard className="text-blue-700 text-3xl mb-6" />
                        <h3 className="text-[20px] font-bold mb-2.5">Competitive Rates</h3>
                        <p className="text-[16px] text-gray-700">Best-in-market rates for all services</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-row justify-center gap-5 py-5 px-10">
                <div className="p-8 w-[44%] rounded-lg shadow-lg hover:shadow-2xl transition">
                    <h2 className="text-2xl font-bold pb-2.5 border-b-2 border-gray-300 mb-5">Capital Care Finance
                        Company Referral Program</h2>
                    <p className="text-[16px] text-gray-700">Refer your friends, family, or peers to Capital Care Finance
                        Company for any of our offerings — Personal Loan, Business Loan, Mortgage Loan, Car Loan, Overdraft,
                        or Insurance — and earn exciting cashback rewards! 💸</p>
                    <p className="text-[16px] text-gray-700 mt-4">The more you refer, the more you earn!</p>
                    <p className="text-[16px] text-gray-700 mt-4 mb-6">It's simple — help others get the financial support
                        they need, and enjoy rewards in return.</p>
                    <button className="py-2.5 px-6 text-[16px] font-bold text-white bg-blue-900 rounded-4xl">Know More</button>
                </div>

                <div className="p-8 w-[44%] rounded-lg shadow-lg hover:shadow-2xl transition">
                    <h2 className="text-2xl font-bold pb-2.5 border-b-2 border-gray-300 mb-5">Capital Care Finance
                        Company Referral Program</h2>
                    <p className="text-[16px] text-gray-700">Refer your friends, family, or peers to Capital Care Finance
                        Company for any of our offerings — Personal Loan, Business Loan, Mortgage Loan, Car Loan, Overdraft,
                        or Insurance — and earn exciting cashback rewards! 💸</p>
                    <p className="text-[16px] text-gray-700 mt-4">The more you refer, the more you earn!</p>
                    <p className="text-[16px] text-gray-700 mt-4 mb-6">It's simple — help others get the financial support
                        they need, and enjoy rewards in return.</p>
                    <button className="py-2.5 px-6 text-[16px] font-bold text-white bg-blue-900 rounded-4xl">Know More</button>
                </div>
            </div>
        </>
    )
}