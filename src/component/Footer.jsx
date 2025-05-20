import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

                {/* Contact Info */}
                <div>
                    <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
                    <p>Email: support@example.com</p>
                    <p>Phone: +880 1234 567890</p>
                    <p>Address: Dhaka, Bangladesh</p>
                </div>

                {/* Terms & Privacy */}
                <div>
                    <h2 className="text-xl font-semibold mb-3">Legal</h2>
                    <ul className="space-y-2">
                        <li><a href="/terms" className="hover:underline">Terms & Conditions</a></li>
                        <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h2 className="text-xl font-semibold mb-3">Follow Us</h2>
                    <div className="flex space-x-5">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF className="text-2xl hover:text-blue-500 transition duration-300" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="text-2xl hover:text-blue-400 transition duration-300" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-2xl hover:text-pink-500 transition duration-300" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="text-center text-sm text-gray-400 mt-10 border-t border-gray-700 pt-4">
                © {new Date().getFullYear()} Roommate Finder. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
