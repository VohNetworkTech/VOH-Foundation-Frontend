import { Link } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const sections = [
  {
    title: 'Information Gathering and Use',
    content: (
      <>
        <p className="text-gray-600 leading-relaxed mb-3">
          We collect information from you in several ways, including when you:
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
          <li>Make a donation</li>
          <li>Sign up for our campaign</li>
          <li>Sign up to stay updated / Newsletter</li>
        </ul>
        <p className="text-gray-600 leading-relaxed mt-3">
          We will not collect or record your personal information unless you choose to provide it.
        </p>
      </>
    ),
  },
  {
    title: 'Use of Personal Information',
    content: (
      <>
        <p className="text-gray-600 leading-relaxed mb-3">
          We use the information you provide in the following ways:
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
          <li>To ensure we have an accurate record of all the donations we receive.</li>
          <li>To email you news and information about VOH Foundation and our campaigns, but only if you have agreed to this.</li>
          <li>To ensure you receive the most appropriate and relevant information.</li>
          <li>To learn more about you and the people who visit our website, donate, or join our campaign.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Privacy of Our Email Lists',
    content: (
      <p className="text-gray-600 leading-relaxed">
        Individuals who join our mailing lists via our website or through our campaigning engagements are added to our email database. We do not sell, rent, loan, trade, or lease the addresses on our lists to anyone.
      </p>
    ),
  },
  {
    title: 'Cookie Policy',
    content: (
      <>
        <p className="text-gray-600 leading-relaxed mb-3">
          Cookies are pieces of electronic information sent by VOH Foundation when you use our website. These will be placed on your computer's hard disk and enable us to recognize you as a user when you next visit.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
          <li>You can configure your browser to handle cookies according to your preferences. For example, you may choose to accept all cookies, reject them all, or get notified when a cookie is sent. Please check your browser's settings to modify cookie behavior as per your preferences.</li>
          <li>Please note that if you disable the use of cookies on your web browser or remove or reject specific cookies from our website or linked sites, you may not be able to use the website as intended.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Security & Protection of Data',
    content: (
      <>
        <p className="text-gray-600 leading-relaxed mb-3">
          VOH Foundation uses well-recognized and proven technology for payments. Payment information is transferred using an SSL connection, offering the highest degree of security that your browser can support.
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
          <li>Several layers of built-in security, including an advanced firewall system, encryption of credit card numbers, and the use of passwords, protect the collected information.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'External Web Services',
    content: (
      <p className="text-gray-600 leading-relaxed">
        We do not use any link of external websites on our website except links of our social media handles with our account of VOH Foundation. Any information collected by these social media handles is beyond the purview of our privacy policy. VOH Foundation is not expressly or impliedly responsible for, or liable for any loss or damage caused to you by the collection, use, and retention of personal information by such social media handle websites in any manner whatsoever. It is important that you review the privacy policies of all websites you visit before you disclose any information to such websites.
      </p>
    ),
  },
  {
    title: 'Changes to Privacy Policy',
    content: (
      <p className="text-gray-600 leading-relaxed">
        As and when the need arises, VOH Foundation may alter its privacy policy in accordance with the latest technology and trends. We strive to provide you with timely notice of these changes. You may reach out to us if you have any queries about any changes made to our practices.
      </p>
    ),
  },
];

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Breadcrumb */}
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-blue-600 transition-colors mb-8"
          >
            ← Back to Home
          </Link>

          {/* Header */}
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Privacy Policy</h1>
            <div className="mt-3 w-16 h-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full" />
            <p className="mt-4 text-sm text-gray-400">VOH Foundation</p>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.title} className="border-b border-gray-100 pb-10 last:border-0">
                <h2 className="text-lg font-bold text-gray-900 mb-3">{section.title}</h2>
                {section.content}
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="mt-10 bg-blue-50 border border-blue-100 rounded-xl p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-2">Contact Us</h2>
            <p className="text-gray-600 text-sm">
              If you have any questions at all about our privacy policy, please email us at:{' '}
              <a href="mailto:csr@voh.foundation" className="text-blue-600 hover:underline font-medium">
                csr@voh.foundation
              </a>
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
