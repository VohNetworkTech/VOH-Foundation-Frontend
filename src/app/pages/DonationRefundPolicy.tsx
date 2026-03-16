import { Link } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const sections = [
  {
    number: '1.',
    title: 'Voluntary Donations',
    content: (
      <p className="text-gray-600 leading-relaxed">
        All donations made to VOH Foundation are voluntary contributions intended to support its charitable programs and initiatives.
      </p>
    ),
  },
  {
    number: '2.',
    title: 'Refund Requests',
    content: (
      <p className="text-gray-600 leading-relaxed">
        Donations are non‑refundable.
      </p>
    ),
  },
  {
    number: '3.',
    title: 'Time Limit for Refund Requests',
    content: (
      <p className="text-gray-600 leading-relaxed">
        If a donation was made in error, please contact us within 7 days of the transaction with exact reason. Decision of refund lies with management.
      </p>
    ),
  },
  {
    number: '4.',
    title: 'Refund Processing',
    content: (
      <p className="text-gray-600 leading-relaxed">
        Approved refunds will be processed through the original mode of payment or by cheque within 7–10 working days.
      </p>
    ),
  },
  {
    number: '5.',
    title: 'Contact for Refund Requests',
    content: (
      <p className="text-gray-600 leading-relaxed">
        Please email{' '}
        <a href="mailto:csr@voh.foundation" className="text-blue-600 hover:underline font-medium">
          csr@voh.foundation
        </a>{' '}
        with details including name, donation date, transaction ID, and amount.
      </p>
    ),
  },
];

export function DonationRefundPolicy() {
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
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Donation Refund Policy</h1>
            <div className="mt-3 w-16 h-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full" />
            <p className="mt-4 text-sm text-gray-400">Effective Date: 01-01-2026</p>
            <p className="mt-2 text-gray-600 leading-relaxed">
              VOH Foundation values the support of donors who contribute to our mission of improving healthcare awareness and access.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map((section) => (
              <div key={section.title} className="border-b border-gray-100 pb-8 last:border-0">
                <h2 className="text-lg font-bold text-gray-900 mb-3">
                  {section.number} {section.title}
                </h2>
                {section.content}
              </div>
            ))}
          </div>

          {/* Contact box */}
          <div className="mt-10 bg-blue-50 border border-blue-100 rounded-xl p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-2">Need Help?</h2>
            <p className="text-gray-600 text-sm">
              For any questions regarding this policy, please reach out to us at{' '}
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
