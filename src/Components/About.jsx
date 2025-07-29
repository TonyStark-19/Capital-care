// react icons
import { FiShield, FiUser } from "react-icons/fi";
import { SiTicktick } from "react-icons/si";
import { MdErrorOutline } from "react-icons/md";

// import use effect
import { useEffect } from "react";

// AOS animations
import AOS from 'aos';
import 'aos/dist/aos.css';

// About section
export function About() {
    // AOS animations
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    // core values
    const values = [
        { icon: <FiShield className="min-f:text-2xl max-f:text-xl text-blue-700" />, name: "Integrity" },
        { icon: <FiUser className="min-f:text-2xl max-f:text-xl text-blue-700" />, name: "Customer First" },
        { icon: <SiTicktick className="min-f:text-2xl max-f:text-xl text-blue-700" />, name: "Efficiency" },
        { icon: <MdErrorOutline className="min-f:text-2xl max-f:text-xl text-blue-700" />, name: "Efficiency" }
    ];

    return (
        <div className="scroll-mt-36 min-a:p-12 max-a:p-6 max-a:pt-10" id="about">
            <h1 className="text-black font-bold text-center min-a:mb-12 max-a:mb-10 max-b:mb-6 min-a:text-4xl max-a:text-4xl
            max-c:text-3xl max-d:text-[26px]" data-aos="fade-up" data-aos-duration="1000">About Us</h1>

            <div className="flex flex-row flex-wrap items-center justify-center gap-8">
                <div className="bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition min-a:w-[600px] max-a:w-[500px]
                min-a:p-8 max-a:p-6 max-f:p-4 max-h:w-full min-h:min-h-[250px] max-h:min-h-[150px]"
                    data-aos="fade-up" data-aos-duration="1000">
                    <h2 className="text-blue-700 font-bold relative after:content-[''] after:block after:w-16 after:h-1
                    after:bg-blue-700 after:mt-2 after:mb-3 after:rounded-full min-f:text-2xl max-f:text-[22px]">Who We Are?</h2>
                    <p className="text-[16px] min-f:tracking-wider max-f:tracking-normal text-gray-700">At Capital Care
                        Finance Company, we simplify financing with fast, hassle-free loan solutions tailored to your needs.
                        With a strong industry presence and customer-first approach, we provide expert guidance to help individuals
                        and businesses achieve their financial goals. From personal to home, business, and property loans, we
                        ensure seamless processing, minimal paperwork, and quick approvals.</p>
                </div>

                <div className="bg-blue-700 rounded-lg shadow-md hover:shadow-xl transition min-a:w-[600px] max-a:w-[500px]
                min-a:p-8 max-a:p-6 max-f:p-4 max-h:w-full min-h:min-h-[290px] max-h:min-h-[150px]"
                    data-aos="fade-up" data-aos-duration="1000">
                    <h2 className="text-white font-bold relative after:content-[''] after:block after:w-16 after:h-1
                    after:bg-white after:mt-2 after:mb-3 after:rounded-full min-f:text-2xl max-f:text-[22px]">What We Offer</h2>
                    <p className="text-[16px] min-f:tracking-wider max-f:tracking-normal text-gray-100">At Capital Care Finance
                        Company , we provide a wide range of loan solutions designed to meet your financial needs with ease and
                        efficiency. Whether you need funds for personal use, homeownership, business expansion, or leveraging
                        your property's value, we've got you covered.</p>
                </div>

                <div className="bg-blue-700 rounded-lg shadow-md hover:shadow-xl transition min-a:w-[600px] max-a:w-[500px]
                min-a:p-8 max-a:p-6 max-f:p-4 max-h:w-full min-h:min-h-[260px] max-h:min-h-[150px]"
                    data-aos="fade-up" data-aos-duration="1000">
                    <h2 className="text-white font-bold relative after:content-[''] after:block after:w-16 after:h-1
                    after:bg-white after:mt-2 after:mb-3 after:rounded-full min-f:text-2xl max-f:text-[22px]">Our Mission</h2>
                    <p className="text-[16px] min-f:tracking-wider max-f:tracking-normal text-gray-100">At Capital Care Finance
                        Company , we are committed to providing seamless, transparent, and efficient financial solutions.
                        Our mission is to empower individuals and businesses with hassle-free loan services, ensuring quick
                        approvals and minimal paperwork.</p>
                </div>

                <div className="bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition min-a:w-[600px] max-a:w-[500px]
                min-a:p-8 max-a:p-6 max-f:p-4 max-h:w-full min-h:min-h-[250px] max-h:min-h-[150px]"
                    data-aos="fade-up" data-aos-duration="1000">
                    <h2 className="text-blue-700 font-bold relative after:content-[''] after:block after:w-16 after:h-1
                    after:bg-blue-700 after:mt-2 after:mb-3 after:rounded-full min-f:text-2xl max-f:text-[22px]">Core Values</h2>

                    <div className="flex min-d:flex-row max-d:flex-col flex-wrap gap-5 w-full mt-5">
                        {values.map((value, idx) => (
                            <div key={idx}
                                className="flex flex-row items-center gap-2.5 text-[16px] rounded-lg bg-gray-100
                                hover:bg-gray-200/80 duration-200 min-f:p-4 max-f:p-2.5 min-d:w-[45%] max-d:w-full">
                                {value.icon} {value.name}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}