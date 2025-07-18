// react icons
import { IoCallOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";

// contact section
export function Contact() {
    return (
        <div className="py-12 px-6" id="contact">
            <h1 className="text-black text-4xl font-bold text-center mb-12">Contact Us</h1>

            <div className="flex flex-row justify-center">
                <div className="p-8 min-w-[45%] shadow-xl rounded-l-lg">
                    <h2 className="text-[32px] mb-6 font-bold">Get in Touch</h2>

                    <form className="flex flex-col">
                        <input
                            type="text"
                            name="full-name"
                            placeholder="Your full name"
                            required
                            className="border-2 border-gray-200 rounded-md p-3 mb-6"></input>

                        <input
                            type="email"
                            name="email-address"
                            placeholder="Email address"
                            required
                            className="border-2 border-gray-200 rounded-md p-3 mb-6"></input>

                        <textarea
                            placeholder="Write message here.."
                            rows={6}
                            className="border-2 border-gray-200 rounded-md p-3 mb-6 resize-none">
                        </textarea>

                        <button className="py-2.5 px-4 bg-blue-900 hover:bg-blue-950 text-white font-semibold rounded-md
                         cursor-pointer transition">Send Message</button>
                    </form>
                </div>

                <div className="p-8 min-w-[45%] shadow-xl rounded-r-lg text-white bg-blue-700">
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

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3500.5635251397425!2d77.4374120755023!3d28.67278497564277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDQwJzIyLjAiTiA3N8KwMjYnMjQuMCJF!5e0!3m2!1sen!2sin!4v1746272669337!5m2!1sen!2sin"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </div>
    )
}