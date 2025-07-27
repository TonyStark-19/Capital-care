// react icons
import { IoCallOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";

// contact section
export function Contact() {
    // contact info
    const contactInfo = [
        { icon: <IoCallOutline className="text-[22px]" />, text: "+91 8743843171", },
        { icon: <BiSupport className="text-[22px]" />, text: "support@ccfcfirst.com", },
        { icon: <SlLocationPin className="text-[22px]" />, text: "207 2nd Floor, Durga Chamber RDC, Raj Nagar, Ghaziabad (U.P) - 201002", },
    ];

    return (
        <div className="py-12 px-6" id="contact">
            <h1 className="text-black font-bold text-center min-a:mb-12 max-a:mb-10 max-b:mb-6
            min-a:text-4xl max-a:text-4xl max-c:text-3xl max-c:mb-3 max-d:text-[26px] max-d:mb-0">Contact Us</h1>

            <div className="flex flex-row justify-center">
                <div className="p-8 min-w-[45%] shadow-xl rounded-l-lg">
                    <h2 className="text-[32px] mb-6 font-bold">Get in Touch</h2>

                    <form className="flex flex-col">
                        <label htmlFor="full-name" className="mb-2 text-sm font-medium text-gray-600">Full Name</label>
                        <input
                            type="text"
                            id="full-name"
                            name="full-name"
                            placeholder="Your full name"
                            required
                            className="border-2 border-gray-200 rounded-md p-3 mb-6"
                        />

                        <label htmlFor="email-address" className="mb-2 text-sm font-medium text-gray-600">Email Address</label>
                        <input
                            type="email"
                            id="email-address"
                            name="email-address"
                            placeholder="Email address"
                            required
                            className="border-2 border-gray-200 rounded-md p-3 mb-6"
                        />

                        <label htmlFor="message" className="mb-2 text-sm font-medium text-gray-600">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Write message here..."
                            rows={5}
                            required
                            className="border-2 border-gray-200 rounded-md p-3 mb-6 resize-none"
                        />

                        <button
                            type="submit"
                            className="py-2.5 px-4 bg-blue-900 hover:bg-blue-950 text-white font-semibold rounded-md
                            cursor-pointer transition"
                        >
                            Send Message
                        </button>
                    </form>

                </div>

                <div className="p-8 min-w-[45%] shadow-xl rounded-r-lg text-white bg-blue-700">
                    <h2 className="text-[32px] mb-6 font-bold">Contact Information</h2>

                    {contactInfo.map((item, index) => (
                        <div key={index} className="mb-4 flex flex-row gap-2.5 items-center text-[16px]">
                            {item.icon}
                            {item.text}
                        </div>
                    ))}

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3500.5635251397425!2d77.4374120755023!3d28.67278497564277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDQwJzIyLjAiTiA3N8KwMjYnMjQuMCJF!5e0!3m2!1sen!2sin!4v1746272669337!5m2!1sen!2sin"
                        width="100%"
                        height="320"
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