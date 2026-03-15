import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Gradient top stripe */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

          {/* Brand + Contact */}
          <div>
            {/* Logo */}
            <div className="mb-5">
              <img
                src="https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773530472840%3A0.12478133441446215.png"
                alt="VOH Foundation"
                className="h-7 w-auto object-contain brightness-0 invert"
              />
            </div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">CONTACT US</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-teal-400" />
                <span className="text-sm text-gray-300">Dr. Nishchal Naveen</span>
              </div>
              {/* <div className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 flex-shrink-0 text-teal-400" />
                <span className="text-sm text-gray-300">+91 123 456 7890</span>
              </div> */}
              <div className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 flex-shrink-0 text-teal-400" />
                <span className="text-sm text-gray-300">csr@voh.foundation</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">QUICK LINKS</h3>
            <div className="space-y-2">
              {['About Us', 'Founder', 'Projects', 'Gallery', 'Collaboration'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="block text-sm text-gray-300 hover:text-teal-400 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">LEGAL</h3>
            <div className="space-y-2">
              <Link to="/privacy-policy" className="block text-sm text-gray-300 hover:text-teal-400 transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">FOLLOW US</h3>
            <div className="flex gap-3">
              {[
                { icon: <Facebook size={17} />, label: 'Facebook' },
                { icon: <Twitter size={17} />, label: 'Twitter' },
                { icon: <Linkedin size={17} />, label: 'LinkedIn' },
                { icon: <Instagram size={17} />, label: 'Instagram' },
              ].map(({ icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-600 hover:to-teal-600 transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-5 leading-relaxed">
              Follow our journey in bringing healthcare to underserved communities.
            </p>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-gray-500">
          <p>© 2025 Purpose Plus Care Foundation — All rights reserved</p>
          <p className="text-xs">
            Built with <span className="text-teal-400">♥</span> for a healthier India
          </p>
        </div>
      </div>
    </footer>
  );
}
