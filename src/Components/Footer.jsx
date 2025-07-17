// footer section
export function Footer() {
    return (
        <div className="py-12 px-5 bg-blue-600 text-white">
            <div className="flex flex-row justify-evenly">
                <div className="flex flex-col">
                    <h4 className="text-[18px] font-bold mb-4">Capital Care Finance Company</h4>
                    <p>Your trusted partner in financial solutions.</p>
                </div>

                <div className="flex flex-col">
                    <h4 className="text-[18px] font-bold mb-4">Quick Links</h4>
                    <ul>
                        <li className="text-[16px] mb-2">Home</li>
                        <li className="text-[16px] mb-2">About</li>
                        <li className="text-[16px] mb-2">Services</li>
                        <li className="text-[16px] mb-2">Contact</li>
                    </ul>
                </div>

                <div className="flex flex-col">
                    <h4 className="text-[18px] font-bold mb-4">Services</h4>
                    <ul>
                        <li className="text-[16px] mb-2">Home Loan</li>
                        <li className="text-[16px] mb-2">Business Loan</li>
                        <li className="text-[16px] mb-2">Personal Loan</li>
                        <li className="text-[16px] mb-2">Insurance</li>
                    </ul>
                </div>

                <div className="flex flex-col">
                    <h4 className="text-[18px] font-bold mb-4">Connect With Us</h4>
                </div>
            </div>

            <div className="text-[16px] text-align w-full pt-12">
                <p className="text-center">© 2025 Capital Care Finance Company. All rights reserved.</p>
            </div>
        </div>
    )
} 