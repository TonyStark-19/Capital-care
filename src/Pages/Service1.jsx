// react icons
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

// import link
import { Link } from 'react-router-dom';

// service 1 : home loan
export function ServiceOne() {
    return (
        <>
            <Navbar />
            <Header />
            <Info />
            <Footer />
        </>
    )
}

// Navbar component
export function Navbar() {
    return (
        <div className="w-full px-30 py-4 flex flex-row justify-between
        bg-white border-2 border-b-gray-300 top-0 fixed z-40">
            <div className="flex flex-row items-center gap-2 cursor-pointer">
                <img className="w-12" src="images\logo.png" alt="logo"></img>
                <div className="text-[18px] font-semibold">Capital Care Finance Company</div>
            </div>

            <ul className="flex flex-row items-center gap-8 text-[17px]">
                <li>
                    <Link
                        to="/"
                        className="cursor-pointer font-semibold text-gray-700 hover:text-blue-700"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/"
                        className="cursor-pointer font-semibold text-gray-700 hover:text-blue-700"
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        to="/"
                        className="cursor-pointer font-semibold text-gray-700 hover:text-blue-700"
                    >
                        Services
                    </Link>
                </li>
                <li>
                    <Link
                        to="/"
                        className="cursor-pointer font-semibold text-gray-700 hover:text-blue-700"
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    )
}

// header image
export function Header() {
    return (
        <div className='relative h-120 w-full overflow-hidden'>
            <img
                src='images/insurance.jpeg'
                alt='business'
                className="w-full h-full object-cover">
            </img>

            <div className="absolute inset-0 bg-black/55 flex flex-col justify-center items-center
            p-8 text-white rounded-lg">
                <h2 className="text-[40px] font-bold mb-2 mt-18">The Care of Your Financial Needs</h2>
                <p className="mb-4 text-[20px]">Your trusted partner in financial solutions, providing seamless services
                    in loans and insurance.</p>
                <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded transition 
                        cursor-pointer text-[16px] uppercase font-bold">
                    Apply
                </button>
            </div>
        </div>
    )
}

// button component
export function Button() {
    return (
        <button className="px-5 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded transition 
                        cursor-pointer text-[16px] uppercase font-bold">
            Apply
        </button>
    )
}

// information
function Info() {
    return (
        <div className='w-[80%] shadow-xl flex flex-row mx-auto'>
            <div className='w-60 py-5 pr-5 bg-gray-100 flex flex-col gap-2.5'>
                <div className='p-4 text-[16px] hover:bg-gray-300 duration-300 rounded-r-xl cursor-pointer'>Features</div>
                <div className='p-4 text-[16px] hover:bg-gray-300 duration-300 rounded-r-xl cursor-pointer'>Eligibility</div>
                <div className='p-4 text-[16px] hover:bg-gray-300 duration-300 rounded-r-xl cursor-pointer'>Documentation</div>
                <div className='p-4 text-[16px] hover:bg-gray-300 duration-300 rounded-r-xl cursor-pointer'>Rates & Fees</div>
                <div className='p-4 text-[16px] hover:bg-gray-300 duration-300 rounded-r-xl cursor-pointer'>FAQs</div>
            </div>

            <div className='w-full p-8'>
                <div>
                    <h2 className='text-4xl font-bold mb-6'>About Home Loan</h2>

                    <p className='text-[18px] mb-2'>Tailored Housing Finance Solutions to Build, Expand, or Upgrade Your Dream
                        Home</p>
                    <p className='text-[18px] mb-2'>We collaborate with leading financial institutions to provide customized housing
                        finance options with attractive interest rates and manageable repayment plans, designed to suit your
                        specific needs.</p>
                    <p className='text-[18px] mb-2'>
                        <span className='font-semibold'>Loan for Building Your Home: </span>If you own land but need financial
                        backing to construct your residence, this option provides the support required to bring your home to
                        life—from laying the foundation to completing major construction work.</p>
                    <p className='text-[18px] mb-2'>
                        <span className='font-semibold'>Loan for Home Expansion: </span> Planning to add more space or create an
                        additional floor? Whether it's an annexe, extra room, or structural extension, this loan helps you grow
                        your living space without financial strain.</p>
                    <p className='text-[18px] mb-2'>
                        <span className='font-semibold'>Loan for Home Renovation: </span>Give your home a fresh look with a
                        renovation loan that finances everything from fixing aging interiors to upgrading lighting, plumbing,
                        and more—enhancing both comfort and aesthetics.</p>
                    <p className='text-[18px] mb-2'>
                        <span className='font-semibold'>Housing Loan for NRIs: </span>For Non-Resident Indians looking to
                        purchase residential property in India, this loan option offers dedicated support with a streamlined
                        process tailored to overseas applicants.</p>

                    <h3 className='text-[20px] font-bold mt-3 mb-4'>Why Choose Capital Care Finance Company?</h3>

                    <div className='flex flex-row flex-wrap gap-4 mb-5'>
                        <div className='bg-gray-200 p-2.5 rounded-md text-[16px]'>Easy Documentation</div>
                        <div className='bg-gray-200 p-2.5 rounded-md text-[16px]'>Quick Approval</div>
                        <div className='bg-gray-200 p-2.5 rounded-md text-[16px]'>Higher Loan Amounts</div>
                        <div className='bg-gray-200 p-2.5 rounded-md text-[16px]'>Flexible Repayment</div>
                        <div className='bg-gray-200 p-2.5 rounded-md text-[16px]'>Flexible Tenor</div>
                        <div className='bg-gray-200 p-2.5 rounded-md text-[16px]'>Attractive Interest Rates</div>
                        <div className='bg-gray-200 p-2.5 rounded-md text-[16px]'>Transparent Process</div>
                    </div>

                    <Button />

                </div>

                <div className='hidden'>
                    <h2 className='text-4xl font-bold mb-6'>Eligibility Criteria</h2>

                    <p className='text-[18px] mb-2'>To qualify for a home loan with Capital Care Finance Company, you must meet
                        the following criteria:</p>

                    <ul className='list-disc list-inside mb-4'>
                        <li className='text-[18px] mb-2'>Age: 21-65 years</li>
                        <li className='text-[18px] mb-2'>Employment: Salaried or Self-employed professionals</li>
                        <li className='text-[18px] mb-2'>Minimum Income: ₹3,00,000 per annum</li>
                        <li className='text-[18px] mb-2'>Credit Score: 700 or above</li>
                        <li className='text-[18px] mb-2'>Stable job/business history of at least 2 years</li>
                    </ul>

                    <Button />
                </div>

                <div className='hidden'>
                    <h2 className='text-4xl font-bold mb-6'>Required Documentation</h2>

                    <h3 className='text-[20px] font-bold mt-3 mb-4'>For Salaried Individuals:</h3>

                    <ul className='list-disc list-inside mb-4'>
                        <li className='text-[18px] mb-2'>Identity Proof (Aadhaar/PAN/Passport)</li>
                        <li className='text-[18px] mb-2'>Address Proof</li>
                        <li className='text-[18px] mb-2'>Last 3 months' salary slips</li>
                        <li className='text-[18px] mb-2'>Bank statements for the last 6 months</li>
                        <li className='text-[18px] mb-2'>Form 16 or Income Tax Returns</li>
                    </ul>

                    <h3 className='text-[20px] font-bold mt-3 mb-4'>For Self-Employed:</h3>

                    <ul className='list-disc list-inside mb-6'>
                        <li className='text-[18px] mb-2'>Business registration documents</li>
                        <li className='text-[18px] mb-2'>Income Tax Returns for last 2 years</li>
                        <li className='text-[18px] mb-2'>Profit & Loss statements</li>
                        <li className='text-[18px] mb-2'>Business bank statements</li>
                    </ul>

                    <Button />
                </div>

                <div className='hidden'>
                    <h2 className='text-4xl font-bold mb-6'>Rates & Fees</h2>

                    <table className='w-[80%] border-2 border-blue-100 rounded-2xl'>
                        <tbody>
                            <tr className='border-b-2 border-b-blue-100'>
                                <th className='text-[19px] font-semibold py-2.5 px-4'>Particulars</th>
                                <th className='text-[19px] font-semibold py-2.5 px-4'>Charges</th>
                            </tr>
                            <tr className='border-b-2 border-b-blue-100'>
                                <td className='text-[18px] py-2.5 px-4'>Loan Processing Fees</td>
                                <td className='text-[18px] py-2.5 px-4'>0.25% to 2% of Loan Amount</td>
                            </tr>
                            <tr className='border-b-2 border-b-blue-100'>
                                <td className='text-[18px] py-2.5 px-4'>Loan Cancellation</td>
                                <td className='text-[18px] py-2.5 px-4'>Nill - 5% (according to Bank/NBFC)</td>
                            </tr>
                            <tr className='border-b-2 border-b-blue-100'>
                                <td className='text-[18px] py-2.5 px-4'>Stamp Duty Charges</td>
                                <td className='text-[18px] py-2.5 px-4'>As per the Value of the Property and State Tax</td>
                            </tr>
                            <tr className='border-b-2 border-b-blue-100'>
                                <td className='text-[18px] py-2.5 px-4'>Legal Fees</td>
                                <td className='text-[18px] py-2.5 px-4'>As per actual</td>
                            </tr>
                            <tr className='border-b-2 border-b-blue-100'>
                                <td className='text-[18px] py-2.5 px-4'>Penal Charges</td>
                                <td className='text-[18px] py-2.5 px-4'>Usually 2% per month</td>
                            </tr>
                            <tr className='border-b-2 border-b-blue-100'>
                                <td className='text-[18px] py-2.5 px-4'>EMI / Cheque Bounce Charges</td>
                                <td className='text-[18px] py-2.5 px-4'>Approx 500/-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='hidden'>
                    <h2 className='text-4xl font-bold mb-6'>Frequently Asked Questions</h2>
                </div>
            </div>
        </div>
    )
}

// footer section
export function Footer() {
    return (
        <div className="pt-12 pb-8 px-5 bg-blue-950 text-white">
            <div className="flex flex-row justify-evenly">
                <div className="flex flex-col">
                    <h4 className="text-[18px] font-bold mb-4">Capital Care Finance Company</h4>
                    <p>Your trusted partner in financial solutions.</p>
                </div>

                <div className="flex flex-col">
                    <h4 className="text-[18px] font-bold mb-4">Quick Links</h4>
                    <ul>
                        <li className="text-[16px] mb-2 cursor-pointer hover:ml-1 duration-300">
                            <Link
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="text-[16px] mb-2 cursor-pointer hover:ml-1 duration-300">
                            <Link
                                to="/"
                            >
                                About
                            </Link>
                        </li>
                        <li className="text-[16px] mb-2 cursor-pointer hover:ml-1 duration-300">
                            <Link
                                to="/"
                            >
                                Services
                            </Link>
                        </li>
                        <li className="text-[16px] mb-2 cursor-pointer hover:ml-1 duration-300">
                            <Link
                                to="/"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col">
                    <h4 className="text-[18px] font-bold mb-4">Services</h4>
                    <ul>
                        <li className="text-[16px] mb-2 cursor-pointer">Home Loan</li>
                        <li className="text-[16px] mb-2 cursor-pointer">Business Loan</li>
                        <li className="text-[16px] mb-2 cursor-pointer">Personal Loan</li>
                        <li className="text-[16px] mb-2 cursor-pointer">Insurance</li>
                    </ul>
                </div>

                <div className="flex flex-col">
                    <h4 className="text-[18px] font-bold mb-4">Connect With Us</h4>

                    <div className="flex flex-row gap-3">
                        <a href="https://www.facebook.com/share/18heUSmytm/?mibextid=wwXIfr">
                            <div className="border-2 border-white rounded-[50%] p-2 hover:bg-white hover:text-[#39559e] 
                        cursor-pointer duration-300">
                                <FaFacebook className="text-xl" />
                            </div>
                        </a>

                        <a href="https://www.instagram.com/ccfcfirst?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                            <div className="border-2 border-white rounded-[50%] p-2 hover:bg-white hover:text-[#e1306c] 
                        cursor-pointer duration-300">
                                <FaInstagram className="text-xl" />
                            </div>
                        </a>

                        <a href="https://www.linkedin.com/company/capital-care-finance-company/posts/?feedView=all">
                            <div className="border-2 border-white rounded-[50%] p-2 hover:bg-white hover:text-[#2980b0] 
                        cursor-pointer duration-300">
                                <FaLinkedin className="text-xl" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div className="text-[16px] text-align w-full pt-12">
                <p className="text-center">© 2025 Capital Care Finance Company. All rights reserved.</p>
            </div>
        </div>
    )
} 