import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-full bg-[#101727]">
            <div className='w-10/12 mx-auto bg-[#1B1B1B] text-white py-16 px-6 p-[120px]  flex flex-col md:flex-row justify-between gap-10'>
                <div className="grid gap-5 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 justify-between w-full" >
                    <div className="space-y-4 col-span-2">
                        <h1 className="text-3xl font-bold">Gigitools</h1>
                        <p className="text-[16px] opacity-60">
                            Premium digital tools for creators, <br />
                            professionals, and businesses. <br />
                            Work smarter with our suite of powerful tools.
                        </p>
                    </div>
                    <ul className="space-y-4 opacity-80 text-[16px]">
                        <li className="text-[20px] font-bold opacity-100">Product</li>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Templates</li>
                        <li>Integrations</li>
                    </ul>
                    <ul className="space-y-4 opacity-80 text-[16px]">
                        <li className="text-[20px] font-bold opacity-100">Product</li>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Careers</li>
                        <li>Press</li>
                    </ul>
                    <ul className="space-y-4 opacity-80 text-[16px]">
                        <li className="text-[20px] font-bold opacity-100">Resources</li>
                        <li>Documentation</li>
                        <li>Help Center</li>
                        <li>Community</li>
                        <li>Contact</li>
                    </ul>
                    <div className="flex flex-col space-y-4">
                        <h1 className="text-[20px]">Social Links</h1>
                        <ul className="flex gap-6 text-3xl">
                            <span className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center">
                                <li className="text-black flex items-center justify-center"><FaTwitterSquare /></li>
                            </span>
                            <span className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center">
                                <li className="text-black flex items-center justify-center"><FaFacebookSquare /></li>
                            </span>
                            <span className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center">
                                <li className="text-black flex items-center justify-center"><FaInstagram /></li>
                            </span>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex justify-between text-white w-10/12 mx-auto py-6 text-[14px] opacity-60   ">
                <p>© 2026 Digitools. All rights reserved.</p>
                <ul className="flex gap-5">
                    <li>Privacy Policy  </li>
                    <li>Terms of Service</li>
                    <li>Cookies</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;