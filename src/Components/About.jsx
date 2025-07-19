// react icons
import { FiShield, FiUser } from "react-icons/fi";
import { SiTicktick } from "react-icons/si";
import { MdErrorOutline } from "react-icons/md";

// About section
export function About() {
    return (
        <div className="p-12 scroll-mt-36" id="about">
            <h1 className="text-black text-4xl font-bold text-center mb-12">About Us</h1>

            <div className="flex flex-row items-center justify-center gap-8 flex-wrap">
                <div className="p-8 w-[600px] h-[300px] bg-gray-50 rounded-lg hover:shadow-xl transition">
                    <h2 className="text-2xl text-blue-700 font-bold relative after:content-[''] after:block after:w-16
                    after:h-1 after:bg-blue-700 after:mt-2 after:mb-3 after:rounded-full">Who We Are?</h2>
                    <p className="text-[16px] tracking-wider text-gray-700">At Capital Care Finance Company, we simplify
                        financing with fast, hassle-free loan solutions tailored to your needs. With a strong industry
                        presence and customer-first approach, we provide expert guidance to help individuals and businesses
                        achieve their financial goals. From personal to home, business, and property loans, we ensure seamless
                        processing, minimal paperwork, and quick approvals.</p>
                </div>

                <div className="p-8 w-[600px] h-[300px] bg-blue-700 rounded-lg hover:shadow-xl transition">
                    <h2 className="text-2xl text-white font-bold relative after:content-[''] after:block after:w-16
                    after:h-1 after:bg-white after:mt-2 after:mb-3 after:rounded-full">What We Offer</h2>
                    <p className="text-[16px] tracking-wider text-gray-100">At Capital Care Finance Company , we provide a
                        wide range of loan solutions designed to meet your financial needs with ease and efficiency. Whether
                        you need funds for personal use, homeownership, business expansion, or leveraging your property's
                        value, we've got you covered.</p>
                </div>

                <div className="p-8 w-[600px] h-[250px] bg-blue-700 rounded-lg hover:shadow-xl transition">
                    <h2 className="text-2xl text-white font-bold relative after:content-[''] after:block after:w-16
                    after:h-1 after:bg-white after:mt-2 after:mb-3 after:rounded-full">Our Mission</h2>
                    <p className="text-[16px] tracking-wider text-gray-100">At Capital Care Finance Company , we are committed
                        to providing seamless, transparent, and efficient financial solutions. Our mission is to empower
                        individuals and businesses with hassle-free loan services, ensuring quick approvals and minimal
                        paperwork.</p>
                </div>

                <div className="p-8 w-[600px] h-[250px] bg-gray-50 rounded-lg hover:shadow-xl transition">
                    <h2 className="text-2xl text-blue-700 font-bold relative after:content-[''] after:block after:w-16
                    after:h-1 after:bg-blue-700 after:mt-2 after:mb-3 after:rounded-full">Core Values</h2>

                    <div className="flex flex-row flex-wrap gap-5 w-full mt-5">
                        <div className="flex flex-row items-center gap-2.5 w-[45%] text-[16px] rounded-lg bg-gray-100 p-4">
                            <FiShield className="text-2xl text-blue-700" />
                            Integrity</div>

                        <div className="flex flex-row items-center gap-2.5 w-[45%] text-[16px] rounded-lg bg-gray-100 p-4">
                            <FiUser className="text-2xl text-blue-700" />
                            Customer First</div>

                        <div className="flex flex-row items-center gap-2.5 w-[45%] text-[16px] rounded-lg bg-gray-100 p-4">
                            <SiTicktick className="text-xl text-blue-700" />
                            Efficiency</div>

                        <div className="flex flex-row items-center gap-2.5 w-[45%] text-[16px] rounded-lg bg-gray-100 p-4">
                            <MdErrorOutline className="text-2xl text-blue-700" />
                            Innovation</div>
                    </div>
                </div>
            </div>
        </div>
    )
}