// Footer.jsx
import React, { useState } from 'react';
import { 
  FaShoppingBag, FaFacebookF, FaInstagram, FaTwitter, 
  FaYoutube, FaPaperPlane, FaGooglePlay, FaApple,
  FaCcVisa, FaCcMastercard, FaCcAmex, FaCcPaypal
} from 'react-icons/fa';
import { HiChevronRight } from 'react-icons/hi';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscriptionStatus('success');
      setTimeout(() => {
        setSubscriptionStatus('');
        setEmail('');
      }, 3000);
    } else {
      setSubscriptionStatus('error');
      setTimeout(() => setSubscriptionStatus(''), 3000);
    }
  };

  const quickLinks = [
    { name: 'Home', url: '#' },
    { name: 'New Arrivals', url: '#' },
    { name: 'Best Sellers', url: '#' },
    { name: 'Deals & Offers', url: '#' },
    { name: 'Gift Cards', url: '#' },
  ];

  const customerService = [
    { name: 'Contact Us', url: '#' },
    { name: 'FAQ', url: '#' },
    { name: 'Shipping Policy', url: '#' },
    { name: 'Return & Refund', url: '#' },
    { name: 'Track Order', url: '#' },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, url: '#', bg: 'hover:bg-blue-600' },
    { icon: <FaInstagram />, url: '#', bg: 'hover:bg-pink-600' },
    { icon: <FaTwitter />, url: '#', bg: 'hover:bg-blue-400' },
    { icon: <FaYoutube />, url: '#', bg: 'hover:bg-red-500' },
  ];

  const paymentMethods = [
    { icon: <FaCcVisa className="text-3xl text-blue-500" />, name: 'Visa' },
    { icon: <FaCcMastercard className="text-3xl text-red-500" />, name: 'Mastercard' },
    { icon: <FaCcAmex className="text-3xl text-blue-400" />, name: 'Amex' },
    { icon: <FaCcPaypal className="text-3xl text-blue-300" />, name: 'PayPal' },
  ];

  const bottomLinks = [
    { name: 'Privacy Policy', url: '#' },
    { name: 'Terms of Service', url: '#' },
    { name: 'Cookies Policy', url: '#' },
    { name: 'Site Map', url: '#' },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-10 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl h-20 w-20 flex items-center justify-center shadow-lg">
                    <FaShoppingBag className="text-white text-4xl" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-4">
                    <span className="text-3xl font-bold">Shop<span className="text-blue-400">Ease</span></span>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Your one-stop destination for all shopping needs. We offer a wide range of products with quality assurance and excellent customer service.
                  </p>
                  <div className="flex space-x-3">
                    {socialLinks.map((social, index) => (
                      <a 
                        key={index}
                        href={social.url}
                        className={`bg-gray-700 ${social.bg} w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110`}
                        aria-label={`Follow us on ${social.icon.type.name}`}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6 pb-3 border-b border-gray-700">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.url} 
                      className="group text-gray-300 hover:text-white flex items-center transition-all duration-300"
                    >
                      <HiChevronRight className="text-blue-400 mr-2 text-xs transform group-hover:translate-x-1 transition-transform" />
                      <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h3 className="text-xl font-semibold mb-6 pb-3 border-b border-gray-700">Customer Service</h3>
              <ul className="space-y-3">
                {customerService.map((service, index) => (
                  <li key={index}>
                    <a 
                      href={service.url} 
                      className="group text-gray-300 hover:text-white flex items-center transition-all duration-300"
                    >
                      <HiChevronRight className="text-blue-400 mr-2 text-xs transform group-hover:translate-x-1 transition-transform" />
                      <span className="group-hover:translate-x-1 transition-transform">{service.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-semibold mb-6 pb-3 border-b border-gray-700">Newsletter</h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                Subscribe to get updates on new products and exclusive offers.
              </p>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                    required
                  />
                  {subscriptionStatus === 'success' && (
                    <div className="absolute -bottom-6 left-0 text-green-400 text-sm animate-pulse">
                      ✓ Thank you for subscribing!
                    </div>
                  )}
                  {subscriptionStatus === 'error' && (
                    <div className="absolute -bottom-6 left-0 text-red-400 text-sm">
                      Please enter a valid email
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
                >
                  <span>Subscribe</span>
                  <FaPaperPlane className="ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Payment Methods & App Download */}
        <div className="border-t border-gray-700 pt-8 pb-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            {/* Payment Methods */}
            <div className="w-full lg:w-auto">
              <h4 className="text-lg font-medium mb-4 text-center lg:text-left">We Accept</h4>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                {paymentMethods.map((method, index) => (
                  <div 
                    key={index}
                    className="bg-gray-700 p-3 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    title={method.name}
                  >
                    {method.icon}
                  </div>
                ))}
                <div 
                  className="bg-gray-700 p-3 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  title="Apple Pay"
                >
                  <FaApple className="text-3xl" />
                </div>
              </div>
            </div>

            {/* App Download */}
            <div className="w-full lg:w-auto">
              <h4 className="text-lg font-medium mb-4 text-center lg:text-left">Download Our App</h4>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="#" 
                  className="bg-gray-700 hover:bg-gray-600 px-5 py-3 rounded-lg flex items-center transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <FaGooglePlay className="text-2xl text-green-400 mr-3" />
                  <div>
                    <div className="text-xs text-gray-300">Get it on</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </a>
                <a 
                  href="#" 
                  className="bg-gray-700 hover:bg-gray-600 px-5 py-3 rounded-lg flex items-center transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <FaApple className="text-2xl mr-3" />
                  <div>
                    <div className="text-xs text-gray-300">Download on the</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright & Bottom Links */}
        <div className="border-t border-gray-700 pt-6 pb-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} ShopEase. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
              {bottomLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url} 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;