import { Mail, Phone, MapPin, User } from 'lucide-react';

const XIcon = () => (
  <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.261 5.632 5.903-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);
import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Gradient top stripe */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 mb-10">

          {/* Brand + Social */}
          <div className="lg:col-span-4">
            <img
              src="https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773530472840%3A0.12478133441446215.png"
              alt="VOH Foundation"
              className="h-8 w-auto object-contain brightness-0 invert"
            />
            <p className="text-sm text-gray-400 mt-4 leading-relaxed max-w-xs">
              Follow our journey in bringing healthcare to underserved communities.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { icon: <InstagramIcon />, label: 'Instagram', href: 'https://www.instagram.com/vohfoundation_official/' },
                { icon: <XIcon />, label: 'X', href: 'https://x.com/voh_foundation' },
                { icon: <LinkedInIcon />, label: 'LinkedIn', href: 'https://www.linkedin.com/company/102000406/' },
                // { icon: <Facebook size={17} />, label: 'Facebook', href: '#' },
              ].map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-600 hover:to-teal-600 transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">CONTACT US</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-teal-400" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Tower+B+Unitech+Business+Zone+Sector+50+Gurgaon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-300 hover:text-teal-400 transition-colors leading-relaxed"
                >
                  <span className="block text-xs text-gray-400">Head Office</span>
                  104, First Floor, Tower B, Unitech Business Zone, Sector 50, Gurgaon
                </a>
              </div>
              <div className="flex items-start gap-3">
                <User size={16} className="mt-0.5 flex-shrink-0 text-teal-400" />
                <span className="text-sm text-gray-300">Tuhinaa Despande</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 flex-shrink-0 text-teal-400" />
                <a href="tel:+919999651145" className="text-sm text-gray-300 hover:text-teal-400 transition-colors">+91 99996 51145</a>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 flex-shrink-0 text-teal-400" />
                <a href="mailto:csr@voh.foundation" className="text-sm text-gray-300 hover:text-teal-400 transition-colors">csr@voh.foundation</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">QUICK LINKS</h3>
            <div className="space-y-3">
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
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">LEGAL</h3>
            <div className="space-y-3">
              <Link to="/privacy-policy" className="block text-sm text-gray-300 hover:text-teal-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/donation-refund-policy" className="block text-sm text-gray-300 hover:text-teal-400 transition-colors">
                Donation Refund Policy
              </Link>
              <Link to="/terms-and-conditions" className="block text-sm text-gray-300 hover:text-teal-400 transition-colors">
                Terms and Conditions
              </Link>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-gray-500">
          <p>© 2024 VOH Foundation — All rights reserved</p>
          <p className="text-xs">
            Built with <span className="text-teal-400">♥</span> for a healthier India
          </p>
        </div>
      </div>
    </footer>
  );
}
