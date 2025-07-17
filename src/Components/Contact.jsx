// react icons
import { IoCallOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";

// contact section
export function Contact() {
    return (
        <div className="py-12 px-6">
            <h1 className="text-black text-4xl font-bold text-center mb-12">Contact Us</h1>

            <div className="flex flex-row justify-center">
                <div className="p-8 min-w-[45%] shadow-xl rounded-l-lg">
                    <h2 className="text-[32px] mb-6 font-bold">Get in Touch</h2>

                    <form className="flex flex-col">
                        <input
                            type="text"
                            name="full-name"
                            placeholder="Your full name"
                            className="border-2 border-gray-200 rounded-md p-3 mb-6"></input>

                        <input
                            type="email"
                            name="email-address"
                            placeholder="Email address"
                            className="border-2 border-gray-200 rounded-md p-3 mb-6"></input>

                        <textarea
                            placeholder="Write message here.."
                            rows={5}
                            className="border-2 border-gray-200 rounded-md p-3 mb-6">
                        </textarea>

                        <button className="py-2.5 px-4 bg-blue-900 text-white rounded-md cursor-pointer">Send Message</button>
                    </form>
                </div>

                <div className="p-8 min-w-[45%] shadow-xl rounded-r-lg text-white bg-blue-600">
                    <h2 className="text-[32px] mb-6 font-bold">Contact Information</h2>

                    <div className="mb-4 flex flex-row gap-2.5 items-center text-[16px]">
                        <IoCallOutline className="text-[22px]" />
                        +91 8743843171
                    </div>

                    <div className="mb-4 flex flex-row gap-2.5 items-center text-[16px]">
                        <BiSupport className="text-[22px]" />
                        support@ccfcfirst.com
                    </div>

                    <div className="mb-4 flex flex-row gap-2.5 items-center text-[16px]">
                        <SlLocationPin className="text-[22px]" />
                        207 2nd Floor, Durga Chamber RDC, Raj Nagar, Ghaziabad (U.P) - 201002
                    </div>
                </div>
            </div>
        </div>
    )
}