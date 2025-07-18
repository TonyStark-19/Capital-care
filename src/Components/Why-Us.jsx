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
                        <div className="bg-gray-100 rounded-[50%] p-4.5 mb-6">
                            <GrUserExpert className="text-blue-800 text-3xl" />
                        </div>
                        <h3 className="text-[20px] font-bold mb-2.5">Expert Guidance</h3>
                        <p className="text-[16px] text-gray-700">Professional team with years of experience</p>
                    </div>

                    <div className="w-[30%] flex flex-col justify-center items-center p-8">
                        <div className="bg-gray-100 rounded-[50%] p-4.5 mb-6">
                            <AiOutlineStock className="text-blue-800 text-3xl" />
                        </div>
                        <h3 className="text-[20px] font-bold mb-2.5">Fast Processing</h3>
                        <p className="text-[16px] text-gray-700">Quick approvals with minimal documentation</p>
                    </div>

                    <div className="w-[30%] flex flex-col justify-center items-center p-8">
                        <div className="bg-gray-100 rounded-[50%] p-4.5 mb-6">
                            <SlCreditCard className="text-blue-800 text-3xl" />
                        </div>
                        <h3 className="text-[20px] font-bold mb-2.5">Competitive Rates</h3>
                        <p className="text-[16px] text-gray-700">Best-in-market rates for all services</p>
                    </div>
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
                    <button className="py-2.5 px-6 text-[16px] font-bold text-white bg-blue-900 hover:bg-blue-950 rounded-4xl
                    transition cursor-pointer">Know More</button>
                </div>

                <div className="p-8 w-[44%] rounded-lg shadow-lg hover:shadow-2xl duration-300">
                    <h2 className="text-2xl font-bold pb-2.5 border-b-2 border-gray-300 mb-5 text-blue-900">
                        Become A Partner</h2>
                    <p className="text-[16px] text-gray-700">Earning Opportunity for all existing agents with Capital Care
                        Finance Company Loan Partner Program</p>
                    <p className="text-[16px] text-gray-700 mt-4">Join our exclusive partnership network and unlock
                        these benefits:</p>

                    <div className="my-5 flex flex-row flex-wrap gap-4">
                        <div className="py-2.5 px-4 text-[14px] bg-gray-200 rounded-lg">
                            <span className="text-blue-900 text-[16px] mr-1.5">✓</span>
                            Competitive Commission Rates
                        </div>

                        <div className="py-2.5 px-4 text-[14px] bg-gray-200 rounded-lg">
                            <span className="text-blue-900 text-[16px] mr-1.5">✓</span>
                            Exclusive Partner Portal
                        </div>

                        <div className="py-2.5 px-4 text-[14px] bg-gray-200 rounded-lg">
                            <span className="text-blue-900 text-[16px] mr-1.5">✓</span>
                            Marketing Support
                        </div>

                        <div className="py-2.5 px-4 text-[14px] bg-gray-200 rounded-lg">
                            <span className="text-blue-900 text-[16px] mr-1.5">✓</span>
                            Dedicated Relationship Manager
                        </div>
                    </div>

                    <button className="py-2.5 px-6 text-[16px] font-bold text-white bg-blue-900 hover:bg-blue-950 transition
                     rounded-4xl cursor-pointer">Apply</button>
                </div>
            </div>
        </>
    )
}