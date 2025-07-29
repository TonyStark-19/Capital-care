// import use effect
import { useEffect } from "react";

// AOS animations
import AOS from 'aos';
import 'aos/dist/aos.css';

// react icons
import { GrUserExpert } from "react-icons/gr";
import { AiOutlineStock } from "react-icons/ai";
import { SlCreditCard } from "react-icons/sl";

// Why-us secction
export function WhyUS() {
    // AOS animations
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

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
            <div className="min-b:pt-12 min-v:pb-12 max-b:pb-4 max-b:pt-8 max-e:pb-0 px-6">
                <h1 className="text-black font-bold text-center min-a:mb-12 max-a:mb-10 max-b:mb-6 min-a:text-4xl max-a:text-4xl
                 max-c:text-3xl max-d:text-[26px]" data-aos="fade-up" data-aos-duration="1000">Why Choose Us</h1>

                <div className="flex flex-row flex-wrap justify-center min-a:gap-5 max-a:gap-3 max-c:gap-0">
                    {benifits.map((benifit, idx) => (
                        <div className="min-w-[30%] flex flex-col justify-center items-center p-8" key={idx}
                            data-aos="fade-up" data-aos-duration="1000">
                            <div className="bg-gray-100 rounded-[50%] p-4.5 mb-6">{benifit.icon}</div>
                            <h3 className="text-[20px] font-bold mb-2.5">{benifit.name}</h3>
                            <p className="text-[16px] text-center text-gray-700">{benifit.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex min-b:flex-row max-b:flex-col justify-center gap-5 py-5 min-g:px-10 max-g:px-5">
                <div className="rounded-lg shadow-lg hover:shadow-2xl duration-300 min-a:w-[44%] max-a:w-[49%] max-b:w-full
                 min-g:p-8 max-g:p-4" data-aos="fade-up" data-aos-duration="1000">
                    <h2 className="font-bold pb-2.5 border-b-2 border-gray-300 min-d:text-2xl max-d:text-[20px] text-blue-900
                    min-d:mb-5 max-d:mb-3">Capital Care Finance Company Referral Program</h2>
                    <p className="text-[16px] text-gray-700">Refer your friends, family, or peers to Capital Care Finance
                        Company for any of our offerings — Personal Loan, Business Loan, Mortgage Loan, Car Loan, Overdraft,
                        or Insurance — and earn exciting cashback rewards! 💸</p>
                    <p className="text-[16px] text-gray-700 mt-4">The more you refer, the more you earn!</p>
                    <p className="text-[16px] text-gray-700 mt-4 min-d:mb-6 max-d:mb-5">It's simple — help others get the
                        financial support they need, and enjoy rewards in return.</p>
                    <a href="https://docs.google.com/document/d/1YbktntrfZA1sNRSAIYoZ9hnLEncbHHg4B8JEu1GPlLI/edit?usp=sharing">
                        <button className="font-bold text-white bg-blue-900 hover:bg-blue-950 rounded-4xl transition
                        cursor-pointer min-d:py-2.5 min-d:px-6 max-d:py-2 max-d:px-5 min-d:text-[16px] max-d:text-[15px]">
                            Know More
                        </button>
                    </a>
                </div>

                <div className="rounded-lg shadow-lg hover:shadow-2xl duration-300 min-a:w-[44%] max-a:w-[49%] max-b:w-full
                 min-g:p-8 max-g:p-4" data-aos="fade-up" data-aos-duration="1000">
                    <h2 className="font-bold pb-2.5 border-b-2 border-gray-300 text-blue-900 min-d:text-2xl max-d:text-[20px]
                     min-d:mb-5 max-d:mb-3">
                        Become A Partner</h2>
                    <p className="text-[16px] text-gray-700">Earning Opportunity for all existing agents with Capital Care
                        Finance Company Loan Partner Program</p>
                    <p className="text-[16px] text-gray-700 mt-4">Join our exclusive partnership network and unlock
                        these benefits:</p>

                    <div className="my-5 flex flex-row flex-wrap gap-4">
                        {benefits2.map((benifit, idx) => (
                            <div className="text-[14px] bg-gray-200 rounded-lg min-d:py-2.5 min-d:px-4 max-d:py-2 max-d:px-3"
                                key={idx}>
                                <span className="text-blue-900 text-[16px] mr-1.5">✓</span> {benifit.name}
                            </div>
                        ))}
                    </div>

                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdMrZDEQCbhDQ-4fQHWgkQNLatwP0cXlhYg-z_eIporEpYOhQ/viewform?usp=header">
                        <button className="font-bold text-white bg-blue-900 hover:bg-blue-950 transition rounded-4xl
                        cursor-pointer min-d:py-2.5 min-d:px-6 max-d:py-2 max-d:px-5 min-d:text-[16px] max-d:text-[15px]">
                            Apply
                        </button>
                    </a>
                </div>
            </div>
        </>
    )
}